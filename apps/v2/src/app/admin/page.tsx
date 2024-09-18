import { GetServerSideProps } from 'next';

export default function Admin(): JSX.Element {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      {/* Admin functionalities go here */}
    </main>
  );
}

// Example server-side protection
export const getServerSideProps: GetServerSideProps = async (context) => {
  const ip = context.req.socket.remoteAddress || '';
  const allowedIpRange = ['your.vpn.ip.range'];

  if (!allowedIpRange.includes(ip)) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return { props: {} };
};