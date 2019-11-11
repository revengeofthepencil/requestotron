import {useRouter} from 'next/router';
import Layout from '../templates/MyLayout';
import Markdown from 'react-markdown';

const Page = () => {
    const router = useRouter();

    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This here is the blog post content.</p>
        </Layout>
    );
};

export default Page;
