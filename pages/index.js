import Layout from '../templates/MyLayout';
import Link from 'next/link';


const PostLink = props => {
    return <li>
        <Link href="/paramtest/[id]" as={`/paramtest/${props.id}`}>
            <a>{props.title ? props.title : props.id}</a>
        </Link>

        <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>

    </li>
}



const getPosts = () => {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
}

const Index = () => (
  <Layout>

      <h1>My Blog</h1>
      <ul>
          {getPosts().map(post => (
              <PostLink key={post.id} id={post.id} title={post.title} />

          ))}
      </ul>


      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
          color: blue;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
  </Layout>
);


export default Index;

