import urllib.request
import os
import re
from urllib.parse import urlparse, unquote

# Todas las imágenes del portfolio
images = [
    # Reel
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694608038988-DLS2XDJRMCX26DJYC47V/Screenshot+2023-09-13+at+14.24.35.png",
    # Google
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034548-L4HZ25JBV4HTQ2NFMNRF/Google_avatar.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034084-QGT0FFYBKKR9DSMPFDLL/Google-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034179-ZEI9PRUQ68E74OGKMV3C/Google-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034185-4DFXQQYT0JMG4T7DAJ99/Google-07.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034206-IYUBKH6WRLTANVBRFR3Q/Google-08.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034214-VKPCRPH3NUHJXMYA6XQV/Google-09.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034385-YSRZ5GK1VN96GC2OVPA6/Google-10.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034434-3J9CB0NRL4ZJ8FCCKZRI/Google-15.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034416-2PRZFOHEZABOL8I1FVO3/Google-18.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034422-XUTIL0BYQ6N5LEAR5BRC/Google-16.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034427-Q7XG09LYQOSCTA2BDGYW/Google-17.png",
    # NatGeo Kids Xmas
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037678-V3RPJA5HTYLV2PTI6GHP/NatGeo+Kids+Navidad-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037192-3G02BI0NKZZBJGYBYJ6V/NatGeo+Kids+Navidad-03.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037224-CK2T7PNOQ645V7U3NT70/NatGeo%2BKids%2BNavidad-05.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037219-WFNWVZEQNWFXZK96AASM/NatGeo+Kids+Navidad-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037210-356K54ZX0ZFBQLF0LFSD/NatGeo%252BKids%252BNavidad-07.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037351-U2RPNM9UH9023CEUW2U1/NatGeo+Kids+Navidad-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037371-XESP2CGJIRYPINHT8GKM/0.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037494-6L0UHIIBCJDMI14SS953/ESC_A_0442.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037586-ENW9ZIUCNF02N7H1RBFD/Id_Especial+Navidad_ID_Especial_Fiestas_15+sec_ProRess+Alpha_1_H.264+%280-00-09-13%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037611-22VZ98LZMLAIQ088VFPY/Id_Especial+Navidad_ID_Especial_Fiestas_15+sec_ProRess+Alpha_1_H.264+%280-00-09-26%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037645-LLJRIF14YH8C3D68G3VN/Id_Especial+Navidad_ID_Especial_Fiestas_15+sec_ProRess+Alpha_1_H.264+%280-00-14-28%29.jpg",
    # Disney Channel
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033284-PNBTTU0FD1SGSP18D25D/disney+channel.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033124-VCBGB78ARBORZ7D8SHZX/DisneyChannel_Logos_1-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033190-DXGO6D1JQ7D15SEGAWGU/DisneyChannel_Logos-07.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033204-VXGE9LHFHRMF63K17CXG/DisneyChannel_Logos-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033215-Q9RDC8TYCU0DFNTYDF92/DisneyChannel_Logos-08.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033239-Q5J06R23Q6SQ5GHM2VGW/DisneyChannel_Logos-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033233-2SQCMAV3KWSLN1EPXH54/DisneyChannel_Logos-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033227-GQ28YP1PK9YFG682DWBW/DisneyChannel_Logos-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033245-K7LUL9QGZ6Y9HEW9DGOV/DisneyChannel_Logos-09.png",
    # Hinchas
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694528922196-DGBOAVHVLO549RB8JIP5/hinchas.jpeg",
    # Bahamas
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034067-Q5W0OZ1PDR7WAR7DRTYA/Bahamas-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033661-84T4XD9IIB8347JSXZD8/Bahamas-08.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033694-T7H8BB2XUUU662S8O4ZK/Bahamas-30.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033819-4AZDNS0PRNZUJV4CHRKU/Bahamas-23.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033787-YHB405EGDAOHKFXEQUFX/Bahamas-13.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033806-RNX3ITHEF4LXB3O6V8PA/Bahamas-14.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033813-UW3CP0PDEOGIZOM6OX6A/Bahamas-15.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033793-618W7W5QD5FQZNFU7LXX/Bahamas-16.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033799-M8BZH6J07J0AKLC8UDCE/Bahamas-17.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033917-NVF3BQVFMLJYB4ITED76/Bahamas-29.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033930-5YFCOOSVOZTYAQ2PBEL3/Bahamas-27.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033902-LYK18F01HT98UPIVJYB0/Bahamas-28.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033947-R33VQ6UFNY6I01GQ5G8R/Bahamas-26.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034031-9BEW9Z64NDORY0UWLXKO/Bahamas-11.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034002-DB67D10GSCDWTRFFSQNF/Bahamas-09.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034012-XSPBT02DODSBLB9YN883/Bahamas-12.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034023-LT9W2LNLRLVOBAT0B5W5/Bahamas-10.png",
    # Mareth
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034916-YHNYF6MVNBHQ0G0Q5Z39/mareth+cover.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034728-CXJZ8OKZLPMAS4SDMTHC/Mareth-08.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034739-B1ESS4QOWAUAVCV16VY1/Mareth-07.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034758-W0FRDZO1ZGXIE10YUOOX/Mareth-10.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034733-7R78KE581E2TCIQY56JV/Mareth-09.png",
    # MercadoLibre
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036354-JD76DEOCUFAFYQS7LZV1/Behance_responsive-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036091-1J3JLTU2NAZGG0TGR5MH/Behance_responsive-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036189-U5Y1NMK1WB5B00FJRYS4/Behance_responsive-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036183-QGH5QUFK3CD7ZDFYN4IE/Behance_responsive-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036338-7GMO48A2CTHV64SNZCM8/Behance_responsive-10.png",
    # Nike Green Power
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036558-9IN2XN3ATSK58AWQXUF3/Nike_Greenpower_behance-05.png",
    # GSW
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035222-KWD7L6B9P0F6AN0DON5I/Curry-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034941-ZD90VA6MDQKXF5Z1K5O9/Curry-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992034963-DGBSN8FJPWK3Q1UXWUW9/Curry-03.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035073-EPY5F7RTEDZ5VAGIU4JE/Curry-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035139-R2AM6LXL7ZO1I1LQNEOG/Curry-10.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035117-X9CXT0QELDR7AHLGVYGN/Curry-11.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035102-8OQIJUZCOV7AKKTSAHIL/Curry-12.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035108-TD01ZC9FC5CRISA3ZQC4/Curry-13.png",
    # Colablearn
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033636-MZ5AHVDTEC3FBI1LSSWN/LEARN+AVATAR.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033343-BTXZ5O89599N3AS1DNM4/open.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992033443-DGIFUAOQ6RM5GF7P65MT/Colablearn-03.png",
    # Club Disney
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694519394259-8IALSX1EAAOP36TO7BHY/00_DC_CD_OPEN_NTSC+%280%3B00%3B28%3B05%29.jpg",
    # Nike By You
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036727-D4RONMUT6J0QV8QKMI8U/Nike_livitate_avatar.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/ee94401e-162c-4417-88a1-bdc62bff3b93/Nike_SB_Behance-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036707-DF21A4MP6HM68WRGHAZY/Nike_SB_Behance-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036700-854HSB7SJPSJMNQ01M7D/Nike_SB_Behance-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036689-YN8YQLFPKR3VLWWM2TPW/Nike_SB_Behance-07.png",
    # LIA Aerospace
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036973-9YC3HBB8U4R1B2ID0DZS/LIA+AVATAR.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036749-OCEWRAL66F510K6M5J5H/LiaAerospace-02.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036789-BG1HBNLOCEZ27P9EB8GG/LiaAerospace-03.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036839-PJW9ICJAIE7WMZHWMIMP/LiaAerospace-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036896-95NSDSX4YGPG9UMJ84QG/LiaAerospace-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036928-HBINXTVPFMAK50LNS40R/LiaAerospace-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036952-PCR8Y71CWKALBPYEO700/LiaAerospace-07.png",
    # NatGeo IDs
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694507478500-RH64PV4U3KSHXMV70B9W/natgeoids.png",
    # Fox Sports Players
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694427494772-V494O3Y2PC18HB8RO7LR/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-09-13%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/aec6711c-431e-4610-8e3b-619b6e930d0b/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-01-03%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/924e2f9d-8b6e-40c5-a60a-650bcd349bdb/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-05-18%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/896f8efe-4d79-4d41-a474-31e409b3dc88/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-03-18%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/5e3918bd-8406-43df-9b4a-6bb4f534ea0c/FS+PLAYERS+OPEN+HIGH_H.264_1+%280-00-09-13%29.jpg",
    # Kikely
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992038171-VVDBIUHQ4GH62U986JJK/Sistema+Grafico_4_TAPA.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037694-7JK3ASZCQHKGIW94YKRT/Sistema+Grafico_4_TAPA.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037724-JXI3ECMGAKOUSCOY1QIW/Sistema%2BGrafico_4_LOGO%2BPPAL.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037763-4PKCYW4G1P6QAQGRC5QN/Kikely-05.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037843-IXM78Z0QWO8GMT3CN4FU/Kikely-04.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037824-D3CG45ESPYSMUIB4MOQW/Kikely-06.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037878-A0R4B3269LPQ662X5NRL/GARAGE+SALE+O+CATEGORIA+MESAS.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037897-LW1T4IWRVC5XLRQABCF0/Kikely-12.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037906-APD5WH3BZY9RWIH0ZNQO/Kikely-09.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037917-5LK2JYX1XV58AALXS6UN/Kikely-10.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992038152-R2X8XN4AKNW8DMC3HW6Z/Kikely-07.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037942-Z9I6TE9P5FIYRYJUA457/Kikely-08.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037930-TCXLFMQK738B76W1B8JK/Kikely-11.png",
    # HSM Highway
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694430642534-0079P8W3VNHVK7IVEX0V/HW+La+Gira+%280-00-14-50%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/9d86793f-b859-4b01-af5b-ae514a3ede51/HW+La+Gira+%280-00-04-26%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/e31989e8-28b5-4557-aa86-b8377f41240e/HW+La+Gira+%280-00-07-34%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/e156fba7-bcb9-42f8-892b-96eeaf0c23a8/HW+La+Gira+%280-00-09-47%29.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/5e4599f6-562d-48f2-a5bf-fa7a6a470991/HW+La+Gira+%280-00-14-50%29.jpg",
    # Lemon
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992038569-LO9KHJ0W6LAPTLYSV5IE/Lemon_transparent-09.png",
    # Cliptastico
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694439897695-VX4HIQ7X895BURAU5W5Y/Artboard+2.jpg",
    # Copa Libertadores
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694429217489-5QUUEMNMFN3WMBK24JZJ/Artboard+17-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/0ac7240e-c253-4516-941e-aadea45ece99/Artboard+17-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/0acf0410-a5b5-4ae0-b32f-ee434a39bdb0/Artboard+1-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/bf99b95b-d3d8-4601-adb2-c73de259be76/Artboard+30-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/6a2af51a-56db-45b1-80bd-678dde2c95b6/Artboard+31-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/2af659f8-2d6d-4b1c-a9c6-ac7c2832a326/Artboard+28-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/60174737-99bb-4eb8-8f72-fbe668c40897/Artboard+27-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/8439c8ea-d4ea-4d11-a29d-92f19f2fbe16/Artboard+24-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/5c26efff-db1a-4e02-90cc-aacbe73e3347/Artboard+2-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/35bd3bac-6b7c-4775-8550-a755fc2d42ca/Artboard+4-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/14c34e1f-85e5-465e-9c7c-20f7be893b3b/Artboard+3-100.jpg",
    # Frontend Dev
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694614011186-CPMD3O9XTWQO6RI9E33U/Entrega+01+-+Podcast.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/d7174a4a-0a7b-4aec-8f72-c7f2f9b7b94b/Entrega+01+-+Podcast.jpg",
    # SmartHome
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035715-WFDB5XTVKM45BFNL4S2R/SmartHome_Avatar-01.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035303-HSEH1QSWTW8H1Z2G5K22/SmartHome-13.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035311-UZ09WJVG9F0KK2U7FA57/SmartHome-14.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035586-RRZ6UK8518OT41HW4C7N/SmartHome-10.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035696-MEU3JIP97C8TT2J5BQXH/SmartHome-11.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992035679-ZXLN2OCG00FIFQ2ZAB18/SmartHome-12.png",
    # Disney Junior
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992037163-UYZRRTQALISVMG3DP2ZH/DisneyJunior_AVATAR_Mesa+de+trabajo+1.png",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1693992036990-LS0R0TSA9VP0WN9WH1HB/DisneyJunior_Logos-02.png",
    # Rainbow
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/1694607395974-FDEIQ7YJWSOKW2TOVTIO/Artboard+1-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/86c2576a-78de-4a2a-98ca-f0bb47c08210/Artboard+3-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/c8cd4da6-2f2c-43bf-9355-ff6b49c0aa20/Artboard+6-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/3db26edd-9fa9-4c3b-8805-507088f75c18/Artboard+8-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/74ca5ddd-b518-4462-8b07-7bc96d48b7ed/Artboard+9-100.jpg",
    "https://images.squarespace-cdn.com/content/v1/64f84460db8cdc067d536652/bc997d7c-5b25-45a0-8694-f9e59ab4124f/Artboard+7-100.jpg",
]

# Carpeta de destino — dentro de tu proyecto Next.js
output_dir = os.path.expanduser("~/Downloads/agustin-portfolio/public/images")
os.makedirs(output_dir, exist_ok=True)

def get_filename(url):
    # Extraer el nombre del archivo de la URL
    path = unquote(urlparse(url).path)
    filename = os.path.basename(path)
    # Limpiar caracteres problemáticos
    filename = re.sub(r'[^\w\-_\. ]', '_', filename)
    filename = filename.replace(' ', '_')
    return filename

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
}

seen = set()
downloaded = 0
failed = 0

print(f"Descargando {len(images)} imágenes a {output_dir}\n")

for url in images:
    filename = get_filename(url)
    if filename in seen:
        continue
    seen.add(filename)

    filepath = os.path.join(output_dir, filename)
    if os.path.exists(filepath):
        print(f"  ✓ Ya existe: {filename}")
        continue

    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as response:
            with open(filepath, 'wb') as f:
                f.write(response.read())
        print(f"  ✓ {filename}")
        downloaded += 1
    except Exception as e:
        print(f"  ✗ Error: {filename} — {e}")
        failed += 1

print(f"\nListo: {downloaded} descargadas, {failed} errores")
print(f"Carpeta: {output_dir}")
