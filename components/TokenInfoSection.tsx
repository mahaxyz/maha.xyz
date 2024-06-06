// import { FC } from "react";
// import { Box, Flex, Image, Text, SimpleGrid } from "@chakra-ui/react";

// const TokenInfoSection: FC = () => {
//   return (
//   <SimpleGrid minChildWidth="120px" spacing="40px">
//   <Box bg="yellow" p={4} borderRadius="md" shadow="md" flex={8} />
//   <Box bg="green" p={4} borderRadius="md" shadow="md" flex={4} />
// </SimpleGrid>
//     <Box marginLeft="120px" marginRight="88px" marginTop="20%" height="400px">
//       <Flex height="100%" alignItems="stretch">
//         <Box flex="4" mr="16px">
//           <Image
//             src="/Vector_27.svg"
//             alt=""
//             height="100%"
//             width="100%"
//             maxWidth="100%"
//             maxHeight="100%"
//             overflow="hidden"
//           />
//           <Box
//             position="absolute"
//             top="38.7%"
//             left="11%"
//             width="100%"
//             height="100%"
//           >
//             <Image src="/Morflax_shift_logo_8_2.svg" alt="" objectFit="cover" />
//           </Box>
//           <Box
//             position="absolute"
//             top="39.7%"
//             left="16%"
//             width="100%"
//             height="100%"
//           >
//             <Image src="/Morflax_shift_logo_8_1.svg" alt="" objectFit="cover" />
//           </Box>
//           <Text
//             position="absolute"
//             top="45.4%"
//             left="13%"
//             width="100%"
//             fontSize="40px"
//             fontWeight="700"
//             color="#000"
//           >{`ZAI ($USDZ)`}</Text>
//         </Box>
//         <Box flex="8" ml="16px" position="relative">
//           <Image
//             src="/Vector_25.svg"
//             alt=""
//             height="100%"
//             width="100%"
//             maxWidth="100%"
//             maxHeight="100%"
//             overflow="hidden"
//           />
//           <Box
//             width="622px"
//             position="absolute"
//             top="36%"
//             left="8%"
//             fontSize="24px"
//             letterSpacing="-0.03em"
//             lineHeight="120%"
//             fontWeight="600"
//             fontFamily="Kode Mono"
//             color="#000"
//             textAlign="left"
//             display="inline-block"
//           >
//             <Text
//               width="100%"
//               fontSize="24px"
//               lineHeight="120%"
//               fontWeight="600"
//               display="flex"
//               flexShrink="0"
//             >
//               {`ZAI (USDz) is an yield bearing stablecoin that can be borrowed using liquid restaking tokens at 0% interest fee.`}
//             </Text>
//             <Box
//               display="flex"
//               flexDirection="row"
//               position="relative"
//               width="100%"
//               gap="32px"
//               marginTop="24px"
//             >
//               <Box
//                 position="relative"
//                 width="100%"
//                 height="52px"
//                 textAlign="left"
//                 fontSize="24px"
//                 color="#110f10"
//                 fontFamily="Kode Mono"
//               >
//                 <Image
//                   src="Vector_33_orange.svg"
//                   alt=""
//                   position="relative"
//                   top="0"
//                   left="0"
//                   width="196px"
//                   height="48px"
//                 />
//                 <Text
//                   position="absolute"
//                   top="12px"
//                   left="14px"
//                   letterSpacing="-0.03em"
//                   lineHeight="120%"
//                   fontWeight="600"
//                 >
//                   Learn More
//                 </Text>
//                 <Image
//                   src="Arrow_right_yellow.svg"
//                   alt=""
//                   position="absolute"
//                   height="32%"
//                   width="8%"
//                   top="36%"
//                   right="0%"
//                   bottom="36%"
//                   left="56%"
//                   maxWidth="100%"
//                   overflow="hidden"
//                   maxHeight="100%"
//                 />
//               </Box>
//               <Box
//                 position="relative"
//                 width="100%"
//                 height="52px"
//                 textAlign="left"
//                 fontSize="24px"
//                 color="#110f10"
//                 fontFamily="Kode Mono"
//                 right="12%"
//               >
//                 <Image
//                   src="Vector_33_white.svg"
//                   alt=""
//                   position="relative"
//                   top="0"
//                   left="0"
//                   width="196px"
//                   height="48px"
//                 />
//                 <Text
//                   position="absolute"
//                   top="12px"
//                   left="14px"
//                   letterSpacing="-0.03em"
//                   lineHeight="120%"
//                   fontWeight="600"
//                 >
//                   Learn More
//                 </Text>
//                 <Image
//                   src="Arrow_right_black.svg"
//                   alt=""
//                   position="absolute"
//                   height="32%"
//                   width="8%"
//                   top="36%"
//                   right="0%"
//                   bottom="36%"
//                   left="53%"
//                   maxWidth="100%"
//                   overflow="hidden"
//                   maxHeight="100%"
//                 />
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default TokenInfoSection;

"use client";
import { Box, Image, Text, Flex, SimpleGrid } from "@chakra-ui/react";

const TokenInfoSection = () => {
  return (
    <Box mx={120} marginTop={32} height={400}>
      <Flex gap={5}>
        <Box flex="4" position="relative">
          <Image src="/Vector_27.svg" alt="" width={388} overflow="hidden" />
          <Box
            position="absolute"
            bottom={59}
            top={-12}
            left={18}
            right={0}
            zIndex={1}
          >
            <Image src="/Morflax_shift_logo_8_2.svg" alt="" objectFit="cover" />
          </Box>
          <Box
            position="absolute"
            bottom={56}
            top={-1}
            left={24}
            right={0}
            zIndex={2}
          >
            <Image src="/Morflax_shift_logo_8_1.svg" alt="" objectFit="cover" />
          </Box>
          <Text
            position="absolute"
            bottom={2}
            left={12}
            right={0}
            fontSize="2.5rem"
            fontWeight="700"
            color="#000"
          >{`ZAI ($USDZ)`}</Text>
        </Box>
        <Box flex="8" position="relative" bottom={0} left={0} right={0}>
          <Image src="/Vector_25.svg" alt="" width={780} />
          <Text
            top={0}
            mt={16}
            px={10}
            color="#000"
            textAlign="left"
            position="absolute"
            fontSize="1.5rem"
            fontWeight="600"
          >
            {`ZAI (USDz) is an yield bearing stablecoin that can be borrowed using liquid restaking tokens at 0% interest fee.`}
          </Text>
          <SimpleGrid
            columns={2}
            spacing={8}
            height={16}
            position="absolute"
            bottom={0}
            mb={9}
            px={10}
          >
            <Box width={56} position="relative">
              <Image src="Vector_33_orange.svg" alt="" />
              <Text
                position="absolute"
                top={3}
                left={4}
                textAlign="left"
                fontSize="1.5rem"
                color="#110f10"
                fontWeight="600"
              >
                Learn More
              </Text>
              <Image
                src="Arrow_right_yellow.svg"
                alt=""
                position="absolute"
                top={0}
                mt={5}
                right={4}
              />
            </Box>
            <Box width={56} position="relative">
              <Image src="Vector_33_white.svg" alt="" />
              <Text
                position="absolute"
                top={3}
                left={4}
                textAlign="left"
                fontSize="1.5rem"
                color="#110f10"
                fontWeight="600"
              >
                Learn More
              </Text>
              <Image
                src="Arrow_right_black.svg"
                alt=""
                position="absolute"
                top={0}
                mt={5}
                right={8}
              />
            </Box>
          </SimpleGrid>
        </Box>
      </Flex>
    </Box>
  );
};

export default TokenInfoSection;
