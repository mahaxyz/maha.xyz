"use client";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Header from "../../components/Header";
import IntroSection from "../../components/IntroSection";
import StakedSection from "../../components/StakedSection";
import TokenInfoSection from "../../components/TokenInfoSection";
import SupportedCollateralsSection from "../../components/SupportedCollateralsSection";
import HowItWorksSection from "../../components/HowItWorksSection";
import EcosystemPartnersSection from "../../components/EcosystemPartnersSection";
import AuditSection from "../../components/AuditSection";
import Footer from "../../components/Footer";

const HomePage: NextPage = () => {
  return (
    <Box bg="#000" height="100%" width="100%">
      <Header />
      <IntroSection />
      <StakedSection />
      <TokenInfoSection />
      <SupportedCollateralsSection />
      <HowItWorksSection />
      <EcosystemPartnersSection />
      <AuditSection />
      <Footer />
    </Box>
  );
};

export default HomePage;
