"use client";
import { FC } from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

const HowItWorksSection: FC = () => {
  return (
    <Box
      height="440px"
      paddingX="136px"
      paddingTop="52px"
      paddingBottom="32px"
      color="black"
      fontSize="xl"
      textAlign="center"
    >
      <Text fontSize="54px" fontWeight="700" color="#ff4d00">
        How it works?
      </Text>
      <Flex direction="row">
        <Box height={208} position="relative" marginTop={5}>
          <Image src="/Vector_31.svg" alt="" />
          <Text
            fontWeight="600"
            position="absolute"
            fontSize={24}
            top={0}
            right={0}
            mt={6}
            mr={4}
            opacity="0.3"
            color="#fff"
          >
            {`01`}
          </Text>
          <Text
            top={0}
            left={0}
            mt={8}
            ml={8}
            fontWeight="700"
            position="absolute"
            fontSize={24}
            color="#daff02"
          >
            Borrow
          </Text>
          <Text
            top={0}
            left={0}
            mt={16}
            ml={8}
            fontWeight="500"
            position="absolute"
            fontSize={16}
            opacity="0.3"
            color="#fff"
            textAlign="left"
          >
            {`Deposit your LRTs as collateral. Decide the interest fee you would like to pay. Borrow USDz.  `}
          </Text>
        </Box>
        <Box height="60px" width="144px" marginTop="120px">
          <Image
            src="/link_up_bottom.svg"
            alt=""
            position="relative"
            height="100%"
            width="100%"
          />
        </Box>
        <Box height={208} position="relative" marginTop={24}>
          <Image src="/Vector_31.svg" alt="" />
          <Text
            fontWeight="600"
            position="absolute"
            fontSize={24}
            top={0}
            right={0}
            mt={6}
            mr={4}
            opacity="0.3"
            color="#fff"
          >
            {`02`}
          </Text>
          <Text
            top={0}
            left={0}
            mt={3}
            ml={6}
            fontWeight="700"
            position="absolute"
            fontSize={24}
            color="#daff02"
          >
            Earn
          </Text>
          <Text
            top={0}
            left={0}
            mt={12}
            ml={6}
            fontWeight="500"
            position="absolute"
            fontSize={15}
            opacity="0.3"
            color="#fff"
            textAlign="left"
          >
            {`Earn with USDz by participating in the stability pool, or farming opportunities across DeFi or simply holding USDz.`}
          </Text>
        </Box>
        <Box height="60px" width="144px" marginTop="120px">
          <Image
            src="/link_bottom_up.svg"
            alt=""
            position="relative"
            height="100%"
            width="100%"
          />
        </Box>
        <Box height={208} position="relative" marginTop={5}>
          <Image src="/Vector_31.svg" alt="" />
          <Text
            fontWeight="600"
            position="absolute"
            fontSize={24}
            top={0}
            right={0}
            mt={6}
            mr={4}
            opacity="0.3"
            color="#fff"
          >
            {`03`}
          </Text>
          <Text
            top={0}
            left={0}
            mt={8}
            ml={8}
            fontWeight="700"
            position="absolute"
            fontSize={24}
            color="#daff02"
          >
            Redeem
          </Text>
          <Text
            top={0}
            left={0}
            mt={16}
            ml={8}
            fontWeight="500"
            position="absolute"
            fontSize={16}
            opacity="0.3"
            color="#fff"
            textAlign="left"
          >
            {`Redeem your collateral at any time by repaying your loan with USDz.`}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default HowItWorksSection;
