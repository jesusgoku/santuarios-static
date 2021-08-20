import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import Head from 'next/head';

import MainLayout from '@app/components/layouts/Main/Main';

import styles from './NewsItem.module.css';

function NewsItem() {
  const router = useRouter();
  const { id } = router.query;
  const { isLoading, error, data } = useQuery(['fetchNewsItem', id], () => (id ? fetch(`https://caps.santuariosdealtura.cl/api/news.php?id=${id}`) : Promise.resolve({ json: () => ({ data: [] }) })).then((res) => res.json()));

  const newsItem = data?.data?.[0];

  return (
    <MainLayout>
      <Head>
          <title>{newsItem ? `${newsItem.title} - ` : '' }Noticias - Santuarios de Altura</title>
      </Head>

      {isLoading && (<p>Cargando ...</p>)}

      {error && (<p>Error cargando la noticia</p>)}

      {newsItem && (<div dangerouslySetInnerHTML={{ __html: newsItem.content.replace(/\/views/g, 'https://caps.santuariosdealtura.cl/views') }} className={styles.NewsItem__Content} />)}
    </MainLayout>
  );
}

export default NewsItem;
