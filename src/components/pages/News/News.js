import { useQuery } from 'react-query';
import Head from 'next/head';
import Link from 'next/link';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

import MainLayout from '@app/components/layouts/Main';

function News() {
  const { isLoading, error, data } = useQuery('fetchNews', () =>
    fetch('https://caps.santuariosdealtura.cl/api/v2/news').then((res) =>
      res.json()
    )
  );

  let processes = data?.data?.reduce((acc, item) => {
    const d = new Date(item.createdAt);
    const year = d.getFullYear();
    const ld = new Date(`${year}-07-01 00:00:00`);

    const key = d < ld ? year - 1 : year;

    (acc[key] = acc[key] || []).push(item);

    return acc;
  }, {});

  processes = Object.entries(processes || {})
    .map(([key, data]) => {
      const year = parseInt(key, 10);
      const label = `Proceso ${year}-${year + 1}`;

      return {
        data,
        year,
        label,
      };
    })
    .sort(({ year: a }, { year: b }) => b - a);

  return (
    <MainLayout>
      <Head>
        <title>Noticias - Santuarios de Altura</title>
      </Head>

      <h2>Noticias</h2>

      {isLoading && <p>Cargando ...</p>}

      {error && <p>Error intentando cargar las noticias</p>}

      {processes && (
        <Accordion defaultActiveKey="0">
          {processes.map(({ label, year, data }, index) => (
            <Card>
              <Accordion.Toggle as={Card.Header} eventKey={`${index}`}>
                {label}
              </Accordion.Toggle>
              <Accordion.Collapse eventKey={`${index}`}>
                <Card.Body>
                  {data && (
                    <ListGroup variant="flush">
                      {data.map((item) => (
                        <Link
                          href={`/iniciativas/caps/noticias/${item.id}`}
                          passHref
                        >
                          <ListGroup.Item action>{item.title}</ListGroup.Item>
                        </Link>
                      ))}
                    </ListGroup>
                  )}
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
      )}
    </MainLayout>
  );
}

export default News;
