import { Box, Flex, Text, Image, Icon } from "@chakra-ui/react";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { Kode_Mono } from "next/font/google";

const kodeMono600 = Kode_Mono({ weight: "600", subsets: ["latin"] });

const Footer: React.FC = () => {
  return (
    <Box
      as="footer"
      width="100%"
      position="relative"
      backgroundColor="#181818"
      height="240px"
      paddingY="54px"
      paddingX="120px"
    >
      <Box width="100%" height="100%">
        <Flex height="100%" width="100%">
          <Box flex="10">
            <Box height="50%">
              <Image
                src="/MahaBrandLogo.png"
                alt="Maha Brand Logo PNG"
                objectFit="contain"
              />
            </Box>
            <Box height="50%" display="flex" alignItems="center" paddingBottom="16px">
              <Icon as={FaTwitter} boxSize={6} color="white" mr="24px" />
              <Icon as={FaInstagram} boxSize={6} color="white" mr="24px" />
              <Icon as={FaFacebook} boxSize={6} color="white" mr="24px" />
              <Icon as={FaLinkedin} boxSize={6} color="white" mr="24px" />
            </Box>
          </Box>
          <Box flex="6">
            <Flex height="100%">
              <Box flex="1">
                <Box
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  gap="16px"
                  textAlign="left"
                  fontSize="16px"
                  fontFamily="'Kode Mono', monospace"
                  color="rgba(255, 255, 255, 0.3)"
                >
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                    color="#fff"
                  >
                    Company
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                </Box>
              </Box>
              <Box flex="1">
                <Box
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  gap="16px"
                  textAlign="left"
                  fontSize="16px"
                  fontFamily="'Kode Mono', monospace"
                  color="rgba(255, 255, 255, 0.3)"
                >
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                    color="#fff"
                  >
                    Company
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                </Box>
              </Box>
              <Box flex="1">
                <Box
                  width="100%"
                  display="flex"
                  flexDirection="column"
                  alignItems="flex-start"
                  justifyContent="flex-start"
                  gap="16px"
                  textAlign="left"
                  fontSize="16px"
                  fontFamily="'Kode Mono', monospace"
                  color="rgba(255, 255, 255, 0.3)"
                >
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                    color="#fff"
                  >
                    Blockchain
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                  <Text
                    className={kodeMono600.className}
                    position="relative"
                    textDecoration="underline"
                    letterSpacing="-0.03em"
                    lineHeight="120%"
                    fontWeight="600"
                  >
                    Brandkit
                  </Text>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
