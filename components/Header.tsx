// "use client";
// import { Box, Flex, Text } from "@chakra-ui/react";
// import type { FC } from "react";
// import Image from "next/image";

// const Header: FC = () => {
//   return (
//     <Box
//       width="100%"
//       p={["4", "6", "8"]}
//       display="flex"
//       flexDirection="row"
//       alignItems="center"
//       justifyContent="space-between"
//       textAlign="center"
//       fontSize={["small", "medium", "large"]}
//       color="#fff"
//       bg="#000"
//     >
//       <Flex
//         w={["140px", "160px", "190px"]}
// flexDirection="row"
// alignItems="center"
// justifyContent="flex-start"
//         gap={["16px", "24px", "32px"]}
//       >
//         <Flex alignItems="center" gap="6px">
//           <Text letterSpacing="-0.03em" lineHeight="120%" fontWeight="600">
//             Vision
//           </Text>
//         </Flex>
//         <Flex alignItems="center" gap="6px">
//           <Text letterSpacing="-0.03em" lineHeight="120%" fontWeight="600">
//             FAQ
//           </Text>
//         </Flex>
//       </Flex>
// <Image
//   width={160}
//   height={33.5}
//   src="/MahaBrandLogo.png"
//   alt="MAHA Logo"
//   style={{ width: "10vw", height: "auto" }}
// />
//       <Flex
//         flexDirection="row"
//         alignItems="center"
//         justifyContent="flex-start"
//         gap={["16px", "24px", "32px"]}
//       >
//         <Flex alignItems="center" gap="6px">
//           <Text letterSpacing="-0.03em" lineHeight="120%" fontWeight="600">
//             About
//           </Text>
//         </Flex>
//         <Text letterSpacing="-0.03em" lineHeight="120%" fontWeight="600">
//           How it works
//         </Text>
//       </Flex>
//     </Box>
//   );
// };

// export default Header;

"use client";
import { Box, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    <Box width="100%" bg="#000" py="1.5rem" px="3.75rem" height="5rem">
      <Flex width="100%">
        <Box flex="2">
          <Flex
            width="100%"
            height="100%"
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
            gap="2rem"
          >
            <Text
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontSize="1rem"
              color="#fff"
              fontWeight="600"
            >
              Vision
            </Text>
            <Text
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontSize="1rem"
              color="#fff"
              fontWeight="600"
            >
              Mission
            </Text>
          </Flex>
        </Box>

        <Box flex="8">
          <Flex
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              width={160}
              height={33.5}
              src="/MahaBrandLogo.png"
              alt="MAHA Logo"
              style={{ width: "10vw", height: "auto" }}
            />
          </Flex>
        </Box>
        <Box flex="2">
          <Flex
            width="100%"
            height="100%"
            justifyContent="flex-end"
            alignItems="center"
            gap="2rem"
          >
            <Text
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontSize="1rem"
              color="#fff"
              fontWeight="600"
            >
              About
            </Text>
            <Text
              letterSpacing="-0.03em"
              lineHeight="120%"
              fontSize="1rem"
              color="#fff"
              fontWeight="600"
            >
              How it works
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
export default Header;
