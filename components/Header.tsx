'use client'
import { Box, Flex, Text } from '@chakra-ui/react';
import type { FC } from 'react';
import Image from 'next/image';
import { Kode_Mono } from 'next/font/google';

const kodeMono = Kode_Mono({ weight: '600', subsets: ['latin'] });

const Header: FC = () => {
  return (
    <Box
      width="100%"
      p="24px 60px"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      textAlign="center"
      fontSize="16px"
      color="#fff"
      bg="#000"
      mb="20px"
    >
      <Flex
        w="190px"
        flexDirection="row"
        alignItems="center"
        justifyContent="flex-start"
        gap="32px"
      >
        <Flex alignItems="center" gap="6px">
          <Text
            className={kodeMono.className}
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontWeight="600"
          >
            Vision
          </Text>
        </Flex>
        <Flex alignItems="center" gap="6px">
          <Text
            className={kodeMono.className}
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontWeight="600"
          >
            FAQ
          </Text>
        </Flex>
      </Flex>
      <Image
        width={160}
        height={33.5}
        src="/MahaBrandLogo.png"
        alt="MAHA Logo"
      />
      <Flex flexDirection="row" alignItems="center" justifyContent="flex-start" gap="32px">
        <Flex alignItems="center" gap="6px">
          <Text
            className={kodeMono.className}
            letterSpacing="-0.03em"
            lineHeight="120%"
            fontWeight="600"
          >
            About
          </Text>
        </Flex>
        <Text
          className={kodeMono.className}
          letterSpacing="-0.03em"
          lineHeight="120%"
          fontWeight="600"
        >
          How it works
        </Text>
      </Flex>
    </Box>
  );
};

export default Header;
