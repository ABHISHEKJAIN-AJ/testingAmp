import {NextPage} from 'next';
import {useAmp} from "next/amp";
import { NextSeo } from 'next-seo';

interface Props {
    userAgent: string | undefined;
}

export const config = {
    amp: 'hybrid'
};

const Home: NextPage<Props> = ({userAgent}) => {
    const isAmp = useAmp()

    return (
        <div>
            <NextSeo
                title='This is page title'
                description='This is page description'
                />
            <p>Welcome to Next.js</p>
            <a href={isAmp ? '/home?amp=1' : '/home'}>home page</a>
            <p>This is an amp page ? {isAmp+''}</p>
            <style jsx>{
                `
          p {
            color: white;
            font-size: 50px;
            text-align: center;
          }
          a {
            color: purple;
            font-size: 60px;
            text-decoration: none;
          }
        `
            }</style>
            <style global jsx>{
                `
          body {
            background: green;
          }
          `
            }
            </style>
        </div>
    );
};

Home.getInitialProps = async ({req}): Promise<Props> => {
    const userAgent: string | undefined = req ? req.headers['user-agent'] : navigator.userAgent;
    return {userAgent};
};

export default Home;
