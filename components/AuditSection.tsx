"use client";
import { Box, Text } from "@chakra-ui/react";
import { FC } from "react";

const AuditSection: FC = () => {
  return (
    <Box
      width="100vw"
      height="760px"
      paddingX="120px"
      paddingY="32px"
      alignContent="start"
    >
      <Box
        width="72%"
        position="relative"
        backgroundColor="#181818"
        height="132.7px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        borderRadius="24px"
        marginRight="24px"
      >
        <Text
          width="616px"
          fontSize="54px"
          lineHeight="118.12%"
          display="inline-block"
          color="#ff4d00"
          fontWeight="700"
          textAlign="center"
        >
          Audits and Security
        </Text>
      </Box>
      <Box
        left="70.5%"
        width="20%"
        top="78.6%"
        position="absolute"
        borderRadius="21px"
        background="linear-gradient(180deg, rgba(41, 39, 40, 0), #292728)"
        height="226px"
      />
      <Box
        left="18.65%"
        width="50%"
        top="78.6%"
        position="absolute"
        borderRadius="21px"
        background="#181818"
        height="226px"
      />
    </Box>
  );
};

export default AuditSection;
