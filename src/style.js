const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    nadpisY: "font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-fbcyellow select-none",
    nadpisG: "font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center text-fbcgreen select-none",
    nadpisHome: "font-poppins font-bold text-[1.5rem] xs:text-[2.2rem] sm:text-[40px] xs:leading-[76.8px] sm:leading-[66.8px] w-full text-center text-fbcgreen select-none",
    divNadpisAnim: "font-poppins font-bold xs:text-[48px] text-[40px] xs:leading-[76.8px] leading-[66.8px] w-full text-center bg-gradient-to-r bg-clip-text text-transparent from-yellow-500 via-black to-fbcgreen animate-text",
  
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-center select-none",
    heading3: "font-poppins font-bold text-[1.5rem] xs:text-[2.2rem] sm:text-[2rem] xs:leading-[76.8px] sm:leading-[66.8px] w-full text-center text-fbcgreen select-none",

    paragraph: "font-poppins font-normal text-[18px] leading-[30.8px]",
    paragraphTreninky: "font-poppins font-normal text-[18px] sm:text-[25px] leading-[30.8px]",
    spanBgTxt: "bg-black bg-opacity-50 rounded-lg px-2 py-1",
    spanBgTxt1: "bg-gray-400 bg-opacity-100 rounded-lg px-2 py-1 border-2 border-black",
    paragraphKlub: "font-poppins font-medium text-[20px] leading-[30.8px]",
    paragraphPrisp: "font-poppins font-normal text-[15px] leading-[30px] text-gray-300",
    paragraphHome: "font-base text-[20px] leading-[30.8px]",
  
    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
  
    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    paddingY1: "sm:pb-1 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",
  
    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6",

    footerH1: "text-2xl mb-2 select-none",
    footerIcon: "w-[20%] p-3 mt-1 ml-20 scale-100 hover:scale-125 lg:p-1 lg:mt-1 md:p-6 md:mt-0 sm:p-4 sm:mt-0 ss:p-1 ss:mt-3 xs:p-0 xs:mt-6",

    colorCirc: "inline-block w-4 h-4 rounded-full mx-1",
  };
  
  export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,
  
    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,
  
    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
  };
  
  export default styles;