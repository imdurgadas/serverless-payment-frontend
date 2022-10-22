import { Box, Stack } from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import Card from './Card';

const Home = () => {
  const PAYMENT_HOST = process.env.REACT_APP_PAYMENT_HOST;
  const checkoutHandler = async amount => {
    const {
      data: { key },
    } = await axios.get(`${PAYMENT_HOST}/payments/context`);

    const {
      data: { order },
    } = await axios.post(`${PAYMENT_HOST}/payments/checkout`, {
      amount,
    });

    const options = {
      key: key,
      amount: order.amount,
      currency: 'INR',
      name: 'ServerlessKart',
      description: 'Serverless Shopping Example',
      image: 'https://avatars.githubusercontent.com/u/7334961',
      order_id: order.id,
      callback_url: `${PAYMENT_HOST}/payments/verify`,
      prefill: {
        name: 'John Doe',
        email: 'johndoe@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#1D2025',
      },
    };

    var razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <Box>
      <Stack
        h={'100vh'}
        alignItems="center"
        justifyContent={'center'}
        direction={['column', 'row']}
      >
        <Card
          amount={250}
          img="https://m.media-amazon.com/images/I/4125d5RJ+zL.jpg"
          checkoutHandler={checkoutHandler}
        ></Card>
        <Card
          amount={655}
          img="https://m.media-amazon.com/images/I/61N2a92STML._AC_UL480_FMwebp_QL65_.jpg"
          checkoutHandler={checkoutHandler}
        ></Card>
      </Stack>
    </Box>
  );
};

export default Home;
