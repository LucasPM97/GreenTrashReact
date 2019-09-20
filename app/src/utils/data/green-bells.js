const bells = [
  {
    longitude: -58.44364453,
    latitude: -34.58933778,
    name: "AGUIRRE 1447",
    district: "Chacarita"
  },
  {
    longitude: -58.41105067,
    latitude: -34.65190701,
    name: "CACHI 795",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.4329925,
    latitude: -34.59673914,
    name: "CASTILLO 359",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43370218,
    latitude: -34.59597893,
    name: "CASTILLO 441",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44082294,
    latitude: -34.58866749,
    name: "CASTILLO 1336",
    district: "Chacarita"
  },
  {
    longitude: -58.44278161,
    latitude: -34.5873114,
    name: "CASTILLO 1538",
    district: "Chacarita"
  },
  {
    longitude: -58.42040231,
    latitude: -34.62514548,
    name: "CASTRO 1032",
    district: "Boedo"
  },
  {
    longitude: -58.4198408,
    latitude: -34.62765412,
    name: "CASTRO 1212",
    district: "Boedo"
  },
  {
    longitude: -58.41910098,
    latitude: -34.63100156,
    name: "CASTRO 1534",
    district: "Boedo"
  },
  {
    longitude: -58.41926485,
    latitude: -34.63507874,
    name: "CASTRO 1848",
    district: "Boedo"
  },
  {
    longitude: -58.41894089,
    latitude: -34.63771932,
    name: "CASTRO 2136",
    district: "Boedo"
  },
  {
    longitude: -58.47545465,
    latitude: -34.69357159,
    name: "CORRALES 6995",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.45823115,
    latitude: -34.55698196,
    name: "CUBA 2516",
    district: "Belgrano"
  },
  {
    longitude: -58.46491768,
    latitude: -34.54963029,
    name: "CUBA 3392",
    district: "Nuñez"
  },
  {
    longitude: -58.4667303,
    latitude: -34.54715322,
    name: "CUBA 3700",
    district: "Nuñez"
  },
  {
    longitude: -58.46958076,
    latitude: -34.54328068,
    name: "CUBA 4216",
    district: "Nuñez"
  },
  {
    longitude: -58.45023155,
    latitude: -34.58571135,
    name: "FRAGA 423",
    district: "Chacarita"
  },
  {
    longitude: -58.45255118,
    latitude: -34.5846894,
    name: "FRAGA 615",
    district: "Chacarita"
  },
  {
    longitude: -58.45689933,
    latitude: -34.58368033,
    name: "FRAGA 982",
    district: "Chacarita"
  },
  {
    longitude: -58.45853046,
    latitude: -34.58314588,
    name: "FRAGA 1080",
    district: "Chacarita"
  },
  {
    longitude: -58.4615828,
    latitude: -34.58295625,
    name: "FRAGA 1274",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46412648,
    latitude: -34.58288202,
    name: "FRAGA 1450",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46590223,
    latitude: -34.58283144,
    name: "FRAGA 1586",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46877028,
    latitude: -34.58274807,
    name: "FRAGA 1830",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.45921638,
    latitude: -34.61483568,
    name: "FRANKLIN 1712",
    district: "Flores"
  },
  {
    longitude: -58.46180229,
    latitude: -34.61570021,
    name: "FRANKLIN 1926",
    district: "Flores"
  },
  {
    longitude: -58.46459486,
    latitude: -34.61669856,
    name: "FRANKLIN 2140",
    district: "Flores"
  },
  {
    longitude: -58.46672272,
    latitude: -34.61759171,
    name: "FRANKLIN 2330",
    district: "Flores"
  },
  {
    longitude: -58.44639419,
    latitude: -34.58846711,
    name: "GUEVARA 29",
    district: "Chacarita"
  },
  {
    longitude: -58.44982435,
    latitude: -34.58705283,
    name: "GUEVARA 365",
    district: "Chacarita"
  },
  {
    longitude: -58.3779398,
    latitude: -34.65243863,
    name: "JORGE 2250",
    district: "Barracas"
  },
  {
    longitude: -58.39356188,
    latitude: -34.58890836,
    name: "LOPEZ, VICENTE 2049",
    district: "Recoleta"
  },
  {
    longitude: -58.44455794,
    latitude: -34.55342947,
    name: "MENDOZA 1156",
    district: "Belgrano"
  },
  {
    longitude: -58.44585172,
    latitude: -34.55419917,
    name: "MENDOZA 1260",
    district: "Belgrano"
  },
  {
    longitude: -58.44720174,
    latitude: -34.55500248,
    name: "MENDOZA 1382",
    district: "Belgrano"
  },
  {
    longitude: -58.44763112,
    latitude: -34.55525598,
    name: "MENDOZA 1416",
    district: "Belgrano"
  },
  {
    longitude: -58.44903854,
    latitude: -34.55607851,
    name: "MENDOZA 1546",
    district: "Belgrano"
  },
  {
    longitude: -58.45634229,
    latitude: -34.56044427,
    name: "MENDOZA 2292",
    district: "Belgrano"
  },
  {
    longitude: -58.46749559,
    latitude: -34.56703495,
    name: "MENDOZA 3408",
    district: "Belgrano"
  },
  {
    longitude: -58.46910459,
    latitude: -34.56809209,
    name: "MENDOZA 3592",
    district: "Belgrano"
  },
  {
    longitude: -58.46998745,
    latitude: -34.56860927,
    name: "MENDOZA 3688",
    district: "Belgrano"
  },
  {
    longitude: -58.4704024,
    latitude: -34.5688564,
    name: "MENDOZA 3710",
    district: "Belgrano"
  },
  {
    longitude: -58.39308514,
    latitude: -34.61272627,
    name: "MORENO 1889",
    district: "Balvanera"
  },
  {
    longitude: -58.39592844,
    latitude: -34.61292429,
    name: "MORENO 2095",
    district: "Balvanera"
  },
  {
    longitude: -58.39850826,
    latitude: -34.61307093,
    name: "MORENO 2281",
    district: "Balvanera"
  },
  {
    longitude: -58.40051191,
    latitude: -34.61317377,
    name: "MORENO 2415",
    district: "Balvanera"
  },
  {
    longitude: -58.40389675,
    latitude: -34.61334485,
    name: "MORENO 2679",
    district: "Balvanera"
  },
  {
    longitude: -58.40894541,
    latitude: -34.61393571,
    name: "MORENO 3015",
    district: "Balvanera"
  },
  {
    longitude: -58.41163593,
    latitude: -34.6140258,
    name: "MORENO 3219",
    district: "Balvanera"
  },
  {
    longitude: -58.46745228,
    latitude: -34.57862117,
    name: "PLAZA 1418",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46831602,
    latitude: -34.57758978,
    name: "PLAZA 1508",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47033617,
    latitude: -34.57519223,
    name: "PLAZA 1738",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.40340643,
    latitude: -34.59722026,
    name: "PUEYRREDON AV. 1128",
    district: "Recoleta"
  },
  {
    longitude: -58.40284004,
    latitude: -34.59557899,
    name: "PUEYRREDON AV. 1310",
    district: "Recoleta"
  },
  {
    longitude: -58.40157224,
    latitude: -34.59295469,
    name: "PUEYRREDON AV. 1565",
    district: "Recoleta"
  },
  {
    longitude: -58.4001538,
    latitude: -34.58998094,
    name: "PUEYRREDON AV. 1827",
    district: "Recoleta"
  },
  {
    longitude: -58.39805028,
    latitude: -34.58780238,
    name: "PUEYRREDON AV. 2112",
    district: "Recoleta"
  },
  {
    longitude: -58.46437426,
    latitude: -34.6371707,
    name: "REMEDIOS 2737",
    district: "Flores"
  },
  {
    longitude: -58.46737882,
    latitude: -34.63795612,
    name: "REMEDIOS 2953",
    district: "Flores"
  },
  {
    longitude: -58.47011106,
    latitude: -34.63867323,
    name: "REMEDIOS 3177",
    district: "Flores"
  },
  {
    longitude: -58.473191,
    latitude: -34.63959146,
    name: "REMEDIOS 3469",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48553509,
    latitude: -34.64948637,
    name: "REMEDIOS 4644",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.43383353,
    latitude: -34.61902851,
    name: "ROSARIO 352",
    district: "Caballito"
  },
  {
    longitude: -58.3930591,
    latitude: -34.62291336,
    name: "SAN JUAN AV. 1910",
    district: "San Cristobal"
  },
  {
    longitude: -58.39569761,
    latitude: -34.62308393,
    name: "SAN JUAN AV. 2166",
    district: "San Cristobal"
  },
  {
    longitude: -58.39886097,
    latitude: -34.62344927,
    name: "SAN JUAN AV. 2374",
    district: "San Cristobal"
  },
  {
    longitude: -58.39404162,
    latitude: -34.60574615,
    name: "SARMIENTO 1935",
    district: "Balvanera"
  },
  {
    longitude: -58.39713042,
    latitude: -34.60594166,
    name: "SARMIENTO 2135",
    district: "Balvanera"
  },
  {
    longitude: -58.40800059,
    latitude: -34.60662133,
    name: "SARMIENTO 2959",
    district: "Balvanera"
  },
  {
    longitude: -58.41097473,
    latitude: -34.60654837,
    name: "SARMIENTO 3179",
    district: "Balvanera"
  },
  {
    longitude: -58.41276496,
    latitude: -34.60624608,
    name: "SARMIENTO 3333",
    district: "Balvanera"
  },
  {
    longitude: -58.41443817,
    latitude: -34.60590798,
    name: "SARMIENTO 3465",
    district: "Almagro"
  },
  {
    longitude: -58.41641285,
    latitude: -34.60555542,
    name: "SARMIENTO 3637",
    district: "Almagro"
  },
  {
    longitude: -58.41979775,
    latitude: -34.60513559,
    name: "SARMIENTO 3820",
    district: "Almagro"
  },
  {
    longitude: -58.4218382,
    latitude: -34.60476896,
    name: "SARMIENTO 4041",
    district: "Almagro"
  },
  {
    longitude: -58.42488382,
    latitude: -34.60438837,
    name: "SARMIENTO 4239",
    district: "Almagro"
  },
  {
    longitude: -58.42748918,
    latitude: -34.6042,
    name: "SARMIENTO 4411",
    district: "Almagro"
  },
  {
    longitude: -58.43083173,
    latitude: -34.60397318,
    name: "SARMIENTO 4625",
    district: "Almagro"
  },
  {
    longitude: -58.35941728,
    latitude: -34.63557819,
    name: "SUAREZ 438",
    district: "Boca"
  },
  {
    longitude: -58.3730617,
    latitude: -34.63853792,
    name: "SUAREZ 1566",
    district: "Barracas"
  },
  {
    longitude: -58.42918077,
    latitude: -34.62385947,
    name: "VALLE 112",
    district: "Caballito"
  },
  {
    longitude: -58.4319358,
    latitude: -34.62423031,
    name: "VALLE 304",
    district: "Caballito"
  },
  {
    longitude: -58.43745463,
    latitude: -34.62472671,
    name: "VALLE 688",
    district: "Caballito"
  },
  {
    longitude: -58.43959435,
    latitude: -34.62493955,
    name: "VALLE 812",
    district: "Caballito"
  },
  {
    longitude: -58.43120939,
    latitude: -34.66285876,
    name: "VARELA 3593",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44070496,
    latitude: -34.56984955,
    name: "11 DE SEPTIEMBRE DE 1888 846",
    district: "Palermo"
  },
  {
    longitude: -58.44192017,
    latitude: -34.56890022,
    name: "11 DE SEPTIEMBRE DE 1888 986",
    district: "Palermo"
  },
  {
    longitude: -58.44335714,
    latitude: -34.56777382,
    name: "11 DE SEPTIEMBRE DE 1888 1128",
    district: "Palermo"
  },
  {
    longitude: -58.44457093,
    latitude: -34.56653113,
    name: "11 DE SEPTIEMBRE DE 1888 1290",
    district: "Palermo"
  },
  {
    longitude: -58.44665003,
    latitude: -34.56410241,
    name: "11 DE SEPTIEMBRE DE 1888 1534",
    district: "Belgrano"
  },
  {
    longitude: -58.44727573,
    latitude: -34.56337656,
    name: "11 DE SEPTIEMBRE DE 1888 1616",
    district: "Belgrano"
  },
  {
    longitude: -58.45151929,
    latitude: -34.55828636,
    name: "11 DE SEPTIEMBRE DE 1888 2143",
    district: "Belgrano"
  },
  {
    longitude: -58.45820577,
    latitude: -34.55005375,
    name: "11 DE SEPTIEMBRE DE 1888 3018",
    district: "Nuñez"
  },
  {
    longitude: -58.45887703,
    latitude: -34.54913684,
    name: "11 DE SEPTIEMBRE DE 1888 3138",
    district: "Nuñez"
  },
  {
    longitude: -58.46256736,
    latitude: -34.54408109,
    name: "11 DE SEPTIEMBRE DE 1888 3800",
    district: "Nuñez"
  },
  {
    longitude: -58.46566232,
    latitude: -34.53974765,
    name: "11 DE SEPTIEMBRE DE 1888 4377",
    district: "Nuñez"
  },
  {
    longitude: -58.46647902,
    latitude: -34.53863201,
    name: "11 DE SEPTIEMBRE DE 1888 4513",
    district: "Nuñez"
  },
  {
    longitude: -58.46285657,
    latitude: -34.57710856,
    name: "14 DE JULIO 1360",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4657876,
    latitude: -34.57403279,
    name: "14 DE JULIO 1652",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.49010686,
    latitude: -34.67705292,
    name: "2 DE ABRIL DE 1982 6445",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49093271,
    latitude: -34.67776131,
    name: "2 DE ABRIL DE 1982 6691",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4421529,
    latitude: -34.56963103,
    name: "3 DE FEBRERO 945",
    district: "Palermo"
  },
  {
    longitude: -58.44491198,
    latitude: -34.56757028,
    name: "3 DE FEBRERO 1261",
    district: "Palermo"
  },
  {
    longitude: -58.44671754,
    latitude: -34.56545114,
    name: "3 DE FEBRERO 1453",
    district: "Belgrano"
  },
  {
    longitude: -58.44838765,
    latitude: -34.56351018,
    name: "3 DE FEBRERO 1649",
    district: "Belgrano"
  },
  {
    longitude: -58.45182684,
    latitude: -34.55954363,
    name: "3 DE FEBRERO 2085",
    district: "Belgrano"
  },
  {
    longitude: -58.45300002,
    latitude: -34.55817236,
    name: "3 DE FEBRERO 2215",
    district: "Belgrano"
  },
  {
    longitude: -58.45901422,
    latitude: -34.5505404,
    name: "3 DE FEBRERO 3005",
    district: "Nuñez"
  },
  {
    longitude: -58.46206415,
    latitude: -34.54638872,
    name: "3 DE FEBRERO 3575",
    district: "Nuñez"
  },
  {
    longitude: -58.46340792,
    latitude: -34.54469994,
    name: "3 DE FEBRERO 3772",
    district: "Nuñez"
  },
  {
    longitude: -58.50810017,
    latitude: -34.64336751,
    name: "ACASSUSO 5767",
    district: "Liniers"
  },
  {
    longitude: -58.51344938,
    latitude: -34.64818535,
    name: "ACASSUSO 6365",
    district: "Liniers"
  },
  {
    longitude: -58.51455417,
    latitude: -34.64917107,
    name: "ACASSUSO 6485",
    district: "Liniers"
  },
  {
    longitude: -58.51774791,
    latitude: -34.65204398,
    name: "ACASSUSO 6997",
    district: "Liniers"
  },
  {
    longitude: -58.47200231,
    latitude: -34.58355249,
    name: "ACHA, MARIANO, GRAL. 1013",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47204938,
    latitude: -34.58177382,
    name: "ACHA, MARIANO, GRAL. 1179",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47206567,
    latitude: -34.58106433,
    name: "ACHA, MARIANO, GRAL. 1235",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47255819,
    latitude: -34.57731335,
    name: "ACHA, MARIANO, GRAL. 1693",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47319766,
    latitude: -34.57659193,
    name: "ACHA, MARIANO, GRAL. 1747",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47426856,
    latitude: -34.64030879,
    name: "ACOSTA, MARIANO 824",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46915499,
    latitude: -34.64435111,
    name: "ACOSTA, MARIANO 1270",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44953717,
    latitude: -34.65977032,
    name: "ACOSTA, MARIANO 2830",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44919006,
    latitude: -34.65999626,
    name: "ACOSTA, MARIANO 2956",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44750013,
    latitude: -34.66128924,
    name: "ACOSTA, MARIANO 3064",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44572473,
    latitude: -34.66305094,
    name: "ACOSTA, MARIANO 3265",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44260094,
    latitude: -34.6654567,
    name: "ACOSTA, MARIANO 3555",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44287581,
    latitude: -34.66530597,
    name: "ACOSTA, MARIANO 3635",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4819826,
    latitude: -34.63418938,
    name: "ACOSTA, MARIANO AV. 22",
    district: "Floresta"
  },
  {
    longitude: -58.4780869,
    latitude: -34.63726974,
    name: "ACOSTA, MARIANO AV. 326",
    district: "Floresta"
  },
  {
    longitude: -58.47704544,
    latitude: -34.63809507,
    name: "ACOSTA, MARIANO AV. 460",
    district: "Floresta"
  },
  {
    longitude: -58.44005868,
    latitude: -34.60761463,
    name: "ACOYTE 909",
    district: "Caballito"
  },
  {
    longitude: -58.44295695,
    latitude: -34.6032088,
    name: "ACOYTE 1437",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43709276,
    latitude: -34.61727861,
    name: "ACOYTE AV. 90",
    district: "Caballito"
  },
  {
    longitude: -58.43776914,
    latitude: -34.61505246,
    name: "ACOYTE AV. 264",
    district: "Caballito"
  },
  {
    longitude: -58.43810247,
    latitude: -34.61327092,
    name: "ACOYTE AV. 461",
    district: "Caballito"
  },
  {
    longitude: -58.4397012,
    latitude: -34.60961857,
    name: "ACOYTE AV. 755",
    district: "Caballito"
  },
  {
    longitude: -58.42514055,
    latitude: -34.619132,
    name: "AGRELO 4173",
    district: "Almagro"
  },
  {
    longitude: -58.52645398,
    latitude: -34.63300611,
    name: "AGUARIBAY 6752",
    district: "Versalles"
  },
  {
    longitude: -58.43197209,
    latitude: -34.60151289,
    name: "AGUIRRE 17",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43388731,
    latitude: -34.59946495,
    name: "AGUIRRE 291",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43512805,
    latitude: -34.59813924,
    name: "AGUIRRE 445",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44516309,
    latitude: -34.58803231,
    name: "AGUIRRE 1609",
    district: "Chacarita"
  },
  {
    longitude: -58.50547821,
    latitude: -34.57490977,
    name: "ALBARELLOS AV. 2455",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50843477,
    latitude: -34.57665691,
    name: "ALBARELLOS AV. 2769",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50957348,
    latitude: -34.5773316,
    name: "ALBARELLOS AV. 2853",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.5125322,
    latitude: -34.57908397,
    name: "ALBARELLOS AV. 3155",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50906589,
    latitude: -34.64062563,
    name: "ALBARIÑO 213",
    district: "Villa Luro"
  },
  {
    longitude: -58.50509621,
    latitude: -34.64368884,
    name: "ALBARIÑO 559",
    district: "Liniers"
  },
  {
    longitude: -58.50323692,
    latitude: -34.64510113,
    name: "ALBARIÑO 709",
    district: "Liniers"
  },
  {
    longitude: -58.49215069,
    latitude: -34.65381168,
    name: "ALBARIÑO 1713",
    district: "Mataderos"
  },
  {
    longitude: -58.48983736,
    latitude: -34.65556951,
    name: "ALBARIÑO 1931",
    district: "Mataderos"
  },
  {
    longitude: -58.48846041,
    latitude: -34.65669373,
    name: "ALBARIÑO 2051",
    district: "Mataderos"
  },
  {
    longitude: -58.4852456,
    latitude: -34.65919863,
    name: "ALBARIÑO 2305",
    district: "Mataderos"
  },
  {
    longitude: -58.48297136,
    latitude: -34.66097054,
    name: "ALBARIÑO 2525",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48165372,
    latitude: -34.66199621,
    name: "ALBARIÑO 2655",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47833322,
    latitude: -34.66458549,
    name: "ALBARIÑO 2895",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47345602,
    latitude: -34.66831448,
    name: "ALBARIÑO 3344",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47175534,
    latitude: -34.6696845,
    name: "ALBARIÑO 3486",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46979558,
    latitude: -34.67114922,
    name: "ALBARIÑO 3660",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4351817,
    latitude: -34.62301904,
    name: "ALBERDI, JUAN BAUTISTA AV. 529",
    district: "Caballito"
  },
  {
    longitude: -58.44166647,
    latitude: -34.62276804,
    name: "ALBERDI, JUAN BAUTISTA AV. 961",
    district: "Caballito"
  },
  {
    longitude: -58.44594133,
    latitude: -34.62427726,
    name: "ALBERDI, JUAN BAUTISTA AV. 1275",
    district: "Caballito"
  },
  {
    longitude: -58.44835309,
    latitude: -34.62553487,
    name: "ALBERDI, JUAN BAUTISTA AV. 1449",
    district: "Caballito"
  },
  {
    longitude: -58.45177478,
    latitude: -34.62725517,
    name: "ALBERDI, JUAN BAUTISTA AV. 1643",
    district: "Caballito"
  },
  {
    longitude: -58.45583418,
    latitude: -34.62936843,
    name: "ALBERDI, JUAN BAUTISTA AV. 1925",
    district: "Flores"
  },
  {
    longitude: -58.45815384,
    latitude: -34.63010343,
    name: "ALBERDI, JUAN BAUTISTA AV. 2145",
    district: "Flores"
  },
  {
    longitude: -58.46083518,
    latitude: -34.63093797,
    name: "ALBERDI, JUAN BAUTISTA AV. 2345",
    district: "Flores"
  },
  {
    longitude: -58.46349486,
    latitude: -34.63174052,
    name: "ALBERDI, JUAN BAUTISTA AV. 2525",
    district: "Flores"
  },
  {
    longitude: -58.46700751,
    latitude: -34.63281892,
    name: "ALBERDI, JUAN BAUTISTA AV. 2787",
    district: "Flores"
  },
  {
    longitude: -58.46949158,
    latitude: -34.63350139,
    name: "ALBERDI, JUAN BAUTISTA AV. 2959",
    district: "Flores"
  },
  {
    longitude: -58.47181587,
    latitude: -34.63422635,
    name: "ALBERDI, JUAN BAUTISTA AV. 3141",
    district: "Flores"
  },
  {
    longitude: -58.47390361,
    latitude: -34.63515744,
    name: "ALBERDI, JUAN BAUTISTA AV. 3354",
    district: "Floresta"
  },
  {
    longitude: -58.47501851,
    latitude: -34.63540463,
    name: "ALBERDI, JUAN BAUTISTA AV. 3451",
    district: "Floresta"
  },
  {
    longitude: -58.47603559,
    latitude: -34.63583157,
    name: "ALBERDI, JUAN BAUTISTA AV. 3559",
    district: "Floresta"
  },
  {
    longitude: -58.47785014,
    latitude: -34.63660272,
    name: "ALBERDI, JUAN BAUTISTA AV. 3743",
    district: "Floresta"
  },
  {
    longitude: -58.48127188,
    latitude: -34.63814227,
    name: "ALBERDI, JUAN BAUTISTA AV. 3971",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48338796,
    latitude: -34.63911689,
    name: "ALBERDI, JUAN BAUTISTA AV. 4117",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48728709,
    latitude: -34.6409532,
    name: "ALBERDI, JUAN BAUTISTA AV. 4367",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49196479,
    latitude: -34.64318922,
    name: "ALBERDI, JUAN BAUTISTA AV. 4679",
    district: "Villa Luro"
  },
  {
    longitude: -58.49408819,
    latitude: -34.64420403,
    name: "ALBERDI, JUAN BAUTISTA AV. 4831",
    district: "Villa Luro"
  },
  {
    longitude: -58.49889648,
    latitude: -34.64815972,
    name: "ALBERDI, JUAN BAUTISTA AV. 5391",
    district: "Mataderos"
  },
  {
    longitude: -58.50077022,
    latitude: -34.6498881,
    name: "ALBERDI, JUAN BAUTISTA AV. 5629",
    district: "Mataderos"
  },
  {
    longitude: -58.50522302,
    latitude: -34.65399068,
    name: "ALBERDI, JUAN BAUTISTA AV. 6143",
    district: "Mataderos"
  },
  {
    longitude: -58.50702506,
    latitude: -34.65531691,
    name: "ALBERDI, JUAN BAUTISTA AV. 6375",
    district: "Mataderos"
  },
  {
    longitude: -58.50849124,
    latitude: -34.65638559,
    name: "ALBERDI, JUAN BAUTISTA AV. 6539",
    district: "Mataderos"
  },
  {
    longitude: -58.51074882,
    latitude: -34.6579456,
    name: "ALBERDI, JUAN BAUTISTA AV. 6805",
    district: "Mataderos"
  },
  {
    longitude: -58.51177792,
    latitude: -34.65880783,
    name: "ALBERDI, JUAN BAUTISTA AV. 6952",
    district: "Mataderos"
  },
  {
    longitude: -58.51483492,
    latitude: -34.66038701,
    name: "ALBERDI, JUAN BAUTISTA AV. 7247",
    district: "Mataderos"
  },
  {
    longitude: -58.51645855,
    latitude: -34.66140981,
    name: "ALBERDI, JUAN BAUTISTA AV. 7388",
    district: "Mataderos"
  },
  {
    longitude: -58.50100368,
    latitude: -34.618615,
    name: "ALCARAZ 4441",
    district: "Monte Castro"
  },
  {
    longitude: -58.50402438,
    latitude: -34.62008919,
    name: "ALCARAZ 4787",
    district: "Monte Castro"
  },
  {
    longitude: -58.50574822,
    latitude: -34.6209007,
    name: "ALCARAZ 4911",
    district: "Monte Castro"
  },
  {
    longitude: -58.50966162,
    latitude: -34.62419652,
    name: "ALCARAZ 5231",
    district: "Monte Castro"
  },
  {
    longitude: -58.51215409,
    latitude: -34.62625334,
    name: "ALCARAZ 5457",
    district: "Villa Luro"
  },
  {
    longitude: -58.5159124,
    latitude: -34.63046705,
    name: "ALCARAZ 5950",
    district: "Versalles"
  },
  {
    longitude: -58.39721971,
    latitude: -34.64293436,
    name: "ALCORTA, AMANCIO AV. 2553",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40236775,
    latitude: -34.64641818,
    name: "ALCORTA, AMANCIO AV. 2937",
    district: "Parque Patricios"
  },
  {
    longitude: -58.4078655,
    latitude: -34.65198213,
    name: "ALCORTA, AMANCIO AV. 3427",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.41404214,
    latitude: -34.65533615,
    name: "ALCORTA, AMANCIO AV. 3889",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.37937538,
    latitude: -34.65450925,
    name: "ALGARROBO 1018",
    district: "Barracas"
  },
  {
    longitude: -58.4114605,
    latitude: -34.6386732,
    name: "ALMAFUERTE AV. 32",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41209314,
    latitude: -34.64050801,
    name: "ALMAFUERTE AV. 260",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41464496,
    latitude: -34.64608544,
    name: "ALMAFUERTE AV. 724",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.39413601,
    latitude: -34.61169065,
    name: "ALSINA, ADOLFO 1960",
    district: "Balvanera"
  },
  {
    longitude: -58.39655446,
    latitude: -34.61184524,
    name: "ALSINA, ADOLFO 2128",
    district: "Balvanera"
  },
  {
    longitude: -58.39949933,
    latitude: -34.61202174,
    name: "ALSINA, ADOLFO 2340",
    district: "Balvanera"
  },
  {
    longitude: -58.40237685,
    latitude: -34.61226992,
    name: "ALSINA, ADOLFO 2550",
    district: "Balvanera"
  },
  {
    longitude: -58.40734299,
    latitude: -34.61256436,
    name: "ALSINA, ADOLFO 2922",
    district: "Balvanera"
  },
  {
    longitude: -58.41103863,
    latitude: -34.61297441,
    name: "ALSINA, ADOLFO 3190",
    district: "Balvanera"
  },
  {
    longitude: -58.48438048,
    latitude: -34.58526303,
    name: "ALTOLAGUIRRE 1554",
    district: "Parque Chas"
  },
  {
    longitude: -58.382016,
    latitude: -34.64726612,
    name: "ALVARADO 2477",
    district: "Barracas"
  },
  {
    longitude: -58.47542259,
    latitude: -34.6061169,
    name: "ALVAREZ JONTE 2317",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.47787823,
    latitude: -34.60738689,
    name: "ALVAREZ JONTE AV. 2515",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48291052,
    latitude: -34.60868407,
    name: "ALVAREZ JONTE AV. 2857",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48562821,
    latitude: -34.60935622,
    name: "ALVAREZ JONTE AV. 3043",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48860313,
    latitude: -34.61006836,
    name: "ALVAREZ JONTE AV. 3241",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4908902,
    latitude: -34.61175411,
    name: "ALVAREZ JONTE AV. 3477",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49732895,
    latitude: -34.61526525,
    name: "ALVAREZ JONTE AV. 4029",
    district: "Monte Castro"
  },
  {
    longitude: -58.50316445,
    latitude: -34.6183582,
    name: "ALVAREZ JONTE AV. 4559",
    district: "Monte Castro"
  },
  {
    longitude: -58.50536761,
    latitude: -34.61950706,
    name: "ALVAREZ JONTE AV. 4753",
    district: "Monte Castro"
  },
  {
    longitude: -58.50837544,
    latitude: -34.62134309,
    name: "ALVAREZ JONTE AV. 5069",
    district: "Monte Castro"
  },
  {
    longitude: -58.51006628,
    latitude: -34.62283092,
    name: "ALVAREZ JONTE AV. 5163",
    district: "Monte Castro"
  },
  {
    longitude: -58.5124153,
    latitude: -34.62490173,
    name: "ALVAREZ JONTE AV. 5379",
    district: "Monte Castro"
  },
  {
    longitude: -58.51531445,
    latitude: -34.62745778,
    name: "ALVAREZ JONTE AV. 5695",
    district: "Monte Castro"
  },
  {
    longitude: -58.51674191,
    latitude: -34.62958372,
    name: "ALVAREZ JONTE AV. 5933",
    district: "Versalles"
  },
  {
    longitude: -58.51892883,
    latitude: -34.6311688,
    name: "ALVAREZ JONTE AV. 6173",
    district: "Versalles"
  },
  {
    longitude: -58.50829849,
    latitude: -34.57213318,
    name: "ALVAREZ PRADO, MANUEL 2462",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.44736645,
    latitude: -34.58199011,
    name: "ALVAREZ THOMAS AV. 210",
    district: "Chacarita"
  },
  {
    longitude: -58.44875908,
    latitude: -34.58123469,
    name: "ALVAREZ THOMAS AV. 339",
    district: "Colegiales"
  },
  {
    longitude: -58.45237308,
    latitude: -34.5799362,
    name: "ALVAREZ THOMAS AV. 739",
    district: "Colegiales"
  },
  {
    longitude: -58.45334481,
    latitude: -34.57983585,
    name: "ALVAREZ THOMAS AV. 794",
    district: "Chacarita"
  },
  {
    longitude: -58.45672352,
    latitude: -34.57860916,
    name: "ALVAREZ THOMAS AV. 1071",
    district: "Colegiales"
  },
  {
    longitude: -58.4624539,
    latitude: -34.57826399,
    name: "ALVAREZ THOMAS AV. 1445",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47155919,
    latitude: -34.57805553,
    name: "ALVAREZ THOMAS AV. 2155",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47263536,
    latitude: -34.57781406,
    name: "ALVAREZ THOMAS AV. 2237",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.45561036,
    latitude: -34.64417516,
    name: "ALVAREZ, CRISOSTOMO 2711",
    district: "Flores"
  },
  {
    longitude: -58.45833645,
    latitude: -34.64618933,
    name: "ALVAREZ, CRISOSTOMO 2985",
    district: "Flores"
  },
  {
    longitude: -58.4604427,
    latitude: -34.64770876,
    name: "ALVAREZ, CRISOSTOMO 3173",
    district: "Flores"
  },
  {
    longitude: -58.47378915,
    latitude: -34.66091748,
    name: "ALVAREZ, CRISOSTOMO 4458",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49296609,
    latitude: -34.6778194,
    name: "ALVAREZ, CRISOSTOMO 6793",
    district: "Villa Lugano"
  },
  {
    longitude: -58.45688414,
    latitude: -34.61927689,
    name: "ALVAREZ, DONATO, TTE. GRAL. 559",
    district: "Caballito"
  },
  {
    longitude: -58.45891814,
    latitude: -34.61483187,
    name: "ALVAREZ, DONATO, TTE. GRAL. 933",
    district: "Caballito"
  },
  {
    longitude: -58.45972804,
    latitude: -34.61351644,
    name: "ALVAREZ, DONATO, TTE. GRAL. 1120",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46121657,
    latitude: -34.61023222,
    name: "ALVAREZ, DONATO, TTE. GRAL. 1445",
    district: "Caballito"
  },
  {
    longitude: -58.46854174,
    latitude: -34.5950703,
    name: "ALVAREZ, DONATO, TTE. GRAL. AV. 2556",
    district: "Paternal"
  },
  {
    longitude: -58.39046333,
    latitude: -34.58655105,
    name: "ALVEAR AV. 2106",
    district: "Recoleta"
  },
  {
    longitude: -58.38747905,
    latitude: -34.59703952,
    name: "ALVEAR, MARCELO T. DE 1435",
    district: "Recoleta"
  },
  {
    longitude: -58.39678737,
    latitude: -34.59723041,
    name: "ALVEAR, MARCELO T. DE 2051",
    district: "Recoleta"
  },
  {
    longitude: -58.40094119,
    latitude: -34.59650992,
    name: "ALVEAR, MARCELO T. DE 2349",
    district: "Recoleta"
  },
  {
    longitude: -58.41486148,
    latitude: -34.63580478,
    name: "ALZAGA 2050",
    district: "Boedo"
  },
  {
    longitude: -58.51580422,
    latitude: -34.65516557,
    name: "ANDALGALA 1527",
    district: "Mataderos"
  },
  {
    longitude: -58.514413,
    latitude: -34.65626461,
    name: "ANDALGALA 1653",
    district: "Mataderos"
  },
  {
    longitude: -58.50363149,
    latitude: -34.6650238,
    name: "ANDALGALA 2489",
    district: "Mataderos"
  },
  {
    longitude: -58.50244645,
    latitude: -34.66593263,
    name: "ANDALGALA 2591",
    district: "Mataderos"
  },
  {
    longitude: -58.48049113,
    latitude: -34.58637205,
    name: "ANDONAEGUI 1382",
    district: "Parque Chas"
  },
  {
    longitude: -58.46898431,
    latitude: -34.66735934,
    name: "AQUINO 4651",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47522103,
    latitude: -34.67313739,
    name: "AQUINO 5437",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44317682,
    latitude: -34.61475711,
    name: "ARANGUREN, JUAN F., DR. 761",
    district: "Caballito"
  },
  {
    longitude: -58.44887107,
    latitude: -34.61709162,
    name: "ARANGUREN, JUAN F., DR. 1125",
    district: "Caballito"
  },
  {
    longitude: -58.45149613,
    latitude: -34.61809897,
    name: "ARANGUREN, JUAN F., DR. 1361",
    district: "Caballito"
  },
  {
    longitude: -58.45419924,
    latitude: -34.61913621,
    name: "ARANGUREN, JUAN F., DR. 1579",
    district: "Caballito"
  },
  {
    longitude: -58.46077854,
    latitude: -34.62139923,
    name: "ARANGUREN, JUAN F., DR. 2015",
    district: "Flores"
  },
  {
    longitude: -58.46298106,
    latitude: -34.62224317,
    name: "ARANGUREN, JUAN F., DR. 2207",
    district: "Flores"
  },
  {
    longitude: -58.46741259,
    latitude: -34.62366649,
    name: "ARANGUREN, JUAN F., DR. 2551",
    district: "Flores"
  },
  {
    longitude: -58.49106118,
    latitude: -34.63079482,
    name: "ARANGUREN, JUAN F., DR. 4475",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49489774,
    latitude: -34.63211098,
    name: "ARANGUREN, JUAN F., DR. 4821",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.43592079,
    latitude: -34.61544039,
    name: "ARAOZ ALFARO, GREGORIO, DR 360",
    district: "Caballito"
  },
  {
    longitude: -58.37252344,
    latitude: -34.64037013,
    name: "ARAOZ DE LAMADRID, GREGORIO, GRAL. 1459",
    district: "Barracas"
  },
  {
    longitude: -58.50363596,
    latitude: -34.64214592,
    name: "ARAUJO 434",
    district: "Villa Luro"
  },
  {
    longitude: -58.50140954,
    latitude: -34.64398369,
    name: "ARAUJO 645",
    district: "Villa Luro"
  },
  {
    longitude: -58.49975947,
    latitude: -34.64533566,
    name: "ARAUJO 811",
    district: "Mataderos"
  },
  {
    longitude: -58.49684626,
    latitude: -34.64762811,
    name: "ARAUJO 1063",
    district: "Mataderos"
  },
  {
    longitude: -58.49537208,
    latitude: -34.64875832,
    name: "ARAUJO 1179",
    district: "Mataderos"
  },
  {
    longitude: -58.4935527,
    latitude: -34.65015196,
    name: "ARAUJO 1327",
    district: "Mataderos"
  },
  {
    longitude: -58.49044092,
    latitude: -34.65257905,
    name: "ARAUJO 1651",
    district: "Mataderos"
  },
  {
    longitude: -58.48848841,
    latitude: -34.65411229,
    name: "ARAUJO 1807",
    district: "Mataderos"
  },
  {
    longitude: -58.4868588,
    latitude: -34.65538229,
    name: "ARAUJO 1949",
    district: "Mataderos"
  },
  {
    longitude: -58.48285697,
    latitude: -34.65849669,
    name: "ARAUJO 2295",
    district: "Mataderos"
  },
  {
    longitude: -58.47859022,
    latitude: -34.66182428,
    name: "ARAUJO 2669",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47755408,
    latitude: -34.66266165,
    name: "ARAUJO 2749",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4710528,
    latitude: -34.66771721,
    name: "ARAUJO 3313",
    district: "Villa Lugano"
  },
  {
    longitude: -58.43082478,
    latitude: -34.57089802,
    name: "ARCE 323",
    district: "Palermo"
  },
  {
    longitude: -58.43193815,
    latitude: -34.57025105,
    name: "ARCE 441",
    district: "Palermo"
  },
  {
    longitude: -58.43381018,
    latitude: -34.56916154,
    name: "ARCE 611",
    district: "Palermo"
  },
  {
    longitude: -58.43721523,
    latitude: -34.56717351,
    name: "ARCE 949",
    district: "Palermo"
  },
  {
    longitude: -58.4504535,
    latitude: -34.56425307,
    name: "ARCOS 1681",
    district: "Belgrano"
  },
  {
    longitude: -58.45085689,
    latitude: -34.56378823,
    name: "ARCOS 1735",
    district: "Belgrano"
  },
  {
    longitude: -58.46662217,
    latitude: -34.54539248,
    name: "ARCOS 3877",
    district: "Nuñez"
  },
  {
    longitude: -58.45081613,
    latitude: -34.59162156,
    name: "ARENAL, CONCEPCION 4235",
    district: "Chacarita"
  },
  {
    longitude: -58.45295764,
    latitude: -34.59353841,
    name: "ARENAL, CONCEPCION 4455",
    district: "Chacarita"
  },
  {
    longitude: -58.45383913,
    latitude: -34.59432833,
    name: "ARENAL, CONCEPCION 4555",
    district: "Chacarita"
  },
  {
    longitude: -58.45480382,
    latitude: -34.59520907,
    name: "ARENAL, CONCEPCION 4655",
    district: "Chacarita"
  },
  {
    longitude: -58.39894981,
    latitude: -34.59428911,
    name: "ARENALES 2258",
    district: "Recoleta"
  },
  {
    longitude: -58.40478113,
    latitude: -34.59209323,
    name: "ARENALES 2774",
    district: "Recoleta"
  },
  {
    longitude: -58.40851271,
    latitude: -34.58906156,
    name: "ARENALES 3162",
    district: "Recoleta"
  },
  {
    longitude: -58.45063667,
    latitude: -34.61397798,
    name: "ARENGREEN 1338",
    district: "Caballito"
  },
  {
    longitude: -58.44394608,
    latitude: -34.58413471,
    name: "AREVALO 1375",
    district: "Palermo"
  },
  {
    longitude: -58.44196389,
    latitude: -34.58236801,
    name: "AREVALO 1531",
    district: "Palermo"
  },
  {
    longitude: -58.43989655,
    latitude: -34.58056565,
    name: "AREVALO 1745",
    district: "Palermo"
  },
  {
    longitude: -58.43911707,
    latitude: -34.57989416,
    name: "AREVALO 1827",
    district: "Palermo"
  },
  {
    longitude: -58.43736136,
    latitude: -34.57835463,
    name: "AREVALO 2015",
    district: "Palermo"
  },
  {
    longitude: -58.43618064,
    latitude: -34.57732694,
    name: "AREVALO 2181",
    district: "Palermo"
  },
  {
    longitude: -58.4347807,
    latitude: -34.57611148,
    name: "AREVALO 2321",
    district: "Palermo"
  },
  {
    longitude: -58.49845312,
    latitude: -34.67379013,
    name: "ARGENTINA AV. 6890",
    district: "Villa Lugano"
  },
  {
    longitude: -58.50116958,
    latitude: -34.58969455,
    name: "ARGERICH 4356",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50247291,
    latitude: -34.58825065,
    name: "ARGERICH 4560",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50382199,
    latitude: -34.58676171,
    name: "ARGERICH 4720",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50548132,
    latitude: -34.58492596,
    name: "ARGERICH 4962",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50709144,
    latitude: -34.58314366,
    name: "ARGERICH 5192",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50838444,
    latitude: -34.58171556,
    name: "ARGERICH 5390",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.47691935,
    latitude: -34.58496108,
    name: "ARISMENDI 2690",
    district: "Parque Chas"
  },
  {
    longitude: -58.47839364,
    latitude: -34.58610481,
    name: "ARISMENDI 2848",
    district: "Parque Chas"
  },
  {
    longitude: -58.43114898,
    latitude: -34.59204163,
    name: "ARMENIA 1329",
    district: "Palermo"
  },
  {
    longitude: -58.42859244,
    latitude: -34.59036051,
    name: "ARMENIA 1561",
    district: "Palermo"
  },
  {
    longitude: -58.42651155,
    latitude: -34.58898189,
    name: "ARMENIA 1773",
    district: "Palermo"
  },
  {
    longitude: -58.42458196,
    latitude: -34.58770438,
    name: "ARMENIA 1963",
    district: "Palermo"
  },
  {
    longitude: -58.42328334,
    latitude: -34.58686084,
    name: "ARMENIA 2121",
    district: "Palermo"
  },
  {
    longitude: -58.42017414,
    latitude: -34.58486591,
    name: "ARMENIA 2341",
    district: "Palermo"
  },
  {
    longitude: -58.45690428,
    latitude: -34.5746914,
    name: "ARREDONDO, VIRREY 3231",
    district: "Colegiales"
  },
  {
    longitude: -58.45772084,
    latitude: -34.57573614,
    name: "ARREDONDO, VIRREY 3375",
    district: "Colegiales"
  },
  {
    longitude: -58.45900781,
    latitude: -34.57744424,
    name: "ARREDONDO, VIRREY 3532",
    district: "Colegiales"
  },
  {
    longitude: -58.4794007,
    latitude: -34.60185152,
    name: "ARREGUI 2375",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48216556,
    latitude: -34.60342096,
    name: "ARREGUI 2595",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48465183,
    latitude: -34.60482916,
    name: "ARREGUI 2783",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48814824,
    latitude: -34.60681053,
    name: "ARREGUI 3063",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49055252,
    latitude: -34.60816844,
    name: "ARREGUI 3247",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49359036,
    latitude: -34.60986277,
    name: "ARREGUI 3549",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49635918,
    latitude: -34.61143009,
    name: "ARREGUI 3787",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50064475,
    latitude: -34.61389736,
    name: "ARREGUI 4191",
    district: "Monte Castro"
  },
  {
    longitude: -58.50207438,
    latitude: -34.61471816,
    name: "ARREGUI 4305",
    district: "Monte Castro"
  },
  {
    longitude: -58.50652721,
    latitude: -34.61725683,
    name: "ARREGUI 4685",
    district: "Monte Castro"
  },
  {
    longitude: -58.51105789,
    latitude: -34.62015269,
    name: "ARREGUI 5095",
    district: "Monte Castro"
  },
  {
    longitude: -58.51287744,
    latitude: -34.62165921,
    name: "ARREGUI 5217",
    district: "Monte Castro"
  },
  {
    longitude: -58.51515812,
    latitude: -34.62378158,
    name: "ARREGUI 5439",
    district: "Monte Castro"
  },
  {
    longitude: -58.51727461,
    latitude: -34.62572064,
    name: "ARREGUI 5681",
    district: "Monte Castro"
  },
  {
    longitude: -58.52628046,
    latitude: -34.62885972,
    name: "ARREGUI 6645",
    district: "Versalles"
  },
  {
    longitude: -58.5288205,
    latitude: -34.62938918,
    name: "ARREGUI 6869",
    district: "Versalles"
  },
  {
    longitude: -58.52127943,
    latitude: -34.62777553,
    name: "ARREGUI AV. 6155",
    district: "Versalles"
  },
  {
    longitude: -58.52250561,
    latitude: -34.62802956,
    name: "ARREGUI AV. 6271",
    district: "Versalles"
  },
  {
    longitude: -58.44599166,
    latitude: -34.56311186,
    name: "ARRIBEÑOS 1595",
    district: "Belgrano"
  },
  {
    longitude: -58.45238001,
    latitude: -34.5554636,
    name: "ARRIBEÑOS 2394",
    district: "Belgrano"
  },
  {
    longitude: -58.45422765,
    latitude: -34.55316492,
    name: "ARRIBEÑOS 2631",
    district: "Belgrano"
  },
  {
    longitude: -58.50111805,
    latitude: -34.64836396,
    name: "ARTIGAS MANUEL DE 5720",
    district: "Mataderos"
  },
  {
    longitude: -58.50215413,
    latitude: -34.64932345,
    name: "ARTIGAS MANUEL DE 5866",
    district: "Mataderos"
  },
  {
    longitude: -58.50479676,
    latitude: -34.65178073,
    name: "ARTIGAS MANUEL DE 6140",
    district: "Mataderos"
  },
  {
    longitude: -58.50652132,
    latitude: -34.65332654,
    name: "ARTIGAS MANUEL DE 6368",
    district: "Mataderos"
  },
  {
    longitude: -58.50763718,
    latitude: -34.65440381,
    name: "ARTIGAS MANUEL DE 6506",
    district: "Mataderos"
  },
  {
    longitude: -58.50824771,
    latitude: -34.65499288,
    name: "ARTIGAS MANUEL DE 6606",
    district: "Mataderos"
  },
  {
    longitude: -58.51005138,
    latitude: -34.6567536,
    name: "ARTIGAS MANUEL DE 6890",
    district: "Mataderos"
  },
  {
    longitude: -58.48640005,
    latitude: -34.59640066,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 3206",
    district: "Agronomia"
  },
  {
    longitude: -58.49034782,
    latitude: -34.59161267,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 3596",
    district: "Agronomia"
  },
  {
    longitude: -58.49124098,
    latitude: -34.59062487,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 3706",
    district: "Agronomia"
  },
  {
    longitude: -58.49261926,
    latitude: -34.58910887,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 3916",
    district: "Agronomia"
  },
  {
    longitude: -58.49394895,
    latitude: -34.58763772,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 4130",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49528225,
    latitude: -34.58615996,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 4348",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49650689,
    latitude: -34.58480973,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 4520",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49804671,
    latitude: -34.58313344,
    name: "ARTIGAS, JOSE GERVASIO, GRAL. 4720",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.44256596,
    latitude: -34.55682879,
    name: "ARTILLEROS 1893",
    district: "Belgrano"
  },
  {
    longitude: -58.44386654,
    latitude: -34.55530749,
    name: "ARTILLEROS 2045",
    district: "Belgrano"
  },
  {
    longitude: -58.44514922,
    latitude: -34.5539442,
    name: "ARTILLEROS 2182",
    district: "Belgrano"
  },
  {
    longitude: -58.44637362,
    latitude: -34.55239372,
    name: "ARTILLEROS 2355",
    district: "Belgrano"
  },
  {
    longitude: -58.36574151,
    latitude: -34.63154668,
    name: "ARZOBISPO ESPINOSA 563",
    district: "Boca"
  },
  {
    longitude: -58.43384916,
    latitude: -34.63432658,
    name: "ASAMBLEA AV. 574",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43798805,
    latitude: -34.63516011,
    name: "ASAMBLEA AV. 946",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44047488,
    latitude: -34.63565907,
    name: "ASAMBLEA AV. 1110",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44498083,
    latitude: -34.63656961,
    name: "ASAMBLEA AV. 1454",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44775667,
    latitude: -34.63766361,
    name: "ASAMBLEA AV. 1640",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44970747,
    latitude: -34.63912762,
    name: "ASAMBLEA AV. 1814",
    district: "Flores"
  },
  {
    longitude: -58.48942122,
    latitude: -34.58749317,
    name: "ASUNCION 2240",
    district: "Agronomia"
  },
  {
    longitude: -58.49860669,
    latitude: -34.5931787,
    name: "ASUNCION 3026",
    district: "Agronomia"
  },
  {
    longitude: -58.50415899,
    latitude: -34.59651983,
    name: "ASUNCION 3451",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50670655,
    latitude: -34.59808962,
    name: "ASUNCION 3635",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50824132,
    latitude: -34.59904073,
    name: "ASUNCION 3753",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5105514,
    latitude: -34.60046792,
    name: "ASUNCION 3943",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5159135,
    latitude: -34.60377768,
    name: "ASUNCION 4413",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51897824,
    latitude: -34.6056639,
    name: "ASUNCION 4665",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52241947,
    latitude: -34.60793735,
    name: "ASUNCION 4948",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52548768,
    latitude: -34.61003361,
    name: "ASUNCION 5142",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52764067,
    latitude: -34.61150224,
    name: "ASUNCION 5264",
    district: "Villa Devoto"
  },
  {
    longitude: -58.40680886,
    latitude: -34.64513064,
    name: "ATUEL 642",
    district: "Parque Patricios"
  },
  {
    longitude: -58.38532496,
    latitude: -34.64647655,
    name: "AUSTRALIA AV. 2716",
    district: "Barracas"
  },
  {
    longitude: -58.40383272,
    latitude: -34.58793022,
    name: "AUSTRIA 2105",
    district: "Recoleta"
  },
  {
    longitude: -58.43110193,
    latitude: -34.61131338,
    name: "AVELLANEDA 64",
    district: "Caballito"
  },
  {
    longitude: -58.44643373,
    latitude: -34.6175154,
    name: "AVELLANEDA 1092",
    district: "Caballito"
  },
  {
    longitude: -58.48789579,
    latitude: -34.63132764,
    name: "AVELLANEDA 4324",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.43555692,
    latitude: -34.6131919,
    name: "AVELLANEDA AV. 372",
    district: "Caballito"
  },
  {
    longitude: -58.44948675,
    latitude: -34.61844718,
    name: "AVELLANEDA AV. 1261",
    district: "Caballito"
  },
  {
    longitude: -58.4529288,
    latitude: -34.62014446,
    name: "AVELLANEDA AV. 1520",
    district: "Caballito"
  },
  {
    longitude: -58.45483091,
    latitude: -34.62085008,
    name: "AVELLANEDA AV. 1694",
    district: "Caballito"
  },
  {
    longitude: -58.45852268,
    latitude: -34.62216316,
    name: "AVELLANEDA AV. 1944",
    district: "Flores"
  },
  {
    longitude: -58.46161065,
    latitude: -34.62323697,
    name: "AVELLANEDA AV. 2146",
    district: "Flores"
  },
  {
    longitude: -58.46381273,
    latitude: -34.62400677,
    name: "AVELLANEDA AV. 2340",
    district: "Flores"
  },
  {
    longitude: -58.4667643,
    latitude: -34.62495575,
    name: "AVELLANEDA AV. 2552",
    district: "Flores"
  },
  {
    longitude: -58.46950445,
    latitude: -34.62581218,
    name: "AVELLANEDA AV. 2748",
    district: "Flores"
  },
  {
    longitude: -58.48588399,
    latitude: -34.63012966,
    name: "AVELLANEDA AV. 4092",
    district: "Floresta"
  },
  {
    longitude: -58.4592709,
    latitude: -34.57416982,
    name: "AVILES, VIRREY 3267",
    district: "Colegiales"
  },
  {
    longitude: -58.37112279,
    latitude: -34.63989572,
    name: "AZARA 883",
    district: "Barracas"
  },
  {
    longitude: -58.47455924,
    latitude: -34.63459316,
    name: "AZUL 208",
    district: "Floresta"
  },
  {
    longitude: -58.47181828,
    latitude: -34.64096585,
    name: "AZUL 838",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.45726705,
    latitude: -34.62423407,
    name: "BACACAY 1827",
    district: "Flores"
  },
  {
    longitude: -58.46037895,
    latitude: -34.62531705,
    name: "BACACAY 2145",
    district: "Flores"
  },
  {
    longitude: -58.46259776,
    latitude: -34.62607441,
    name: "BACACAY 2319",
    district: "Flores"
  },
  {
    longitude: -58.46548829,
    latitude: -34.62688047,
    name: "BACACAY 2517",
    district: "Flores"
  },
  {
    longitude: -58.46915056,
    latitude: -34.62798616,
    name: "BACACAY 2787",
    district: "Flores"
  },
  {
    longitude: -58.48334898,
    latitude: -34.63167555,
    name: "BACACAY 3949",
    district: "Floresta"
  },
  {
    longitude: -58.48727702,
    latitude: -34.63268803,
    name: "BACACAY 4271",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49491466,
    latitude: -34.63452788,
    name: "BACACAY 4858",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49724143,
    latitude: -34.63482763,
    name: "BACACAY 5020",
    district: "Villa Luro"
  },
  {
    longitude: -58.50015033,
    latitude: -34.63520913,
    name: "BACACAY 5210",
    district: "Villa Luro"
  },
  {
    longitude: -58.50267067,
    latitude: -34.63553741,
    name: "BACACAY 5410",
    district: "Villa Luro"
  },
  {
    longitude: -58.50541122,
    latitude: -34.63582496,
    name: "BACACAY 5606",
    district: "Villa Luro"
  },
  {
    longitude: -58.42944374,
    latitude: -34.57305273,
    name: "BAEZ 90",
    district: "Palermo"
  },
  {
    longitude: -58.43290914,
    latitude: -34.57107358,
    name: "BAEZ 476",
    district: "Palermo"
  },
  {
    longitude: -58.48962989,
    latitude: -34.62071631,
    name: "BAHIA BLANCA 1425",
    district: "Floresta"
  },
  {
    longitude: -58.49289003,
    latitude: -34.60479881,
    name: "BAIGORRIA 3211",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49555148,
    latitude: -34.60634302,
    name: "BAIGORRIA 3495",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49710058,
    latitude: -34.60723988,
    name: "BAIGORRIA 3627",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49957997,
    latitude: -34.6087152,
    name: "BAIGORRIA 3845",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50658428,
    latitude: -34.6128651,
    name: "BAIGORRIA 4475",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50996383,
    latitude: -34.61484087,
    name: "BAIGORRIA 4731",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51510803,
    latitude: -34.61851604,
    name: "BAIGORRIA 5155",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51932182,
    latitude: -34.62228398,
    name: "BAIGORRIA 5543",
    district: "Villa Real"
  },
  {
    longitude: -58.42695984,
    latitude: -34.63610139,
    name: "BALBASTRO 576",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42873167,
    latitude: -34.63640552,
    name: "BALBASTRO 706",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43339288,
    latitude: -34.63719034,
    name: "BALBASTRO 1108",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43678539,
    latitude: -34.63786376,
    name: "BALBASTRO 1330",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44118287,
    latitude: -34.63904156,
    name: "BALBASTRO 1627",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44372065,
    latitude: -34.6396658,
    name: "BALBASTRO 1839",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44591283,
    latitude: -34.64093924,
    name: "BALBASTRO 2065",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44754362,
    latitude: -34.64242214,
    name: "BALBASTRO 2237",
    district: "Flores"
  },
  {
    longitude: -58.448793,
    latitude: -34.64351181,
    name: "BALBASTRO 2353",
    district: "Flores"
  },
  {
    longitude: -58.47723635,
    latitude: -34.66729441,
    name: "BALBASTRO 5150",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46397531,
    latitude: -34.56315823,
    name: "BALBIN, RICARDO, DR. AV. 2325",
    district: "Belgrano"
  },
  {
    longitude: -58.46929984,
    latitude: -34.59001667,
    name: "BALBOA 615",
    district: "Paternal"
  },
  {
    longitude: -58.4793938,
    latitude: -34.57994277,
    name: "BALLIVIAN 2537",
    district: "Parque Chas"
  },
  {
    longitude: -58.48170908,
    latitude: -34.58128911,
    name: "BALLIVIAN 2795",
    district: "Parque Chas"
  },
  {
    longitude: -58.48662497,
    latitude: -34.58459976,
    name: "BALLIVIAN 3309",
    district: "Parque Chas"
  },
  {
    longitude: -58.42268576,
    latitude: -34.65210596,
    name: "BARCO CENTENERA DEL 3121",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.41881442,
    latitude: -34.65491568,
    name: "BARCO CENTENERA DEL 3461",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.52343122,
    latitude: -34.63301706,
    name: "BARRAGAN 592",
    district: "Versalles"
  },
  {
    longitude: -58.4454832,
    latitude: -34.65847462,
    name: "BARROS PAZOS, JOSE 3096",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44738096,
    latitude: -34.66004719,
    name: "BARROS PAZOS, JOSE 3295",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44763036,
    latitude: -34.66026663,
    name: "BARROS PAZOS, JOSE 3305",
    district: "Villa Soldati"
  },
  {
    longitude: -58.47624313,
    latitude: -34.68456405,
    name: "BARROS PAZOS, JOSE 6304",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47929118,
    latitude: -34.6873131,
    name: "BARROS PAZOS, JOSE 6710",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.48102583,
    latitude: -34.58764696,
    name: "BARZANA 1313",
    district: "Parque Chas"
  },
  {
    longitude: -58.48234652,
    latitude: -34.5859759,
    name: "BARZANA 1487",
    district: "Parque Chas"
  },
  {
    longitude: -58.50507828,
    latitude: -34.63975815,
    name: "BASUALDO 150",
    district: "Villa Luro"
  },
  {
    longitude: -58.50296379,
    latitude: -34.64141179,
    name: "BASUALDO 332",
    district: "Villa Luro"
  },
  {
    longitude: -58.50053122,
    latitude: -34.64328273,
    name: "BASUALDO 532",
    district: "Villa Luro"
  },
  {
    longitude: -58.49726585,
    latitude: -34.64590189,
    name: "BASUALDO 860",
    district: "Mataderos"
  },
  {
    longitude: -58.49478002,
    latitude: -34.6478379,
    name: "BASUALDO 1054",
    district: "Mataderos"
  },
  {
    longitude: -58.49264839,
    latitude: -34.64948196,
    name: "BASUALDO 1224",
    district: "Mataderos"
  },
  {
    longitude: -58.49142063,
    latitude: -34.65043233,
    name: "BASUALDO 1360",
    district: "Mataderos"
  },
  {
    longitude: -58.48951505,
    latitude: -34.65192213,
    name: "BASUALDO 1548",
    district: "Mataderos"
  },
  {
    longitude: -58.4870533,
    latitude: -34.65384103,
    name: "BASUALDO 1762",
    district: "Mataderos"
  },
  {
    longitude: -58.4849773,
    latitude: -34.6554604,
    name: "BASUALDO 1930",
    district: "Mataderos"
  },
  {
    longitude: -58.47989962,
    latitude: -34.65941732,
    name: "BASUALDO 2384",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47795383,
    latitude: -34.66093761,
    name: "BASUALDO 2550",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47719146,
    latitude: -34.66151462,
    name: "BASUALDO 2606",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47068133,
    latitude: -34.6666155,
    name: "BASUALDO 3186",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47626882,
    latitude: -34.68115776,
    name: "BATLLE Y ORDOÑEZ, JOSE P.T. 6056",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48053703,
    latitude: -34.68448086,
    name: "BATLLE Y ORDOÑEZ, JOSE P.T. 6582",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48289306,
    latitude: -34.68659572,
    name: "BATLLE Y ORDOÑEZ, JOSE P.T. 6884",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44865535,
    latitude: -34.54792446,
    name: "BAVIO, ERNESTO A. 2930",
    district: "Belgrano"
  },
  {
    longitude: -58.50102105,
    latitude: -34.57697075,
    name: "BAZURCO 2360",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50355259,
    latitude: -34.5785381,
    name: "BAZURCO 2588",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50430665,
    latitude: -34.57900445,
    name: "BAZURCO 2646",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50678415,
    latitude: -34.58052655,
    name: "BAZURCO 2866",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51398608,
    latitude: -34.5850074,
    name: "BAZURCO 3410",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51167275,
    latitude: -34.63853768,
    name: "BEDOYA, ELIAS 96",
    district: "Liniers"
  },
  {
    longitude: -58.49498573,
    latitude: -34.59538666,
    name: "BEIRO, FRANCISCO AV. 2963",
    district: "Agronomia"
  },
  {
    longitude: -58.49907729,
    latitude: -34.59792647,
    name: "BEIRO, FRANCISCO AV. 3267",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50178365,
    latitude: -34.59960024,
    name: "BEIRO, FRANCISCO AV. 3475",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50450787,
    latitude: -34.60128173,
    name: "BEIRO, FRANCISCO AV. 3671",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50515729,
    latitude: -34.60168081,
    name: "BEIRO, FRANCISCO AV. 3715",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50781891,
    latitude: -34.60333176,
    name: "BEIRO, FRANCISCO AV. 3937",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51073671,
    latitude: -34.60510545,
    name: "BEIRO, FRANCISCO AV. 4215",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51231365,
    latitude: -34.60609628,
    name: "BEIRO, FRANCISCO AV. 4355",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5137379,
    latitude: -34.6069736,
    name: "BEIRO, FRANCISCO AV. 4473",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51607036,
    latitude: -34.60841107,
    name: "BEIRO, FRANCISCO AV. 4631",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51876599,
    latitude: -34.61007055,
    name: "BEIRO, FRANCISCO AV. 4829",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52129532,
    latitude: -34.61159579,
    name: "BEIRO, FRANCISCO AV. 5057",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52439538,
    latitude: -34.61346426,
    name: "BEIRO, FRANCISCO AV. 5253",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52607202,
    latitude: -34.61464466,
    name: "BEIRO, FRANCISCO AV. 5381",
    district: "Villa Real"
  },
  {
    longitude: -58.52862365,
    latitude: -34.61662879,
    name: "BEIRO, FRANCISCO AV. 5619",
    district: "Villa Real"
  },
  {
    longitude: -58.52955776,
    latitude: -34.61735264,
    name: "BEIRO, FRANCISCO AV. 5723",
    district: "Villa Real"
  },
  {
    longitude: -58.45631095,
    latitude: -34.60555086,
    name: "BELAUSTEGUI, LUIS, DR. 1104",
    district: "Caballito"
  },
  {
    longitude: -58.45890403,
    latitude: -34.60676903,
    name: "BELAUSTEGUI, LUIS, DR. 1328",
    district: "Caballito"
  },
  {
    longitude: -58.47587933,
    latitude: -34.61566946,
    name: "BELAUSTEGUI, LUIS, DR. 2778",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47771185,
    latitude: -34.61664181,
    name: "BELAUSTEGUI, LUIS, DR. 2926",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.4806578,
    latitude: -34.61818922,
    name: "BELAUSTEGUI, LUIS, DR. 3158",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48305425,
    latitude: -34.6194431,
    name: "BELAUSTEGUI, LUIS, DR. 3338",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48504203,
    latitude: -34.62095147,
    name: "BELAUSTEGUI, LUIS, DR. 3544",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48748384,
    latitude: -34.62303803,
    name: "BELAUSTEGUI, LUIS, DR. 3830",
    district: "Floresta"
  },
  {
    longitude: -58.48924605,
    latitude: -34.62449452,
    name: "BELAUSTEGUI, LUIS, DR. 4024",
    district: "Floresta"
  },
  {
    longitude: -58.49491564,
    latitude: -34.62826874,
    name: "BELAUSTEGUI, LUIS, DR. 4605",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49919801,
    latitude: -34.63119228,
    name: "BELAUSTEGUI, LUIS, DR. 4989",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.39436808,
    latitude: -34.61409792,
    name: "BELGRANO AV. 1980",
    district: "Balvanera"
  },
  {
    longitude: -58.39709066,
    latitude: -34.61426293,
    name: "BELGRANO AV. 2184",
    district: "Balvanera"
  },
  {
    longitude: -58.39992107,
    latitude: -34.61442331,
    name: "BELGRANO AV. 2370",
    district: "Balvanera"
  },
  {
    longitude: -58.40326462,
    latitude: -34.61462815,
    name: "BELGRANO AV. 2616",
    district: "Balvanera"
  },
  {
    longitude: -58.40807775,
    latitude: -34.61512478,
    name: "BELGRANO AV. 2990",
    district: "Balvanera"
  },
  {
    longitude: -58.40918862,
    latitude: -34.61526772,
    name: "BELGRANO AV. 3084",
    district: "Balvanera"
  },
  {
    longitude: -58.43476004,
    latitude: -34.65386097,
    name: "BERG, CARLOS 2710",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43389933,
    latitude: -34.65481296,
    name: "BERG, CARLOS 2812",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43053133,
    latitude: -34.65828369,
    name: "BERG, CARLOS 3195",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42953308,
    latitude: -34.65918068,
    name: "BERG, CARLOS 3310",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42818732,
    latitude: -34.66075299,
    name: "BERG, CARLOS 3450",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42721663,
    latitude: -34.66194828,
    name: "BERG, CARLOS 3592",
    district: "Villa Soldati"
  },
  {
    longitude: -58.45429496,
    latitude: -34.59776145,
    name: "BERNASCONI, MARIO 2247",
    district: "Villa Crespo"
  },
  {
    longitude: -58.40563981,
    latitude: -34.59012603,
    name: "BERUTI 2931",
    district: "Recoleta"
  },
  {
    longitude: -58.41107106,
    latitude: -34.58614886,
    name: "BERUTI 3457",
    district: "Palermo"
  },
  {
    longitude: -58.46784145,
    latitude: -34.54365517,
    name: "BESARES 2099",
    district: "Nuñez"
  },
  {
    longitude: -58.4520152,
    latitude: -34.54805018,
    name: "BETBEDER, ONOFRE, ALTE. 1356",
    district: "Belgrano"
  },
  {
    longitude: -58.4745804,
    latitude: -34.60279956,
    name: "BIARRITZ 2053",
    district: "Paternal"
  },
  {
    longitude: -58.47586284,
    latitude: -34.60462522,
    name: "BIARRITZ 2281",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.47756583,
    latitude: -34.60555898,
    name: "BIARRITZ 2431",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48021151,
    latitude: -34.60698881,
    name: "BIARRITZ 2631",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.45512314,
    latitude: -34.61405562,
    name: "BIEDMA, JOSE JUAN 935",
    district: "Caballito"
  },
  {
    longitude: -58.4668748,
    latitude: -34.59537863,
    name: "BIELSA, RAFAEL, DR. 156",
    district: "Paternal"
  },
  {
    longitude: -58.44982298,
    latitude: -34.63119136,
    name: "BILBAO, FRANCISCO 1473",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45064091,
    latitude: -34.63146362,
    name: "BILBAO, FRANCISCO 1545",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45291528,
    latitude: -34.6321912,
    name: "BILBAO, FRANCISCO 1807",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45702646,
    latitude: -34.63348854,
    name: "BILBAO, FRANCISCO 2187",
    district: "Flores"
  },
  {
    longitude: -58.46171831,
    latitude: -34.63643416,
    name: "BILBAO, FRANCISCO 2595",
    district: "Flores"
  },
  {
    longitude: -58.47322172,
    latitude: -34.64411317,
    name: "BILBAO, FRANCISCO 3768",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48101615,
    latitude: -34.6512968,
    name: "BILBAO, FRANCISCO 4541",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4657729,
    latitude: -34.6389766,
    name: "BILBAO, FRANCISCO AV. 3095",
    district: "Flores"
  },
  {
    longitude: -58.46739655,
    latitude: -34.64003818,
    name: "BILBAO, FRANCISCO AV. 3205",
    district: "Flores"
  },
  {
    longitude: -58.41581323,
    latitude: -34.61022615,
    name: "BILLINGHURST 37",
    district: "Almagro"
  },
  {
    longitude: -58.40624226,
    latitude: -34.58596971,
    name: "BILLINGHURST 2245",
    district: "Recoleta"
  },
  {
    longitude: -58.44330058,
    latitude: -34.54986409,
    name: "BLANCO ENCALADA 886",
    district: "Belgrano"
  },
  {
    longitude: -58.44509329,
    latitude: -34.55097133,
    name: "BLANCO ENCALADA 1076",
    district: "Belgrano"
  },
  {
    longitude: -58.44669225,
    latitude: -34.55190883,
    name: "BLANCO ENCALADA 1198",
    district: "Belgrano"
  },
  {
    longitude: -58.44742489,
    latitude: -34.55234217,
    name: "BLANCO ENCALADA 1254",
    district: "Belgrano"
  },
  {
    longitude: -58.4529,
    latitude: -34.55558295,
    name: "BLANCO ENCALADA 1732",
    district: "Belgrano"
  },
  {
    longitude: -58.45756675,
    latitude: -34.5583638,
    name: "BLANCO ENCALADA 2246",
    district: "Belgrano"
  },
  {
    longitude: -58.36379299,
    latitude: -34.63249881,
    name: "BLANES, JUAN MANUEL 555",
    district: "Boca"
  },
  {
    longitude: -58.4229536,
    latitude: -34.61514167,
    name: "BOCAYUVA, QUINTINO 222",
    district: "Almagro"
  },
  {
    longitude: -58.42249421,
    latitude: -34.61812129,
    name: "BOCAYUVA, QUINTINO 522",
    district: "Almagro"
  },
  {
    longitude: -58.42205697,
    latitude: -34.62242625,
    name: "BOCAYUVA, QUINTINO 872",
    district: "Boedo"
  },
  {
    longitude: -58.42129117,
    latitude: -34.62691005,
    name: "BOCAYUVA, QUINTINO 1148",
    district: "Boedo"
  },
  {
    longitude: -58.420646,
    latitude: -34.62965659,
    name: "BOCAYUVA, QUINTINO 1410",
    district: "Boedo"
  },
  {
    longitude: -58.42052057,
    latitude: -34.63425945,
    name: "BOCAYUVA, QUINTINO 1778",
    district: "Boedo"
  },
  {
    longitude: -58.41764297,
    latitude: -34.6130476,
    name: "BOEDO 145",
    district: "Almagro"
  },
  {
    longitude: -58.41704779,
    latitude: -34.61599605,
    name: "BOEDO AV. 315",
    district: "Almagro"
  },
  {
    longitude: -58.41662656,
    latitude: -34.62058977,
    name: "BOEDO AV. 657",
    district: "Almagro"
  },
  {
    longitude: -58.41649318,
    latitude: -34.62198366,
    name: "BOEDO AV. 777",
    district: "Boedo"
  },
  {
    longitude: -58.41625711,
    latitude: -34.62464764,
    name: "BOEDO AV. 935",
    district: "Boedo"
  },
  {
    longitude: -58.41601065,
    latitude: -34.6305679,
    name: "BOEDO AV. 1421",
    district: "Boedo"
  },
  {
    longitude: -58.41624711,
    latitude: -34.6347545,
    name: "BOEDO AV. 1753",
    district: "Boedo"
  },
  {
    longitude: -58.4160391,
    latitude: -34.63852142,
    name: "BOEDO AV. 2067",
    district: "Boedo"
  },
  {
    longitude: -58.4617988,
    latitude: -34.62456312,
    name: "BOGOTA 2216",
    district: "Flores"
  },
  {
    longitude: -58.46524599,
    latitude: -34.62561862,
    name: "BOGOTA 2472",
    district: "Flores"
  },
  {
    longitude: -58.46780788,
    latitude: -34.62642337,
    name: "BOGOTA 2656",
    district: "Flores"
  },
  {
    longitude: -58.48808786,
    latitude: -34.63278128,
    name: "BOGOTA 4339",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.44109353,
    latitude: -34.62773234,
    name: "BONIFACIO, JOSE 995",
    district: "Caballito"
  },
  {
    longitude: -58.45449223,
    latitude: -34.63023823,
    name: "BONIFACIO, JOSE 1871",
    district: "Flores"
  },
  {
    longitude: -58.45662448,
    latitude: -34.63092692,
    name: "BONIFACIO, JOSE 2075",
    district: "Flores"
  },
  {
    longitude: -58.45928882,
    latitude: -34.63177534,
    name: "BONIFACIO, JOSE 2291",
    district: "Flores"
  },
  {
    longitude: -58.46170887,
    latitude: -34.63250162,
    name: "BONIFACIO, JOSE 2429",
    district: "Flores"
  },
  {
    longitude: -58.4646381,
    latitude: -34.63339314,
    name: "BONIFACIO, JOSE 2649",
    district: "Flores"
  },
  {
    longitude: -58.46781448,
    latitude: -34.63436362,
    name: "BONIFACIO, JOSE 2895",
    district: "Flores"
  },
  {
    longitude: -58.47049814,
    latitude: -34.63520624,
    name: "BONIFACIO, JOSE 3095",
    district: "Flores"
  },
  {
    longitude: -58.47477342,
    latitude: -34.63667816,
    name: "BONIFACIO, JOSE 3491",
    district: "Floresta"
  },
  {
    longitude: -58.47511925,
    latitude: -34.63680026,
    name: "BONIFACIO, JOSE 3509",
    district: "Floresta"
  },
  {
    longitude: -58.4340738,
    latitude: -34.65332413,
    name: "BONORINO, ESTEBAN, CNEL. AV. 2710",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42970682,
    latitude: -34.65653435,
    name: "BONORINO, ESTEBAN, CNEL. AV. 3094",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42722936,
    latitude: -34.65827275,
    name: "BONORINO, ESTEBAN, CNEL. AV. 3390",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42508763,
    latitude: -34.66067523,
    name: "BONORINO, ESTEBAN, CNEL. AV. 3594",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.4447639,
    latitude: -34.58944239,
    name: "BONPLAND 921",
    district: "Chacarita"
  },
  {
    longitude: -58.44069539,
    latitude: -34.58630345,
    name: "BONPLAND 1371",
    district: "Palermo"
  },
  {
    longitude: -58.43861989,
    latitude: -34.58453864,
    name: "BONPLAND 1549",
    district: "Palermo"
  },
  {
    longitude: -58.43697019,
    latitude: -34.58309752,
    name: "BONPLAND 1761",
    district: "Palermo"
  },
  {
    longitude: -58.43602369,
    latitude: -34.58227224,
    name: "BONPLAND 1849",
    district: "Palermo"
  },
  {
    longitude: -58.43469855,
    latitude: -34.58111001,
    name: "BONPLAND 1991",
    district: "Palermo"
  },
  {
    longitude: -58.43391632,
    latitude: -34.58043768,
    name: "BONPLAND 2061",
    district: "Palermo"
  },
  {
    longitude: -58.43242639,
    latitude: -34.57913251,
    name: "BONPLAND 2251",
    district: "Palermo"
  },
  {
    longitude: -58.4316105,
    latitude: -34.57842058,
    name: "BONPLAND 2331",
    district: "Palermo"
  },
  {
    longitude: -58.52606473,
    latitude: -34.64672722,
    name: "BOQUERON 7106",
    district: "Liniers"
  },
  {
    longitude: -58.42878384,
    latitude: -34.58787016,
    name: "BORGES, JORGE LUIS 1733",
    district: "Palermo"
  },
  {
    longitude: -58.42663583,
    latitude: -34.5864741,
    name: "BORGES, JORGE LUIS 1937",
    district: "Palermo"
  },
  {
    longitude: -58.42475741,
    latitude: -34.58516327,
    name: "BORGES, JORGE LUIS 2149",
    district: "Palermo"
  },
  {
    longitude: -58.42246231,
    latitude: -34.58330819,
    name: "BORGES, JORGE LUIS 2355",
    district: "Palermo"
  },
  {
    longitude: -58.51866148,
    latitude: -34.64250463,
    name: "BOSCH, VENTURA 6534",
    district: "Liniers"
  },
  {
    longitude: -58.50004681,
    latitude: -34.65118902,
    name: "BRAGADO 5690",
    district: "Mataderos"
  },
  {
    longitude: -58.50145955,
    latitude: -34.65238546,
    name: "BRAGADO 5810",
    district: "Mataderos"
  },
  {
    longitude: -58.50355802,
    latitude: -34.65412251,
    name: "BRAGADO 6054",
    district: "Mataderos"
  },
  {
    longitude: -58.50525879,
    latitude: -34.65554621,
    name: "BRAGADO 6264",
    district: "Mataderos"
  },
  {
    longitude: -58.50731575,
    latitude: -34.6572624,
    name: "BRAGADO 6540",
    district: "Mataderos"
  },
  {
    longitude: -58.50978046,
    latitude: -34.65932425,
    name: "BRAGADO 6866",
    district: "Mataderos"
  },
  {
    longitude: -58.51130761,
    latitude: -34.66060055,
    name: "BRAGADO 7038",
    district: "Mataderos"
  },
  {
    longitude: -58.51331184,
    latitude: -34.66225834,
    name: "BRAGADO 7292",
    district: "Mataderos"
  },
  {
    longitude: -58.36698092,
    latitude: -34.63700263,
    name: "BRANDSEN 1013",
    district: "Boca"
  },
  {
    longitude: -58.38257311,
    latitude: -34.63866405,
    name: "BRANDSEN 2315",
    district: "Barracas"
  },
  {
    longitude: -58.38739594,
    latitude: -34.63946283,
    name: "BRANDSEN 2743",
    district: "Barracas"
  },
  {
    longitude: -58.40285221,
    latitude: -34.63240776,
    name: "BRASIL 2771",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41519965,
    latitude: -34.59609708,
    name: "BRAVO, MARIO 1151",
    district: "Recoleta"
  },
  {
    longitude: -58.35734806,
    latitude: -34.63210792,
    name: "BRIN, MINISTRO 965",
    district: "Boca"
  },
  {
    longitude: -58.3668735,
    latitude: -34.62783407,
    name: "BROWN, ALTE. AV. 162",
    district: "Boca"
  },
  {
    longitude: -58.36534967,
    latitude: -34.62924585,
    name: "BROWN, ALTE. AV. 349",
    district: "Boca"
  },
  {
    longitude: -58.36193616,
    latitude: -34.63149409,
    name: "BROWN, ALTE. AV. 735",
    district: "Boca"
  },
  {
    longitude: -58.3602598,
    latitude: -34.63316339,
    name: "BROWN, ALTE. AV. 929",
    district: "Boca"
  },
  {
    longitude: -58.49102215,
    latitude: -34.64601932,
    name: "BRUIX AV. 4676",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47564477,
    latitude: -34.59003781,
    name: "BUCARELLI 975",
    district: "Parque Chas"
  },
  {
    longitude: -58.51622323,
    latitude: -34.64489317,
    name: "CAAGUAZU 6276",
    district: "Liniers"
  },
  {
    longitude: -58.51782976,
    latitude: -34.64627411,
    name: "CAAGUAZU 6448",
    district: "Liniers"
  },
  {
    longitude: -58.51907175,
    latitude: -34.64734292,
    name: "CAAGUAZU 6638",
    district: "Liniers"
  },
  {
    longitude: -58.52108324,
    latitude: -34.64919817,
    name: "CAAGUAZU 6958",
    district: "Liniers"
  },
  {
    longitude: -58.52172336,
    latitude: -34.64979556,
    name: "CAAGUAZU 7036",
    district: "Liniers"
  },
  {
    longitude: -58.52304526,
    latitude: -34.65103321,
    name: "CAAGUAZU 7204",
    district: "Liniers"
  },
  {
    longitude: -58.52382115,
    latitude: -34.65173412,
    name: "CAAGUAZU 7308",
    district: "Liniers"
  },
  {
    longitude: -58.40799936,
    latitude: -34.58163714,
    name: "CABELLO 3322",
    district: "Palermo"
  },
  {
    longitude: -58.41331361,
    latitude: -34.57997894,
    name: "CABELLO 3826",
    district: "Palermo"
  },
  {
    longitude: -58.51136262,
    latitude: -34.58677652,
    name: "CABEZON, JOSE LEON 3376",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51900778,
    latitude: -34.59138916,
    name: "CABEZON, JOSE LEON 3979",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45145353,
    latitude: -34.56642199,
    name: "CABILDO AV. 1547",
    district: "Belgrano"
  },
  {
    longitude: -58.45454309,
    latitude: -34.56434761,
    name: "CABILDO AV. 1851",
    district: "Belgrano"
  },
  {
    longitude: -58.45698195,
    latitude: -34.56151174,
    name: "CABILDO AV. 2151",
    district: "Belgrano"
  },
  {
    longitude: -58.45955581,
    latitude: -34.55851622,
    name: "CABILDO AV. 2475",
    district: "Belgrano"
  },
  {
    longitude: -58.46219439,
    latitude: -34.55560674,
    name: "CABILDO AV. 2887",
    district: "Belgrano"
  },
  {
    longitude: -58.46468704,
    latitude: -34.55305459,
    name: "CABILDO AV. 3151",
    district: "Nuñez"
  },
  {
    longitude: -58.46654781,
    latitude: -34.55075817,
    name: "CABILDO AV. 3449",
    district: "Nuñez"
  },
  {
    longitude: -58.46822251,
    latitude: -34.54867269,
    name: "CABILDO AV. 3723",
    district: "Nuñez"
  },
  {
    longitude: -58.46960383,
    latitude: -34.54690053,
    name: "CABILDO AV. 3985",
    district: "Nuñez"
  },
  {
    longitude: -58.47162061,
    latitude: -34.54423076,
    name: "CABILDO AV. 4331",
    district: "Nuñez"
  },
  {
    longitude: -58.47334546,
    latitude: -34.54189625,
    name: "CABILDO AV. 4633",
    district: "Nuñez"
  },
  {
    longitude: -58.47523771,
    latitude: -34.53948369,
    name: "CABILDO AV. 4989",
    district: "Nuñez"
  },
  {
    longitude: -58.36016708,
    latitude: -34.62796142,
    name: "CABOTO 450",
    district: "Boca"
  },
  {
    longitude: -58.35890559,
    latitude: -34.62900603,
    name: "CABOTO 564",
    district: "Boca"
  },
  {
    longitude: -58.40926074,
    latitude: -34.59700973,
    name: "CABRERA, JOSE A. 3018",
    district: "Recoleta"
  },
  {
    longitude: -58.41232462,
    latitude: -34.59690694,
    name: "CABRERA, JOSE A. 3246",
    district: "Recoleta"
  },
  {
    longitude: -58.41637317,
    latitude: -34.59672547,
    name: "CABRERA, JOSE A. 3558",
    district: "Palermo"
  },
  {
    longitude: -58.42071891,
    latitude: -34.5965162,
    name: "CABRERA, JOSE A. 3840",
    district: "Palermo"
  },
  {
    longitude: -58.42374414,
    latitude: -34.59632633,
    name: "CABRERA, JOSE A. 4048",
    district: "Palermo"
  },
  {
    longitude: -58.42575883,
    latitude: -34.59463794,
    name: "CABRERA, JOSE A. 4338",
    district: "Palermo"
  },
  {
    longitude: -58.43848473,
    latitude: -34.58538642,
    name: "CABRERA, JOSE A. 5643",
    district: "Palermo"
  },
  {
    longitude: -58.44108073,
    latitude: -34.58346834,
    name: "CABRERA, JOSE A. 5891",
    district: "Palermo"
  },
  {
    longitude: -58.44150958,
    latitude: -34.58315169,
    name: "CABRERA, JOSE A. 5919",
    district: "Palermo"
  },
  {
    longitude: -58.44263002,
    latitude: -34.58232518,
    name: "CABRERA, JOSE A. 6031",
    district: "Palermo"
  },
  {
    longitude: -58.4391682,
    latitude: -34.63258477,
    name: "CACHIMAYO 1071",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.51439935,
    latitude: -34.64942873,
    name: "CAFAYATE 1011",
    district: "Liniers"
  },
  {
    longitude: -58.47737971,
    latitude: -34.67809998,
    name: "CAFAYATE 4155",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47421014,
    latitude: -34.68045082,
    name: "CAFAYATE 4458",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47249832,
    latitude: -34.68177167,
    name: "CAFAYATE 4630",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48484317,
    latitude: -34.6386139,
    name: "CAJARAVILLA 4180",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48761482,
    latitude: -34.63944163,
    name: "CAJARAVILLA 4352",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48926175,
    latitude: -34.63986673,
    name: "CAJARAVILLA 4458",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49417022,
    latitude: -34.64056782,
    name: "CAJARAVILLA 4786",
    district: "Villa Luro"
  },
  {
    longitude: -58.49631821,
    latitude: -34.64087352,
    name: "CAJARAVILLA 4950",
    district: "Villa Luro"
  },
  {
    longitude: -58.46441554,
    latitude: -34.58743586,
    name: "CALDAS 1331",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46559021,
    latitude: -34.58657687,
    name: "CALDAS 1423",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4676304,
    latitude: -34.58508365,
    name: "CALDAS 1619",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47176977,
    latitude: -34.58373542,
    name: "CALDAS 1987",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.50235649,
    latitude: -34.62908894,
    name: "CALDERON DE LA BARCA, PEDRO 1041",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.35829968,
    latitude: -34.6427335,
    name: "CALIFORNIA 604",
    district: "Boca"
  },
  {
    longitude: -58.37660349,
    latitude: -34.64764584,
    name: "CALIFORNIA 2086",
    district: "Barracas"
  },
  {
    longitude: -58.38509297,
    latitude: -34.6495086,
    name: "CALIFORNIA 2766",
    district: "Barracas"
  },
  {
    longitude: -58.39304329,
    latitude: -34.59762732,
    name: "CALLAO AV. 955",
    district: "Recoleta"
  },
  {
    longitude: -58.39038842,
    latitude: -34.59052143,
    name: "CALLAO AV. 1661",
    district: "Recoleta"
  },
  {
    longitude: -58.38793437,
    latitude: -34.58830651,
    name: "CALLAO AV. 1911",
    district: "Recoleta"
  },
  {
    longitude: -58.39383763,
    latitude: -34.62046692,
    name: "CALVO, CARLOS 1953",
    district: "San Cristobal"
  },
  {
    longitude: -58.39700481,
    latitude: -34.62066681,
    name: "CALVO, CARLOS 2193",
    district: "San Cristobal"
  },
  {
    longitude: -58.39952679,
    latitude: -34.62084234,
    name: "CALVO, CARLOS 2381",
    district: "San Cristobal"
  },
  {
    longitude: -58.40110201,
    latitude: -34.62096087,
    name: "CALVO, CARLOS 2527",
    district: "San Cristobal"
  },
  {
    longitude: -58.4037868,
    latitude: -34.62129331,
    name: "CALVO, CARLOS 2755",
    district: "San Cristobal"
  },
  {
    longitude: -58.40634428,
    latitude: -34.6218034,
    name: "CALVO, CARLOS 2905",
    district: "San Cristobal"
  },
  {
    longitude: -58.40786185,
    latitude: -34.62209995,
    name: "CALVO, CARLOS 3009",
    district: "San Cristobal"
  },
  {
    longitude: -58.41178116,
    latitude: -34.62286988,
    name: "CALVO, CARLOS 3275",
    district: "San Cristobal"
  },
  {
    longitude: -58.45681117,
    latitude: -34.63153209,
    name: "CAMACUA 340",
    district: "Flores"
  },
  {
    longitude: -58.43825112,
    latitude: -34.60239863,
    name: "CAMARGO 275",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43943026,
    latitude: -34.60110561,
    name: "CAMARGO 413",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44090106,
    latitude: -34.59967691,
    name: "CAMARGO 617",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44188289,
    latitude: -34.59879447,
    name: "CAMARGO 709",
    district: "Villa Crespo"
  },
  {
    longitude: -58.46268365,
    latitude: -34.60386291,
    name: "CAMARONES 1492",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46499868,
    latitude: -34.60479948,
    name: "CAMARONES 1662",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46740387,
    latitude: -34.60588077,
    name: "CAMARONES 1852",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47140744,
    latitude: -34.60761349,
    name: "CAMARONES 2150",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.4762557,
    latitude: -34.61015642,
    name: "CAMARONES 2556",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47856302,
    latitude: -34.61137569,
    name: "CAMARONES 2738",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48080757,
    latitude: -34.61255803,
    name: "CAMARONES 2910",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48383971,
    latitude: -34.61415424,
    name: "CAMARONES 3152",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48955771,
    latitude: -34.61770639,
    name: "CAMARONES 3686",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.4899523,
    latitude: -34.61804376,
    name: "CAMARONES 3720",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49196926,
    latitude: -34.61975308,
    name: "CAMARONES 3946",
    district: "Floresta"
  },
  {
    longitude: -58.49554657,
    latitude: -34.62272392,
    name: "CAMARONES 4354",
    district: "Floresta"
  },
  {
    longitude: -58.49641477,
    latitude: -34.6233306,
    name: "CAMARONES 4446",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50002023,
    latitude: -34.62494317,
    name: "CAMARONES 4756",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.5021609,
    latitude: -34.62618562,
    name: "CAMARONES 4950",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50587895,
    latitude: -34.62954712,
    name: "CAMARONES 5264",
    district: "Villa Luro"
  },
  {
    longitude: -58.50739185,
    latitude: -34.63091083,
    name: "CAMARONES 5416",
    district: "Villa Luro"
  },
  {
    longitude: -58.51049531,
    latitude: -34.63368665,
    name: "CAMARONES 5780",
    district: "Versalles"
  },
  {
    longitude: -58.47314854,
    latitude: -34.58517643,
    name: "CAMPILLO 2512",
    district: "Parque Chas"
  },
  {
    longitude: -58.47548157,
    latitude: -34.58771762,
    name: "CAMPILLO 2766",
    district: "Parque Chas"
  },
  {
    longitude: -58.47650419,
    latitude: -34.58848386,
    name: "CAMPILLO 2862",
    district: "Parque Chas"
  },
  {
    longitude: -58.47827902,
    latitude: -34.5898302,
    name: "CAMPILLO 3074",
    district: "Parque Chas"
  },
  {
    longitude: -58.45852535,
    latitude: -34.54833938,
    name: "CAMPOS SALLES 1721",
    district: "Nuñez"
  },
  {
    longitude: -58.45995917,
    latitude: -34.54914661,
    name: "CAMPOS SALLES 1900",
    district: "Nuñez"
  },
  {
    longitude: -58.46460692,
    latitude: -34.55139534,
    name: "CAMPOS SALLES 2281",
    district: "Nuñez"
  },
  {
    longitude: -58.43187914,
    latitude: -34.57424329,
    name: "CAMPOS, LUIS M. AV. 231",
    district: "Palermo"
  },
  {
    longitude: -58.43443239,
    latitude: -34.57150199,
    name: "CAMPOS, LUIS M. AV. 539",
    district: "Palermo"
  },
  {
    longitude: -58.43533901,
    latitude: -34.57055151,
    name: "CAMPOS, LUIS M. AV. 661",
    district: "Palermo"
  },
  {
    longitude: -58.43679533,
    latitude: -34.56895636,
    name: "CAMPOS, LUIS M. AV. 835",
    district: "Palermo"
  },
  {
    longitude: -58.43982088,
    latitude: -34.56569751,
    name: "CAMPOS, LUIS M. AV. 1157",
    district: "Palermo"
  },
  {
    longitude: -58.4420435,
    latitude: -34.56394838,
    name: "CAMPOS, LUIS M. AV. 1363",
    district: "Palermo"
  },
  {
    longitude: -58.44410247,
    latitude: -34.56255569,
    name: "CAMPOS, LUIS M. AV. 1540",
    district: "Belgrano"
  },
  {
    longitude: -58.44495621,
    latitude: -34.56179951,
    name: "CAMPOS, LUIS M. AV. 1616",
    district: "Belgrano"
  },
  {
    longitude: -58.51417756,
    latitude: -34.60497081,
    name: "CANTILO, JOSE LUIS 4385",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51648881,
    latitude: -34.60635153,
    name: "CANTILO, JOSE LUIS 4583",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5202803,
    latitude: -34.6087064,
    name: "CANTILO, JOSE LUIS 4853",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52368123,
    latitude: -34.61101188,
    name: "CANTILO, JOSE LUIS 5119",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5258416,
    latitude: -34.61247507,
    name: "CANTILO, JOSE LUIS 5245",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52891631,
    latitude: -34.61477941,
    name: "CANTILO, JOSE LUIS 5509",
    district: "Villa Real"
  },
  {
    longitude: -58.51193753,
    latitude: -34.65553955,
    name: "CAÑADA DE GOMEZ 1645",
    district: "Mataderos"
  },
  {
    longitude: -58.50195021,
    latitude: -34.66374503,
    name: "CAÑADA DE GOMEZ 2495",
    district: "Mataderos"
  },
  {
    longitude: -58.50143611,
    latitude: -34.664167,
    name: "CAÑADA DE GOMEZ 2523",
    district: "Mataderos"
  },
  {
    longitude: -58.49952337,
    latitude: -34.66575807,
    name: "CAÑADA DE GOMEZ 2737",
    district: "Mataderos"
  },
  {
    longitude: -58.48492914,
    latitude: -34.67740382,
    name: "CAÑADA DE GOMEZ 4008",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48208411,
    latitude: -34.6799158,
    name: "CAÑADA DE GOMEZ 4245",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47802917,
    latitude: -34.68305415,
    name: "CAÑADA DE GOMEZ 4547",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47549519,
    latitude: -34.68497383,
    name: "CAÑADA DE GOMEZ 4759",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47434586,
    latitude: -34.68586121,
    name: "CAÑADA DE GOMEZ 4859",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47186973,
    latitude: -34.68773648,
    name: "CAÑADA DE GOMEZ 5075",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46853118,
    latitude: -34.69026298,
    name: "CAÑADA DE GOMEZ 5335",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.4671898,
    latitude: -34.69128316,
    name: "CAÑADA DE GOMEZ 5471",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46526145,
    latitude: -34.69273784,
    name: "CAÑADA DE GOMEZ 5651",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.48768085,
    latitude: -34.59052707,
    name: "CARACAS 3525",
    district: "Agronomia"
  },
  {
    longitude: -58.49318909,
    latitude: -34.58444593,
    name: "CARACAS 4389",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.4957933,
    latitude: -34.58157061,
    name: "CARACAS 4759",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.46018887,
    latitude: -34.57133415,
    name: "CARBAJAL 3210",
    district: "Belgrano"
  },
  {
    longitude: -58.50825725,
    latitude: -34.65812123,
    name: "CARDENAS, CNEL. AV. 2004",
    district: "Mataderos"
  },
  {
    longitude: -58.50227927,
    latitude: -34.66658694,
    name: "CARDENAS, CNEL. AV. 2652",
    district: "Mataderos"
  },
  {
    longitude: -58.52510781,
    latitude: -34.63946342,
    name: "CARHUE 31",
    district: "Liniers"
  },
  {
    longitude: -58.52465931,
    latitude: -34.64453412,
    name: "CARHUE 495",
    district: "Liniers"
  },
  {
    longitude: -58.52450719,
    latitude: -34.64626782,
    name: "CARHUE 665",
    district: "Liniers"
  },
  {
    longitude: -58.52432782,
    latitude: -34.64828691,
    name: "CARHUE 875",
    district: "Liniers"
  },
  {
    longitude: -58.51827454,
    latitude: -34.65437154,
    name: "CARHUE 1494",
    district: "Mataderos"
  },
  {
    longitude: -58.51001881,
    latitude: -34.66090649,
    name: "CARHUE 2180",
    district: "Mataderos"
  },
  {
    longitude: -58.50384572,
    latitude: -34.66603502,
    name: "CARHUE 2604",
    district: "Mataderos"
  },
  {
    longitude: -58.4990168,
    latitude: -34.67015473,
    name: "CARHUE 3095",
    district: "Mataderos"
  },
  {
    longitude: -58.49765526,
    latitude: -34.67128726,
    name: "CARHUE 3189",
    district: "Mataderos"
  },
  {
    longitude: -58.49505925,
    latitude: -34.67258361,
    name: "CARHUE 3340",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47497437,
    latitude: -34.60103035,
    name: "CARRANZA, ADOLFO P. 2026",
    district: "Paternal"
  },
  {
    longitude: -58.47631415,
    latitude: -34.6036059,
    name: "CARRANZA, ADOLFO P. 2260",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.47849487,
    latitude: -34.6048004,
    name: "CARRANZA, ADOLFO P. 2446",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.47986702,
    latitude: -34.60554713,
    name: "CARRANZA, ADOLFO P. 2554",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4826836,
    latitude: -34.60691649,
    name: "CARRANZA, ADOLFO P. 2760",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.44195664,
    latitude: -34.58561759,
    name: "CARRANZA, ANGEL JUSTINIANO 1354",
    district: "Palermo"
  },
  {
    longitude: -58.44016514,
    latitude: -34.58405329,
    name: "CARRANZA, ANGEL JUSTINIANO 1506",
    district: "Palermo"
  },
  {
    longitude: -58.43883473,
    latitude: -34.58289082,
    name: "CARRANZA, ANGEL JUSTINIANO 1648",
    district: "Palermo"
  },
  {
    longitude: -58.43715031,
    latitude: -34.58149067,
    name: "CARRANZA, ANGEL JUSTINIANO 1836",
    district: "Palermo"
  },
  {
    longitude: -58.43485242,
    latitude: -34.57940898,
    name: "CARRANZA, ANGEL JUSTINIANO 2084",
    district: "Palermo"
  },
  {
    longitude: -58.43329577,
    latitude: -34.57804867,
    name: "CARRANZA, ANGEL JUSTINIANO 2278",
    district: "Palermo"
  },
  {
    longitude: -58.43242233,
    latitude: -34.57728858,
    name: "CARRANZA, ANGEL JUSTINIANO 2352",
    district: "Palermo"
  },
  {
    longitude: -58.48997518,
    latitude: -34.58564513,
    name: "CARRIL, SALVADOR MARIA DEL AV. 2184",
    district: "Agronomia"
  },
  {
    longitude: -58.49114317,
    latitude: -34.58638462,
    name: "CARRIL, SALVADOR MARIA DEL AV. 2286",
    district: "Agronomia"
  },
  {
    longitude: -58.50731525,
    latitude: -34.59623004,
    name: "CARRIL, SALVADOR MARIA DEL AV. 3587",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51558734,
    latitude: -34.60133699,
    name: "CARRIL, SALVADOR MARIA DEL AV. 4295",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51618822,
    latitude: -34.60171108,
    name: "CARRIL, SALVADOR MARIA DEL AV. 4335",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52050929,
    latitude: -34.60436393,
    name: "CARRIL, SALVADOR MARIA DEL AV. 4685",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52261162,
    latitude: -34.60565724,
    name: "CARRIL, SALVADOR MARIA DEL AV. 4847",
    district: "Villa Devoto"
  },
  {
    longitude: -58.524865,
    latitude: -34.60715358,
    name: "CARRIL, SALVADOR MARIA DEL AV. 4989",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52688361,
    latitude: -34.6085268,
    name: "CARRIL, SALVADOR MARIA DEL AV. 5109",
    district: "Villa Devoto"
  },
  {
    longitude: -58.38307545,
    latitude: -34.63364989,
    name: "CARRILLO, RAMON, DR. 115",
    district: "Barracas"
  },
  {
    longitude: -58.37142934,
    latitude: -34.6265473,
    name: "CASEROS AV. 423",
    district: "San Telmo"
  },
  {
    longitude: -58.38332268,
    latitude: -34.63211084,
    name: "CASEROS AV. 1441",
    district: "Constitucion"
  },
  {
    longitude: -58.39338589,
    latitude: -34.63487243,
    name: "CASEROS AV. 2184",
    district: "Parque Patricios"
  },
  {
    longitude: -58.39702864,
    latitude: -34.6356407,
    name: "CASEROS AV. 2474",
    district: "Parque Patricios"
  },
  {
    longitude: -58.39948328,
    latitude: -34.6360871,
    name: "CASEROS AV. 2634",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40423009,
    latitude: -34.63695246,
    name: "CASEROS AV. 2938",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40741006,
    latitude: -34.63751599,
    name: "CASEROS AV. 3070",
    district: "Parque Patricios"
  },
  {
    longitude: -58.4084505,
    latitude: -34.63761483,
    name: "CASEROS AV. 3160",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41020073,
    latitude: -34.6379183,
    name: "CASEROS AV. 3242",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41740513,
    latitude: -34.63922413,
    name: "CASEROS AV. 3740",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42281318,
    latitude: -34.64014185,
    name: "CASEROS AV. 4140",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.48915094,
    latitude: -34.68064492,
    name: "CASTAÑARES AV. 6607",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49069386,
    latitude: -34.68204176,
    name: "CASTAÑARES AV. 6795",
    district: "Villa Lugano"
  },
  {
    longitude: -58.43813274,
    latitude: -34.55215722,
    name: "CASTAÑEDA 2020",
    district: "Belgrano"
  },
  {
    longitude: -58.44208859,
    latitude: -34.65666104,
    name: "CASTAÑON 2695",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44033911,
    latitude: -34.65793406,
    name: "CASTAÑON 2810",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43757507,
    latitude: -34.66012772,
    name: "CASTAÑON 3096",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43635507,
    latitude: -34.66120443,
    name: "CASTAÑON 3219",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43515187,
    latitude: -34.66206271,
    name: "CASTAÑON 3362",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43297185,
    latitude: -34.66500069,
    name: "CASTAÑON 3588",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43075053,
    latitude: -34.59912481,
    name: "CASTILLO 77",
    district: "Villa Crespo"
  },
  {
    longitude: -58.39677371,
    latitude: -34.63178463,
    name: "CASTILLO, CATULO 2360",
    district: "Parque Patricios"
  },
  {
    longitude: -58.41968192,
    latitude: -34.61980204,
    name: "CASTRO BARROS 689",
    district: "Almagro"
  },
  {
    longitude: -58.41924176,
    latitude: -34.62362503,
    name: "CASTRO BARROS 957",
    district: "Boedo"
  },
  {
    longitude: -58.41866907,
    latitude: -34.62676044,
    name: "CASTRO BARROS 1171",
    district: "Boedo"
  },
  {
    longitude: -58.41803702,
    latitude: -34.62947068,
    name: "CASTRO BARROS 1423",
    district: "Boedo"
  },
  {
    longitude: -58.41791874,
    latitude: -34.63382443,
    name: "CASTRO BARROS 1773",
    district: "Boedo"
  },
  {
    longitude: -58.41791913,
    latitude: -34.63641859,
    name: "CASTRO BARROS 2013",
    district: "Boedo"
  },
  {
    longitude: -58.42097632,
    latitude: -34.61196102,
    name: "CASTRO BARROS AV. 33",
    district: "Almagro"
  },
  {
    longitude: -58.42011089,
    latitude: -34.6161845,
    name: "CASTRO BARROS AV. 321",
    district: "Almagro"
  },
  {
    longitude: -58.49314833,
    latitude: -34.64283418,
    name: "CASTRO, EMILIO 4853",
    district: "Villa Luro"
  },
  {
    longitude: -58.49603075,
    latitude: -34.64323986,
    name: "CASTRO, EMILIO 5035",
    district: "Villa Luro"
  },
  {
    longitude: -58.51659447,
    latitude: -34.65257987,
    name: "CASTRO, EMILIO AV. 6912",
    district: "Mataderos"
  },
  {
    longitude: -58.51843251,
    latitude: -34.65328922,
    name: "CASTRO, EMILIO AV. 7105",
    district: "Liniers"
  },
  {
    longitude: -58.52052214,
    latitude: -34.65426041,
    name: "CASTRO, EMILIO AV. 7303",
    district: "Liniers"
  },
  {
    longitude: -58.44139808,
    latitude: -34.55633819,
    name: "CAZADORES 1884",
    district: "Belgrano"
  },
  {
    longitude: -58.44236048,
    latitude: -34.55521246,
    name: "CAZADORES 1988",
    district: "Belgrano"
  },
  {
    longitude: -58.4454384,
    latitude: -34.55160477,
    name: "CAZADORES 2370",
    district: "Belgrano"
  },
  {
    longitude: -58.49970487,
    latitude: -34.62918435,
    name: "CERVANTES 1004",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.40675311,
    latitude: -34.58094229,
    name: "CERVIÑO AV. 3381",
    district: "Palermo"
  },
  {
    longitude: -58.41049557,
    latitude: -34.57958335,
    name: "CERVIÑO AV. 3651",
    district: "Palermo"
  },
  {
    longitude: -58.41185729,
    latitude: -34.57917521,
    name: "CERVIÑO AV. 3751",
    district: "Palermo"
  },
  {
    longitude: -58.44724278,
    latitude: -34.56731966,
    name: "CESPEDES 2267",
    district: "Palermo"
  },
  {
    longitude: -58.45396914,
    latitude: -34.57768277,
    name: "CESPEDES 3352",
    district: "Colegiales"
  },
  {
    longitude: -58.45569812,
    latitude: -34.58068557,
    name: "CESPEDES 3620",
    district: "Chacarita"
  },
  {
    longitude: -58.4090833,
    latitude: -34.59288508,
    name: "CHARCAS 3053",
    district: "Recoleta"
  },
  {
    longitude: -58.41340223,
    latitude: -34.59084581,
    name: "CHARCAS 3371",
    district: "Palermo"
  },
  {
    longitude: -58.41438562,
    latitude: -34.59010245,
    name: "CHARCAS 3471",
    district: "Palermo"
  },
  {
    longitude: -58.41832599,
    latitude: -34.58720022,
    name: "CHARCAS 3877",
    district: "Palermo"
  },
  {
    longitude: -58.42956896,
    latitude: -34.57891704,
    name: "CHARCAS 5054",
    district: "Palermo"
  },
  {
    longitude: -58.43149917,
    latitude: -34.57746516,
    name: "CHARCAS 5246",
    district: "Palermo"
  },
  {
    longitude: -58.44652521,
    latitude: -34.58504529,
    name: "CHARLONE 74",
    district: "Chacarita"
  },
  {
    longitude: -58.44884758,
    latitude: -34.58404381,
    name: "CHARLONE 272",
    district: "Chacarita"
  },
  {
    longitude: -58.45410363,
    latitude: -34.5819473,
    name: "CHARLONE 744",
    district: "Chacarita"
  },
  {
    longitude: -58.4563984,
    latitude: -34.58127007,
    name: "CHARLONE 912",
    district: "Chacarita"
  },
  {
    longitude: -58.46376819,
    latitude: -34.5807034,
    name: "CHARLONE 1526",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46763294,
    latitude: -34.5805868,
    name: "CHARLONE 1848",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46877608,
    latitude: -34.58055238,
    name: "CHARLONE 1930",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.42747023,
    latitude: -34.65698726,
    name: "CHARRUA 3285",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42671523,
    latitude: -34.65753184,
    name: "CHARRUA 3367",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.48563278,
    latitude: -34.64470383,
    name: "CHASCOMUS 4322",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49507763,
    latitude: -34.65258039,
    name: "CHASCOMUS 5395",
    district: "Mataderos"
  },
  {
    longitude: -58.49660251,
    latitude: -34.65384251,
    name: "CHASCOMUS 5585",
    district: "Mataderos"
  },
  {
    longitude: -58.52487372,
    latitude: -34.64998441,
    name: "CHAVEZ, JORGE 7059",
    district: "Liniers"
  },
  {
    longitude: -58.52630207,
    latitude: -34.65011495,
    name: "CHAVEZ, JORGE 7180",
    district: "Liniers"
  },
  {
    longitude: -58.43316866,
    latitude: -34.57264125,
    name: "CHENAUT, INDALESIO, GRAL. AV. 1990",
    district: "Palermo"
  },
  {
    longitude: -58.42135347,
    latitude: -34.64178146,
    name: "CHICLANA AV. 4154",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.4244749,
    latitude: -34.64205395,
    name: "CHILAVERT, MARTINIANO, CORONEL 1151",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.39340936,
    latitude: -34.61703259,
    name: "CHILE 1908",
    district: "Balvanera"
  },
  {
    longitude: -58.39741155,
    latitude: -34.61734856,
    name: "CHILE 2192",
    district: "Balvanera"
  },
  {
    longitude: -58.39995911,
    latitude: -34.6175735,
    name: "CHILE 2392",
    district: "Balvanera"
  },
  {
    longitude: -58.40206494,
    latitude: -34.61778639,
    name: "CHILE 2582",
    district: "Balvanera"
  },
  {
    longitude: -58.4721908,
    latitude: -34.58860342,
    name: "CHORROARIN AV. 775",
    district: "Paternal"
  },
  {
    longitude: -58.39800134,
    latitude: -34.6411232,
    name: "CHUTRO, PEDRO, PROF., DR. 2691",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40489401,
    latitude: -34.6421755,
    name: "CHUTRO, PEDRO, PROF., DR. 3012",
    district: "Parque Patricios"
  },
  {
    longitude: -58.42671142,
    latitude: -34.64080671,
    name: "COBO AV. 734",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.43005562,
    latitude: -34.64137416,
    name: "COBO AV. 1008",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.43415948,
    latitude: -34.64203609,
    name: "COBO AV. 1367",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4372655,
    latitude: -34.64265548,
    name: "COBO AV. 1565",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44030777,
    latitude: -34.64327357,
    name: "COBO AV. 1781",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.39654906,
    latitude: -34.62433006,
    name: "COCHABAMBA 2235",
    district: "San Cristobal"
  },
  {
    longitude: -58.39997428,
    latitude: -34.62478404,
    name: "COCHABAMBA 2479",
    district: "San Cristobal"
  },
  {
    longitude: -58.40593224,
    latitude: -34.62575428,
    name: "COCHABAMBA 2929",
    district: "San Cristobal"
  },
  {
    longitude: -58.41001107,
    latitude: -34.62623635,
    name: "COCHABAMBA 3195",
    district: "San Cristobal"
  },
  {
    longitude: -58.50434435,
    latitude: -34.57754189,
    name: "COCHRANE 2587",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50663078,
    latitude: -34.57895378,
    name: "COCHRANE 2785",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50920468,
    latitude: -34.58054645,
    name: "COCHRANE 2995",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51406924,
    latitude: -34.58356039,
    name: "COCHRANE 3343",
    district: "Villa Devoto"
  },
  {
    longitude: -58.41844031,
    latitude: -34.61558981,
    name: "COLOMBRES 294",
    district: "Almagro"
  },
  {
    longitude: -58.41821335,
    latitude: -34.6180605,
    name: "COLOMBRES 450",
    district: "Almagro"
  },
  {
    longitude: -58.41795813,
    latitude: -34.62191634,
    name: "COLOMBRES 752",
    district: "Boedo"
  },
  {
    longitude: -58.41765496,
    latitude: -34.62524596,
    name: "COLOMBRES 970",
    district: "Boedo"
  },
  {
    longitude: -58.41687586,
    latitude: -34.62885251,
    name: "COLOMBRES 1280",
    district: "Boedo"
  },
  {
    longitude: -58.41654385,
    latitude: -34.63192323,
    name: "COLOMBRES 1540",
    district: "Boedo"
  },
  {
    longitude: -58.39793722,
    latitude: -34.63862575,
    name: "COLONIA AV. 233",
    district: "Parque Patricios"
  },
  {
    longitude: -58.3909536,
    latitude: -34.6336638,
    name: "COMBATE DE LOS POZOS 2171",
    district: "Parque Patricios"
  },
  {
    longitude: -58.47667285,
    latitude: -34.57850645,
    name: "COMBATIENTES DE MALVINAS AV. 3549",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46911975,
    latitude: -34.62506551,
    name: "CONDARCO 536",
    district: "Flores"
  },
  {
    longitude: -58.4701682,
    latitude: -34.62266464,
    name: "CONDARCO 780",
    district: "Flores"
  },
  {
    longitude: -58.49705162,
    latitude: -34.58811126,
    name: "CONDARCO 4264",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49824987,
    latitude: -34.58678798,
    name: "CONDARCO 4456",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49900162,
    latitude: -34.5859551,
    name: "CONDARCO 4570",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50102212,
    latitude: -34.58372998,
    name: "CONDARCO 4838",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50267041,
    latitude: -34.58191492,
    name: "CONDARCO 5064",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.44628367,
    latitude: -34.57973317,
    name: "CONDE 254",
    district: "Colegiales"
  },
  {
    longitude: -58.44844024,
    latitude: -34.57852084,
    name: "CONDE 598",
    district: "Colegiales"
  },
  {
    longitude: -58.45030183,
    latitude: -34.57761118,
    name: "CONDE 780",
    district: "Colegiales"
  },
  {
    longitude: -58.45414219,
    latitude: -34.57584767,
    name: "CONDE 1060",
    district: "Colegiales"
  },
  {
    longitude: -58.4553862,
    latitude: -34.57526282,
    name: "CONDE 1140",
    district: "Colegiales"
  },
  {
    longitude: -58.45619448,
    latitude: -34.57487748,
    name: "CONDE 1220",
    district: "Colegiales"
  },
  {
    longitude: -58.45820172,
    latitude: -34.57391747,
    name: "CONDE 1430",
    district: "Colegiales"
  },
  {
    longitude: -58.46782396,
    latitude: -34.56464924,
    name: "CONDE 2388",
    district: "Belgrano"
  },
  {
    longitude: -58.44426351,
    latitude: -34.57638191,
    name: "CONESA 367",
    district: "Colegiales"
  },
  {
    longitude: -58.44526024,
    latitude: -34.57584551,
    name: "CONESA 457",
    district: "Colegiales"
  },
  {
    longitude: -58.44824389,
    latitude: -34.57453122,
    name: "CONESA 743",
    district: "Colegiales"
  },
  {
    longitude: -58.45030162,
    latitude: -34.57352347,
    name: "CONESA 937",
    district: "Colegiales"
  },
  {
    longitude: -58.45394526,
    latitude: -34.57175993,
    name: "CONESA 1265",
    district: "Colegiales"
  },
  {
    longitude: -58.4688753,
    latitude: -34.55884246,
    name: "CONGRESO AV. 3086",
    district: "Belgrano"
  },
  {
    longitude: -58.39326095,
    latitude: -34.62530439,
    name: "CONSTITUCION 1991",
    district: "San Cristobal"
  },
  {
    longitude: -58.39555447,
    latitude: -34.62553043,
    name: "CONSTITUCION 2191",
    district: "San Cristobal"
  },
  {
    longitude: -58.39833542,
    latitude: -34.62592509,
    name: "CONSTITUCION 2360",
    district: "San Cristobal"
  },
  {
    longitude: -58.40209662,
    latitude: -34.62651973,
    name: "CONSTITUCION 2636",
    district: "San Cristobal"
  },
  {
    longitude: -58.40419973,
    latitude: -34.62685457,
    name: "CONSTITUCION 2816",
    district: "San Cristobal"
  },
  {
    longitude: -58.40807224,
    latitude: -34.62735586,
    name: "CONSTITUCION 3068",
    district: "San Cristobal"
  },
  {
    longitude: -58.41122177,
    latitude: -34.6275843,
    name: "CONSTITUCION 3258",
    district: "San Cristobal"
  },
  {
    longitude: -58.41512385,
    latitude: -34.6278696,
    name: "CONSTITUCION 3542",
    district: "Boedo"
  },
  {
    longitude: -58.44934389,
    latitude: -34.58252859,
    name: "CORDOBA 6355",
    district: "Chacarita"
  },
  {
    longitude: -58.45018087,
    latitude: -34.58221345,
    name: "CORDOBA 6437",
    district: "Chacarita"
  },
  {
    longitude: -58.39089676,
    latitude: -34.59960274,
    name: "CORDOBA AV. 1670",
    district: "San Nicolas"
  },
  {
    longitude: -58.40526173,
    latitude: -34.59795251,
    name: "CORDOBA AV. 2687",
    district: "Recoleta"
  },
  {
    longitude: -58.40742949,
    latitude: -34.59796855,
    name: "CORDOBA AV. 2831",
    district: "Recoleta"
  },
  {
    longitude: -58.41140571,
    latitude: -34.59794647,
    name: "CORDOBA AV. 3171",
    district: "Recoleta"
  },
  {
    longitude: -58.41516095,
    latitude: -34.59796504,
    name: "CORDOBA AV. 3432",
    district: "Almagro"
  },
  {
    longitude: -58.41668728,
    latitude: -34.59792647,
    name: "CORDOBA AV. 3544",
    district: "Almagro"
  },
  {
    longitude: -58.41949299,
    latitude: -34.59769043,
    name: "CORDOBA AV. 3751",
    district: "Palermo"
  },
  {
    longitude: -58.42275812,
    latitude: -34.59762647,
    name: "CORDOBA AV. 3967",
    district: "Palermo"
  },
  {
    longitude: -58.42541425,
    latitude: -34.59675027,
    name: "CORDOBA AV. 4151",
    district: "Palermo"
  },
  {
    longitude: -58.42763306,
    latitude: -34.59568674,
    name: "CORDOBA AV. 4365",
    district: "Palermo"
  },
  {
    longitude: -58.42951629,
    latitude: -34.59453057,
    name: "CORDOBA AV. 4557",
    district: "Palermo"
  },
  {
    longitude: -58.43984668,
    latitude: -34.58791604,
    name: "CORDOBA AV. 5528",
    district: "Chacarita"
  },
  {
    longitude: -58.44157415,
    latitude: -34.58677534,
    name: "CORDOBA AV. 5706",
    district: "Chacarita"
  },
  {
    longitude: -58.44391998,
    latitude: -34.58499815,
    name: "CORDOBA AV. 5945",
    district: "Palermo"
  },
  {
    longitude: -58.44815811,
    latitude: -34.58296518,
    name: "CORDOBA AV. 6249",
    district: "Chacarita"
  },
  {
    longitude: -58.3946579,
    latitude: -34.60456108,
    name: "CORRIENTES AV. 1962",
    district: "Balvanera"
  },
  {
    longitude: -58.40688091,
    latitude: -34.60446803,
    name: "CORRIENTES AV. 2914",
    district: "Balvanera"
  },
  {
    longitude: -58.40922435,
    latitude: -34.60417735,
    name: "CORRIENTES AV. 3108",
    district: "Balvanera"
  },
  {
    longitude: -58.41223395,
    latitude: -34.60418043,
    name: "CORRIENTES AV. 3326",
    district: "Balvanera"
  },
  {
    longitude: -58.41513389,
    latitude: -34.60398621,
    name: "CORRIENTES AV. 3564",
    district: "Almagro"
  },
  {
    longitude: -58.41785864,
    latitude: -34.60356918,
    name: "CORRIENTES AV. 3790",
    district: "Almagro"
  },
  {
    longitude: -58.42057584,
    latitude: -34.60329627,
    name: "CORRIENTES AV. 3974",
    district: "Almagro"
  },
  {
    longitude: -58.42323965,
    latitude: -34.60303431,
    name: "CORRIENTES AV. 4144",
    district: "Almagro"
  },
  {
    longitude: -58.42647671,
    latitude: -34.60271035,
    name: "CORRIENTES AV. 4364",
    district: "Almagro"
  },
  {
    longitude: -58.4291341,
    latitude: -34.60244547,
    name: "CORRIENTES AV. 4534",
    district: "Almagro"
  },
  {
    longitude: -58.43782206,
    latitude: -34.60009488,
    name: "CORRIENTES AV. 5141",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44006871,
    latitude: -34.59856553,
    name: "CORRIENTES AV. 5353",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44277312,
    latitude: -34.59605888,
    name: "CORRIENTES AV. 5633",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44463089,
    latitude: -34.59433388,
    name: "CORRIENTES AV. 5847",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45194595,
    latitude: -34.58810375,
    name: "CORRIENTES AV. 6647",
    district: "Chacarita"
  },
  {
    longitude: -58.45323242,
    latitude: -34.58763632,
    name: "CORRIENTES AV. 6747",
    district: "Chacarita"
  },
  {
    longitude: -58.48567673,
    latitude: -34.59657385,
    name: "CORTAZAR, JULIO 3577",
    district: "Agronomia"
  },
  {
    longitude: -58.48663355,
    latitude: -34.59655806,
    name: "CORTAZAR, JULIO 3612",
    district: "Agronomia"
  },
  {
    longitude: -58.51719997,
    latitude: -34.62627874,
    name: "CORTINA 1566",
    district: "Monte Castro"
  },
  {
    longitude: -58.50584184,
    latitude: -34.64176255,
    name: "CORVALAN 314",
    district: "Villa Luro"
  },
  {
    longitude: -58.50419922,
    latitude: -34.64300077,
    name: "CORVALAN 458",
    district: "Villa Luro"
  },
  {
    longitude: -58.50242031,
    latitude: -34.64435186,
    name: "CORVALAN 604",
    district: "Villa Luro"
  },
  {
    longitude: -58.50102461,
    latitude: -34.64550134,
    name: "CORVALAN 762",
    district: "Mataderos"
  },
  {
    longitude: -58.49719797,
    latitude: -34.64852014,
    name: "CORVALAN 1096",
    district: "Mataderos"
  },
  {
    longitude: -58.4951681,
    latitude: -34.65008244,
    name: "CORVALAN 1248",
    district: "Mataderos"
  },
  {
    longitude: -58.49270983,
    latitude: -34.65198645,
    name: "CORVALAN 1494",
    district: "Mataderos"
  },
  {
    longitude: -58.49079562,
    latitude: -34.65348638,
    name: "CORVALAN 1680",
    district: "Mataderos"
  },
  {
    longitude: -58.48489666,
    latitude: -34.65808848,
    name: "CORVALAN 2176",
    district: "Mataderos"
  },
  {
    longitude: -58.48121731,
    latitude: -34.66095011,
    name: "CORVALAN 2506",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47927703,
    latitude: -34.66246545,
    name: "CORVALAN 2684",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47180108,
    latitude: -34.66841688,
    name: "CORVALAN 3315",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46868397,
    latitude: -34.67083739,
    name: "CORVALAN 3597",
    district: "Villa Lugano"
  },
  {
    longitude: -58.52357525,
    latitude: -34.6399521,
    name: "COSQUIN 82",
    district: "Liniers"
  },
  {
    longitude: -58.52334139,
    latitude: -34.64205217,
    name: "COSQUIN 242",
    district: "Liniers"
  },
  {
    longitude: -58.52306808,
    latitude: -34.64447912,
    name: "COSQUIN 496",
    district: "Liniers"
  },
  {
    longitude: -58.51079606,
    latitude: -34.65759778,
    name: "COSQUIN 1878",
    district: "Mataderos"
  },
  {
    longitude: -58.50793732,
    latitude: -34.65995974,
    name: "COSQUIN 2106",
    district: "Mataderos"
  },
  {
    longitude: -58.50045881,
    latitude: -34.66620201,
    name: "COSQUIN 2706",
    district: "Mataderos"
  },
  {
    longitude: -58.48553068,
    latitude: -34.67837692,
    name: "COSQUIN 4047",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48314772,
    latitude: -34.68021757,
    name: "COSQUIN 4218",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47601134,
    latitude: -34.68574578,
    name: "COSQUIN 4772",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47344936,
    latitude: -34.68768598,
    name: "COSQUIN 4996",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47148024,
    latitude: -34.68917664,
    name: "COSQUIN 5166",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46870438,
    latitude: -34.69128086,
    name: "COSQUIN 5394",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46647764,
    latitude: -34.69301721,
    name: "COSQUIN 5580",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.42132067,
    latitude: -34.59163531,
    name: "COSTA RICA 4138",
    district: "Palermo"
  },
  {
    longitude: -58.42307974,
    latitude: -34.59097821,
    name: "COSTA RICA 4286",
    district: "Palermo"
  },
  {
    longitude: -58.43432937,
    latitude: -34.58300299,
    name: "COSTA RICA 5566",
    district: "Palermo"
  },
  {
    longitude: -58.43628826,
    latitude: -34.58147537,
    name: "COSTA RICA 5758",
    district: "Palermo"
  },
  {
    longitude: -58.43738327,
    latitude: -34.58062146,
    name: "COSTA RICA 5870",
    district: "Palermo"
  },
  {
    longitude: -58.44218836,
    latitude: -34.57657042,
    name: "CRAMER 290",
    district: "Colegiales"
  },
  {
    longitude: -58.45011238,
    latitude: -34.57237388,
    name: "CRAMER 998",
    district: "Colegiales"
  },
  {
    longitude: -58.45043517,
    latitude: -34.57223602,
    name: "CRAMER 1002",
    district: "Colegiales"
  },
  {
    longitude: -58.45927031,
    latitude: -34.56695801,
    name: "CRAMER AV. 1857",
    district: "Belgrano"
  },
  {
    longitude: -58.45991267,
    latitude: -34.56621667,
    name: "CRAMER AV. 1939",
    district: "Belgrano"
  },
  {
    longitude: -58.46080077,
    latitude: -34.56519331,
    name: "CRAMER AV. 2049",
    district: "Belgrano"
  },
  {
    longitude: -58.46332824,
    latitude: -34.56227638,
    name: "CRAMER AV. 2361",
    district: "Belgrano"
  },
  {
    longitude: -58.4656386,
    latitude: -34.55978134,
    name: "CRAMER AV. 2648",
    district: "Belgrano"
  },
  {
    longitude: -58.46751228,
    latitude: -34.55740425,
    name: "CRAMER AV. 2947",
    district: "Nuñez"
  },
  {
    longitude: -58.47008092,
    latitude: -34.55458889,
    name: "CRAMER AV. 3255",
    district: "Nuñez"
  },
  {
    longitude: -58.43034897,
    latitude: -34.6515152,
    name: "CRESPO 2793",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42453671,
    latitude: -34.65566601,
    name: "CRESPO 3389",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.45220904,
    latitude: -34.56392604,
    name: "CUBA 1780",
    district: "Belgrano"
  },
  {
    longitude: -58.45365781,
    latitude: -34.56224491,
    name: "CUBA 1960",
    district: "Belgrano"
  },
  {
    longitude: -58.50923098,
    latitude: -34.59415514,
    name: "CUBAS, JOSE 3585",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50936805,
    latitude: -34.59417925,
    name: "CUBAS, JOSE 3677",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51486237,
    latitude: -34.59758598,
    name: "CUBAS, JOSE 4081",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51735267,
    latitude: -34.59912105,
    name: "CUBAS, JOSE 4287",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51950007,
    latitude: -34.60044662,
    name: "CUBAS, JOSE 4445",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45509853,
    latitude: -34.60375978,
    name: "CUCHA CUCHA 1692",
    district: "Villa Crespo"
  },
  {
    longitude: -58.50310404,
    latitude: -34.59215235,
    name: "CUENCA 4234",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50451232,
    latitude: -34.59059652,
    name: "CUENCA 4466",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50799175,
    latitude: -34.58676586,
    name: "CUENCA 4926",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50952637,
    latitude: -34.58507489,
    name: "CUENCA 5146",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51091168,
    latitude: -34.58339066,
    name: "CUENCA 5383",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51158477,
    latitude: -34.58264932,
    name: "CUENCA 5465",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.43496127,
    latitude: -34.66047425,
    name: "CULPINA 3371",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43447944,
    latitude: -34.66093943,
    name: "CULPINA 3407",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43243172,
    latitude: -34.66358194,
    name: "CULPINA 3595",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43221514,
    latitude: -34.66384764,
    name: "CULPINA 3615",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43060932,
    latitude: -34.64453521,
    name: "DARACT AV. 2265",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.44547012,
    latitude: -34.59426606,
    name: "DARWIN 582",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44344075,
    latitude: -34.59264805,
    name: "DARWIN 810",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44116543,
    latitude: -34.59086418,
    name: "DARWIN 1050",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43757151,
    latitude: -34.58868558,
    name: "DARWIN 1347",
    district: "Palermo"
  },
  {
    longitude: -58.48969559,
    latitude: -34.66605424,
    name: "DE LA ROSA, JOSE I., DR. 6190",
    district: "Villa Lugano"
  },
  {
    longitude: -58.52118984,
    latitude: -34.64046186,
    name: "DE LA TORRE, LISANDRO 121",
    district: "Liniers"
  },
  {
    longitude: -58.52076831,
    latitude: -34.6433458,
    name: "DE LA TORRE, LISANDRO 395",
    district: "Liniers"
  },
  {
    longitude: -58.52053959,
    latitude: -34.64488489,
    name: "DE LA TORRE, LISANDRO 533",
    district: "Liniers"
  },
  {
    longitude: -58.48155228,
    latitude: -34.67757552,
    name: "DE LA TORRE, LISANDRO 4072",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47405617,
    latitude: -34.68342661,
    name: "DE LA TORRE, LISANDRO 4640",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47299269,
    latitude: -34.68429625,
    name: "DE LA TORRE, LISANDRO 4740",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47047914,
    latitude: -34.68624972,
    name: "DE LA TORRE, LISANDRO 4954",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46777322,
    latitude: -34.68831685,
    name: "DE LA TORRE, LISANDRO 5190",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46592842,
    latitude: -34.68975681,
    name: "DE LA TORRE, LISANDRO 5350",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46374892,
    latitude: -34.69151327,
    name: "DE LA TORRE, LISANDRO 5550",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.49070494,
    latitude: -34.58307966,
    name: "DE LOS CONSTITUYENTES AV. 4379",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49199436,
    latitude: -34.58196548,
    name: "DE LOS CONSTITUYENTES AV. 4531",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49293126,
    latitude: -34.58118926,
    name: "DE LOS CONSTITUYENTES AV. 4663",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.50393567,
    latitude: -34.57287821,
    name: "DE LOS CONSTITUYENTES AV. 5895",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.50586419,
    latitude: -34.57175813,
    name: "DE LOS CONSTITUYENTES AV. 6047",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.50258993,
    latitude: -34.6647473,
    name: "DE LOS CORRALES AV. 6810",
    district: "Mataderos"
  },
  {
    longitude: -58.50564318,
    latitude: -34.66697932,
    name: "DE LOS CORRALES AV. 7187",
    district: "Mataderos"
  },
  {
    longitude: -58.45844075,
    latitude: -34.57051985,
    name: "DE LOS INCAS AV. 3082",
    district: "Colegiales"
  },
  {
    longitude: -58.45997562,
    latitude: -34.57202298,
    name: "DE LOS INCAS AV. 3248",
    district: "Colegiales"
  },
  {
    longitude: -58.46110033,
    latitude: -34.57310445,
    name: "DE LOS INCAS AV. 3350",
    district: "Colegiales"
  },
  {
    longitude: -58.47605999,
    latitude: -34.58250411,
    name: "DE LOS INCAS AV. 4649",
    district: "Parque Chas"
  },
  {
    longitude: -58.47844568,
    latitude: -34.5843054,
    name: "DE LOS INCAS AV. 4851",
    district: "Parque Chas"
  },
  {
    longitude: -58.48381223,
    latitude: -34.5883509,
    name: "DE LOS INCAS AV. 5435",
    district: "Parque Chas"
  },
  {
    longitude: -58.40429554,
    latitude: -34.63470834,
    name: "DEAN FUNES 2021",
    district: "Parque Patricios"
  },
  {
    longitude: -58.4662952,
    latitude: -34.53768657,
    name: "DEHEZA 1631",
    district: "Nuñez"
  },
  {
    longitude: -58.46862807,
    latitude: -34.53895963,
    name: "DEHEZA 1890",
    district: "Nuñez"
  },
  {
    longitude: -58.46764366,
    latitude: -34.59008704,
    name: "DEL CAMPO AV. 1346",
    district: "Paternal"
  },
  {
    longitude: -58.46980427,
    latitude: -34.58815889,
    name: "DEL CAMPO AV. 1553",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.51255026,
    latitude: -34.58082994,
    name: "DEL FOMENTISTA AV. 3163",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.38454742,
    latitude: -34.58747522,
    name: "DEL LIBERTADOR AV. 848",
    district: "Recoleta"
  },
  {
    longitude: -58.38817779,
    latitude: -34.58564242,
    name: "DEL LIBERTADOR AV. 1154",
    district: "Recoleta"
  },
  {
    longitude: -58.3944132,
    latitude: -34.58377877,
    name: "DEL LIBERTADOR AV. 1465",
    district: "Recoleta"
  },
  {
    longitude: -58.40426097,
    latitude: -34.58107245,
    name: "DEL LIBERTADOR AV. 2250",
    district: "Palermo"
  },
  {
    longitude: -58.40511665,
    latitude: -34.5803865,
    name: "DEL LIBERTADOR AV. 2330",
    district: "Palermo"
  },
  {
    longitude: -58.40834314,
    latitude: -34.57821062,
    name: "DEL LIBERTADOR AV. 2764",
    district: "Palermo"
  },
  {
    longitude: -58.41040782,
    latitude: -34.57729006,
    name: "DEL LIBERTADOR AV. 2920",
    district: "Palermo"
  },
  {
    longitude: -58.41230451,
    latitude: -34.57643059,
    name: "DEL LIBERTADOR AV. 3128",
    district: "Palermo"
  },
  {
    longitude: -58.419762,
    latitude: -34.57297939,
    name: "DEL LIBERTADOR AV. 3622",
    district: "Palermo"
  },
  {
    longitude: -58.42998554,
    latitude: -34.56770855,
    name: "DEL LIBERTADOR AV. 4370",
    district: "Palermo"
  },
  {
    longitude: -58.43206885,
    latitude: -34.56652099,
    name: "DEL LIBERTADOR AV. 4580",
    district: "Palermo"
  },
  {
    longitude: -58.43485322,
    latitude: -34.56485073,
    name: "DEL LIBERTADOR AV. 4820",
    district: "Palermo"
  },
  {
    longitude: -58.4377967,
    latitude: -34.56326048,
    name: "DEL LIBERTADOR AV. 5064",
    district: "Palermo"
  },
  {
    longitude: -58.43918576,
    latitude: -34.56302149,
    name: "DEL LIBERTADOR AV. 5154",
    district: "Palermo"
  },
  {
    longitude: -58.44114547,
    latitude: -34.5626348,
    name: "DEL LIBERTADOR AV. 5282",
    district: "Palermo"
  },
  {
    longitude: -58.44197518,
    latitude: -34.5624611,
    name: "DEL LIBERTADOR AV. 5324",
    district: "Belgrano"
  },
  {
    longitude: -58.44556083,
    latitude: -34.55896349,
    name: "DEL LIBERTADOR AV. 5755",
    district: "Belgrano"
  },
  {
    longitude: -58.44746017,
    latitude: -34.55714903,
    name: "DEL LIBERTADOR AV. 5954",
    district: "Belgrano"
  },
  {
    longitude: -58.44976728,
    latitude: -34.55446714,
    name: "DEL LIBERTADOR AV. 6250",
    district: "Belgrano"
  },
  {
    longitude: -58.45007803,
    latitude: -34.55371689,
    name: "DEL LIBERTADOR AV. 6305",
    district: "Belgrano"
  },
  {
    longitude: -58.4513277,
    latitude: -34.55265123,
    name: "DEL LIBERTADOR AV. 6444",
    district: "Belgrano"
  },
  {
    longitude: -58.45208226,
    latitude: -34.55177648,
    name: "DEL LIBERTADOR AV. 6550",
    district: "Belgrano"
  },
  {
    longitude: -58.4527871,
    latitude: -34.55094859,
    name: "DEL LIBERTADOR AV. 6662",
    district: "Belgrano"
  },
  {
    longitude: -58.4546509,
    latitude: -34.54914246,
    name: "DEL LIBERTADOR AV. 6850",
    district: "Nuñez"
  },
  {
    longitude: -58.45793652,
    latitude: -34.54637927,
    name: "DEL LIBERTADOR AV. 7264",
    district: "Nuñez"
  },
  {
    longitude: -58.46278434,
    latitude: -34.54201669,
    name: "DEL LIBERTADOR AV. 7904",
    district: "Nuñez"
  },
  {
    longitude: -58.46370443,
    latitude: -34.54112322,
    name: "DEL LIBERTADOR AV. 8008",
    district: "Nuñez"
  },
  {
    longitude: -58.46466686,
    latitude: -34.53961661,
    name: "DEL LIBERTADOR AV. 8240",
    district: "Nuñez"
  },
  {
    longitude: -58.46506198,
    latitude: -34.5389689,
    name: "DEL LIBERTADOR AV. 8322",
    district: "Nuñez"
  },
  {
    longitude: -58.46613073,
    latitude: -34.53724037,
    name: "DEL LIBERTADOR AV. 8560",
    district: "Nuñez"
  },
  {
    longitude: -58.45838281,
    latitude: -34.57708326,
    name: "DELGADO 1172",
    district: "Colegiales"
  },
  {
    longitude: -58.47576513,
    latitude: -34.67145046,
    name: "DELLEPIANE, LUIS, TTE. GRAL. 5396",
    district: "Villa Lugano"
  },
  {
    longitude: -58.41785853,
    latitude: -34.60845489,
    name: "DIAZ VELEZ AV. 3623",
    district: "Almagro"
  },
  {
    longitude: -58.42244265,
    latitude: -34.60866954,
    name: "DIAZ VELEZ AV. 3974",
    district: "Almagro"
  },
  {
    longitude: -58.42542513,
    latitude: -34.6087291,
    name: "DIAZ VELEZ AV. 4144",
    district: "Almagro"
  },
  {
    longitude: -58.42810861,
    latitude: -34.60879621,
    name: "DIAZ VELEZ AV. 4320",
    district: "Almagro"
  },
  {
    longitude: -58.43232911,
    latitude: -34.60882575,
    name: "DIAZ VELEZ AV. 4654",
    district: "Caballito"
  },
  {
    longitude: -58.4376139,
    latitude: -34.60871295,
    name: "DIAZ VELEZ AV. 5019",
    district: "Caballito"
  },
  {
    longitude: -58.44326081,
    latitude: -34.60818659,
    name: "DIAZ VELEZ AV. 5484",
    district: "Caballito"
  },
  {
    longitude: -58.425444,
    latitude: -34.63492119,
    name: "DIAZ, AVELINO 333",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42822832,
    latitude: -34.63538034,
    name: "DIAZ, AVELINO 551",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43004982,
    latitude: -34.63568311,
    name: "DIAZ, AVELINO 715",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43402466,
    latitude: -34.63628651,
    name: "DIAZ, AVELINO 1027",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43875583,
    latitude: -34.63716056,
    name: "DIAZ, AVELINO 1336",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44211917,
    latitude: -34.63799508,
    name: "DIAZ, AVELINO 1592",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44405306,
    latitude: -34.63838972,
    name: "DIAZ, AVELINO 1736",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44582023,
    latitude: -34.63937768,
    name: "DIAZ, AVELINO 1946",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44761433,
    latitude: -34.64098605,
    name: "DIAZ, AVELINO 2144",
    district: "Flores"
  },
  {
    longitude: -58.44996717,
    latitude: -34.64305068,
    name: "DIAZ, AVELINO 2348",
    district: "Flores"
  },
  {
    longitude: -58.4519458,
    latitude: -34.64474622,
    name: "DIAZ, AVELINO 2552",
    district: "Flores"
  },
  {
    longitude: -58.46573482,
    latitude: -34.6078624,
    name: "DIAZ, CESAR, GRAL. 1836",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46876909,
    latitude: -34.60908562,
    name: "DIAZ, CESAR, GRAL. 2080",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47095462,
    latitude: -34.61022527,
    name: "DIAZ, CESAR, GRAL. 2246",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47435525,
    latitude: -34.61201851,
    name: "DIAZ, CESAR, GRAL. 2524",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47664953,
    latitude: -34.61323216,
    name: "DIAZ, CESAR, GRAL. 2710",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47995975,
    latitude: -34.61497944,
    name: "DIAZ, CESAR, GRAL. 2974",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48087731,
    latitude: -34.61545969,
    name: "DIAZ, CESAR, GRAL. 3040",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48323545,
    latitude: -34.61670322,
    name: "DIAZ, CESAR, GRAL. 3232",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48632661,
    latitude: -34.61849672,
    name: "DIAZ, CESAR, GRAL. 3554",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49166801,
    latitude: -34.62302216,
    name: "DIAZ, CESAR, GRAL. 4170",
    district: "Floresta"
  },
  {
    longitude: -58.49587733,
    latitude: -34.62609702,
    name: "DIAZ, CESAR, GRAL. 4612",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49902261,
    latitude: -34.62871871,
    name: "DIAZ, CESAR, GRAL. 5057",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49999217,
    latitude: -34.62956588,
    name: "DIAZ, CESAR, GRAL. 5125",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50291793,
    latitude: -34.63214382,
    name: "DIAZ, CESAR, GRAL. 5391",
    district: "Villa Luro"
  },
  {
    longitude: -58.50376954,
    latitude: -34.63291975,
    name: "DIAZ, CESAR, GRAL. 5477",
    district: "Villa Luro"
  },
  {
    longitude: -58.41373008,
    latitude: -34.59319532,
    name: "DIAZ, CNEL. AV. 1492",
    district: "Palermo"
  },
  {
    longitude: -58.41260841,
    latitude: -34.59187217,
    name: "DIAZ, CNEL. AV. 1668",
    district: "Palermo"
  },
  {
    longitude: -58.41083538,
    latitude: -34.58981554,
    name: "DIAZ, CNEL. AV. 1836",
    district: "Palermo"
  },
  {
    longitude: -58.40959094,
    latitude: -34.58819497,
    name: "DIAZ, CNEL. AV. 1992",
    district: "Palermo"
  },
  {
    longitude: -58.40845445,
    latitude: -34.5865775,
    name: "DIAZ, CNEL. AV. 2170",
    district: "Palermo"
  },
  {
    longitude: -58.40745057,
    latitude: -34.58530618,
    name: "DIAZ, CNEL. AV. 2334",
    district: "Recoleta"
  },
  {
    longitude: -58.40584901,
    latitude: -34.58265434,
    name: "DIAZ, CNEL. AV. 2572",
    district: "Palermo"
  },
  {
    longitude: -58.46292619,
    latitude: -34.59826425,
    name: "DICKMAN, ADOLFO, DR. 1095",
    district: "Paternal"
  },
  {
    longitude: -58.46349175,
    latitude: -34.60006163,
    name: "DICKMAN, ADOLFO, DR. 1247",
    district: "Paternal"
  },
  {
    longitude: -58.46424204,
    latitude: -34.60245832,
    name: "DICKMAN, ADOLFO, DR. 1463",
    district: "Paternal"
  },
  {
    longitude: -58.42878499,
    latitude: -34.62736243,
    name: "DIRECTORIO AV. 150",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43305279,
    latitude: -34.62798053,
    name: "DIRECTORIO AV. 448",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4364659,
    latitude: -34.6284806,
    name: "DIRECTORIO AV. 656",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4397587,
    latitude: -34.6289598,
    name: "DIRECTORIO AV. 906",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44551815,
    latitude: -34.62981721,
    name: "DIRECTORIO AV. 1260",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44780743,
    latitude: -34.63016001,
    name: "DIRECTORIO AV. 1480",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45111383,
    latitude: -34.63065112,
    name: "DIRECTORIO AV. 1680",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45213368,
    latitude: -34.63089246,
    name: "DIRECTORIO AV. 1734",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45454259,
    latitude: -34.63163721,
    name: "DIRECTORIO AV. 1908",
    district: "Flores"
  },
  {
    longitude: -58.45994782,
    latitude: -34.63333998,
    name: "DIRECTORIO AV. 2356",
    district: "Flores"
  },
  {
    longitude: -58.46281497,
    latitude: -34.63421093,
    name: "DIRECTORIO AV. 2560",
    district: "Flores"
  },
  {
    longitude: -58.46545078,
    latitude: -34.63499845,
    name: "DIRECTORIO AV. 2748",
    district: "Flores"
  },
  {
    longitude: -58.46816985,
    latitude: -34.63581173,
    name: "DIRECTORIO AV. 2950",
    district: "Flores"
  },
  {
    longitude: -58.47051659,
    latitude: -34.63651301,
    name: "DIRECTORIO AV. 3122",
    district: "Flores"
  },
  {
    longitude: -58.47216097,
    latitude: -34.63700257,
    name: "DIRECTORIO AV. 3288",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47394746,
    latitude: -34.63772259,
    name: "DIRECTORIO AV. 3458",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4767888,
    latitude: -34.63948089,
    name: "DIRECTORIO AV. 3764",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4946538,
    latitude: -34.65379633,
    name: "DIRECTORIO AV. 5461",
    district: "Mataderos"
  },
  {
    longitude: -58.49562504,
    latitude: -34.65460344,
    name: "DIRECTORIO AV. 5591",
    district: "Mataderos"
  },
  {
    longitude: -58.4974253,
    latitude: -34.65610671,
    name: "DIRECTORIO AV. 5807",
    district: "Mataderos"
  },
  {
    longitude: -58.50410017,
    latitude: -34.66088886,
    name: "DIRECTORIO AV. 6621",
    district: "Mataderos"
  },
  {
    longitude: -58.50496612,
    latitude: -34.66160944,
    name: "DIRECTORIO AV. 6719",
    district: "Mataderos"
  },
  {
    longitude: -58.50771783,
    latitude: -34.66390153,
    name: "DIRECTORIO AV. 7091",
    district: "Mataderos"
  },
  {
    longitude: -58.50850412,
    latitude: -34.66455667,
    name: "DIRECTORIO AV. 7185",
    district: "Mataderos"
  },
  {
    longitude: -58.50978317,
    latitude: -34.66561815,
    name: "DIRECTORIO AV. 7321",
    district: "Mataderos"
  },
  {
    longitude: -58.47594438,
    latitude: -34.63457015,
    name: "DOLORES 163",
    district: "Floresta"
  },
  {
    longitude: -58.3616138,
    latitude: -34.64031034,
    name: "DON PEDRO DE MENDOZA AV. 2013",
    district: "Boca"
  },
  {
    longitude: -58.3580421,
    latitude: -34.64482433,
    name: "DON PEDRO DE MENDOZA AV. 2661",
    district: "Boca"
  },
  {
    longitude: -58.47263022,
    latitude: -34.57576682,
    name: "DONADO 1788",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.44300762,
    latitude: -34.58132484,
    name: "DORREGO 1782",
    district: "Colegiales"
  },
  {
    longitude: -58.44204466,
    latitude: -34.58043225,
    name: "DORREGO 1876",
    district: "Colegiales"
  },
  {
    longitude: -58.44110915,
    latitude: -34.57956035,
    name: "DORREGO 1946",
    district: "Colegiales"
  },
  {
    longitude: -58.4390231,
    latitude: -34.57770983,
    name: "DORREGO 2162",
    district: "Palermo"
  },
  {
    longitude: -58.43828772,
    latitude: -34.57713896,
    name: "DORREGO 2250",
    district: "Palermo"
  },
  {
    longitude: -58.45191519,
    latitude: -34.59525162,
    name: "DORREGO AV. 392",
    district: "Chacarita"
  },
  {
    longitude: -58.44913437,
    latitude: -34.59296489,
    name: "DORREGO AV. 684",
    district: "Chacarita"
  },
  {
    longitude: -58.44474263,
    latitude: -34.58409279,
    name: "DORREGO AV. 1524",
    district: "Chacarita"
  },
  {
    longitude: -58.43361038,
    latitude: -34.57427998,
    name: "DORREGO AV. 2657",
    district: "Palermo"
  },
  {
    longitude: -58.43074791,
    latitude: -34.57424753,
    name: "DORREGO AV. 2851",
    district: "Palermo"
  },
  {
    longitude: -58.43681179,
    latitude: -34.6019761,
    name: "DRAGO, LUIS MARIA 234",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43787025,
    latitude: -34.60089822,
    name: "DRAGO, LUIS MARIA 366",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44150422,
    latitude: -34.5523026,
    name: "DRAGONES 2140",
    district: "Belgrano"
  },
  {
    longitude: -58.44368695,
    latitude: -34.5497607,
    name: "DRAGONES 2414",
    district: "Belgrano"
  },
  {
    longitude: -58.4544326,
    latitude: -34.59356523,
    name: "DUMONT, SANTOS 4526",
    district: "Chacarita"
  },
  {
    longitude: -58.45778397,
    latitude: -34.64241819,
    name: "ECHEANDIA 2730",
    district: "Flores"
  },
  {
    longitude: -58.46943156,
    latitude: -34.65214711,
    name: "ECHEANDIA 3818",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47307912,
    latitude: -34.65558715,
    name: "ECHEANDIA 4218",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49597788,
    latitude: -34.67629788,
    name: "ECHEANDIA 6835",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4969915,
    latitude: -34.67731922,
    name: "ECHEANDIA 6990",
    district: "Villa Lugano"
  },
  {
    longitude: -58.43851682,
    latitude: -34.5527157,
    name: "ECHEVERRIA 760",
    district: "Belgrano"
  },
  {
    longitude: -58.43994252,
    latitude: -34.55355927,
    name: "ECHEVERRIA 876",
    district: "Belgrano"
  },
  {
    longitude: -58.44109635,
    latitude: -34.5542415,
    name: "ECHEVERRIA 980",
    district: "Belgrano"
  },
  {
    longitude: -58.44416831,
    latitude: -34.55607513,
    name: "ECHEVERRIA 1262",
    district: "Belgrano"
  },
  {
    longitude: -58.45079903,
    latitude: -34.56002704,
    name: "ECHEVERRIA 1864",
    district: "Belgrano"
  },
  {
    longitude: -58.45185857,
    latitude: -34.56065187,
    name: "ECHEVERRIA 1974",
    district: "Belgrano"
  },
  {
    longitude: -58.46088354,
    latitude: -34.56597753,
    name: "ECHEVERRIA 2946",
    district: "Belgrano"
  },
  {
    longitude: -58.46597602,
    latitude: -34.56900063,
    name: "ECHEVERRIA 3434",
    district: "Belgrano"
  },
  {
    longitude: -58.46712333,
    latitude: -34.56967806,
    name: "ECHEVERRIA 3526",
    district: "Belgrano"
  },
  {
    longitude: -58.41654131,
    latitude: -34.59270052,
    name: "EL SALVADOR 3819",
    district: "Palermo"
  },
  {
    longitude: -58.42159252,
    latitude: -34.59273365,
    name: "EL SALVADOR 4147",
    district: "Palermo"
  },
  {
    longitude: -58.4239341,
    latitude: -34.59161436,
    name: "EL SALVADOR 4389",
    district: "Palermo"
  },
  {
    longitude: -58.43486484,
    latitude: -34.58374596,
    name: "EL SALVADOR 5543",
    district: "Palermo"
  },
  {
    longitude: -58.43679638,
    latitude: -34.58213835,
    name: "EL SALVADOR 5737",
    district: "Palermo"
  },
  {
    longitude: -58.44022979,
    latitude: -34.57928593,
    name: "EL SALVADOR 6083",
    district: "Palermo"
  },
  {
    longitude: -58.46660899,
    latitude: -34.59150996,
    name: "ELCANO 4760",
    district: "Paternal"
  },
  {
    longitude: -58.46700927,
    latitude: -34.59177302,
    name: "ELCANO 4804",
    district: "Paternal"
  },
  {
    longitude: -58.46979026,
    latitude: -34.59360283,
    name: "ELCANO 5076",
    district: "Paternal"
  },
  {
    longitude: -58.45787567,
    latitude: -34.57025045,
    name: "ELCANO AV. 2944",
    district: "Colegiales"
  },
  {
    longitude: -58.45911407,
    latitude: -34.57269383,
    name: "ELCANO AV. 3150",
    district: "Colegiales"
  },
  {
    longitude: -58.4596437,
    latitude: -34.57387765,
    name: "ELCANO AV. 3258",
    district: "Colegiales"
  },
  {
    longitude: -58.45991299,
    latitude: -34.57757418,
    name: "ELCANO AV. 3542",
    district: "Colegiales"
  },
  {
    longitude: -58.46005797,
    latitude: -34.57748845,
    name: "ELCANO AV. 3545",
    district: "Colegiales"
  },
  {
    longitude: -58.46045228,
    latitude: -34.57891471,
    name: "ELCANO AV. 3640",
    district: "Chacarita"
  },
  {
    longitude: -58.50836817,
    latitude: -34.64570523,
    name: "ERCILLA 5960",
    district: "Liniers"
  },
  {
    longitude: -58.51040708,
    latitude: -34.64753962,
    name: "ERCILLA 6190",
    district: "Liniers"
  },
  {
    longitude: -58.51236256,
    latitude: -34.6492828,
    name: "ERCILLA 6344",
    district: "Liniers"
  },
  {
    longitude: -58.51295324,
    latitude: -34.64980621,
    name: "ERCILLA 6452",
    district: "Liniers"
  },
  {
    longitude: -58.42821352,
    latitude: -34.65414956,
    name: "EREZCANO 3042",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42625539,
    latitude: -34.65554428,
    name: "EREZCANO 3246",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.49427432,
    latitude: -34.645614,
    name: "ESCALADA AV. 858",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49175237,
    latitude: -34.64759644,
    name: "ESCALADA AV. 1070",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48873596,
    latitude: -34.6499595,
    name: "ESCALADA AV. 1368",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48752587,
    latitude: -34.65092575,
    name: "ESCALADA AV. 1496",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4857368,
    latitude: -34.65234841,
    name: "ESCALADA AV. 1650",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48222712,
    latitude: -34.65520169,
    name: "ESCALADA AV. 1949",
    district: "Mataderos"
  },
  {
    longitude: -58.47024809,
    latitude: -34.61116695,
    name: "ESCALADA DE SAN MARTIN, R. 2239",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47255318,
    latitude: -34.61238738,
    name: "ESCALADA DE SAN MARTIN, R. 2445",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47368545,
    latitude: -34.61299009,
    name: "ESCALADA DE SAN MARTIN, R. 2539",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47779974,
    latitude: -34.61515388,
    name: "ESCALADA DE SAN MARTIN, R. 2877",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47915028,
    latitude: -34.61586767,
    name: "ESCALADA DE SAN MARTIN, R. 2975",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48278998,
    latitude: -34.61777457,
    name: "ESCALADA DE SAN MARTIN, R. 3251",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48542187,
    latitude: -34.61936915,
    name: "ESCALADA DE SAN MARTIN, R. 3463",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48704249,
    latitude: -34.62075898,
    name: "ESCALADA DE SAN MARTIN, R. 3677",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48747735,
    latitude: -34.62112878,
    name: "ESCALADA DE SAN MARTIN, R. 3717",
    district: "Floresta"
  },
  {
    longitude: -58.48961587,
    latitude: -34.62292575,
    name: "ESCALADA DE SAN MARTIN, R. 3949",
    district: "Floresta"
  },
  {
    longitude: -58.49153341,
    latitude: -34.62451124,
    name: "ESCALADA DE SAN MARTIN, R. 4167",
    district: "Floresta"
  },
  {
    longitude: -58.49422452,
    latitude: -34.62675765,
    name: "ESCALADA DE SAN MARTIN, R. 4424",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50460334,
    latitude: -34.57554524,
    name: "ESCOBAR 2492",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50495072,
    latitude: -34.57575799,
    name: "ESCOBAR 2504",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50731521,
    latitude: -34.57722097,
    name: "ESCOBAR 2724",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51001244,
    latitude: -34.57888565,
    name: "ESCOBAR 2960",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.4174933,
    latitude: -34.65184153,
    name: "ESQUIU 975",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.49125562,
    latitude: -34.59244947,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 3561",
    district: "Agronomia"
  },
  {
    longitude: -58.492783,
    latitude: -34.59075713,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 3795",
    district: "Agronomia"
  },
  {
    longitude: -58.49573147,
    latitude: -34.58749654,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 4257",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49779688,
    latitude: -34.5852105,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 4575",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.4991045,
    latitude: -34.58376654,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 4745",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50070039,
    latitude: -34.58201176,
    name: "ESTADO PLURINACIONAL DE BOLIVIA 4957",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.39294405,
    latitude: -34.6192496,
    name: "ESTADOS UNIDOS 1888",
    district: "San Cristobal"
  },
  {
    longitude: -58.39576695,
    latitude: -34.61960135,
    name: "ESTADOS UNIDOS 2096",
    district: "San Cristobal"
  },
  {
    longitude: -58.39803481,
    latitude: -34.61965979,
    name: "ESTADOS UNIDOS 2250",
    district: "San Cristobal"
  },
  {
    longitude: -58.40035635,
    latitude: -34.61975142,
    name: "ESTADOS UNIDOS 2436",
    district: "San Cristobal"
  },
  {
    longitude: -58.40231318,
    latitude: -34.61982897,
    name: "ESTADOS UNIDOS 2608",
    district: "San Cristobal"
  },
  {
    longitude: -58.40523684,
    latitude: -34.62035788,
    name: "ESTADOS UNIDOS 2820",
    district: "San Cristobal"
  },
  {
    longitude: -58.40885432,
    latitude: -34.6211841,
    name: "ESTADOS UNIDOS 3080",
    district: "San Cristobal"
  },
  {
    longitude: -58.52334131,
    latitude: -34.64865862,
    name: "ESTERO BELLACO 6944",
    district: "Liniers"
  },
  {
    longitude: -58.51657708,
    latitude: -34.63873262,
    name: "ESTEVES SAGUI 70",
    district: "Liniers"
  },
  {
    longitude: -58.46994339,
    latitude: -34.58936398,
    name: "ESTOMBA 150",
    district: "Paternal"
  },
  {
    longitude: -58.4650332,
    latitude: -34.57807232,
    name: "ESTOMBA 1374",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46533068,
    latitude: -34.57751228,
    name: "ESTOMBA 1410",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46744955,
    latitude: -34.57508822,
    name: "ESTOMBA 1650",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4690322,
    latitude: -34.57367749,
    name: "ESTOMBA 1790",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4263228,
    latitude: -34.63053604,
    name: "ESTRADA 16",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42991037,
    latitude: -34.63104553,
    name: "ESTRADA 292",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43211381,
    latitude: -34.63137335,
    name: "ESTRADA 450",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43597209,
    latitude: -34.63194799,
    name: "ESTRADA 774",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.50796573,
    latitude: -34.57503829,
    name: "EZEIZA 2653",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50992382,
    latitude: -34.57619348,
    name: "EZEIZA 2827",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51142556,
    latitude: -34.57708931,
    name: "EZEIZA 2947",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.4553093,
    latitude: -34.62793895,
    name: "FALCON, RAMON L.,CNEL. 1856",
    district: "Flores"
  },
  {
    longitude: -58.45725018,
    latitude: -34.62856872,
    name: "FALCON, RAMON L.,CNEL. 2008",
    district: "Flores"
  },
  {
    longitude: -58.4604454,
    latitude: -34.62959767,
    name: "FALCON, RAMON L.,CNEL. 2284",
    district: "Flores"
  },
  {
    longitude: -58.46329575,
    latitude: -34.63045828,
    name: "FALCON, RAMON L.,CNEL. 2480",
    district: "Flores"
  },
  {
    longitude: -58.46540336,
    latitude: -34.63109421,
    name: "FALCON, RAMON L.,CNEL. 2626",
    district: "Flores"
  },
  {
    longitude: -58.4679872,
    latitude: -34.6318914,
    name: "FALCON, RAMON L.,CNEL. 2834",
    district: "Flores"
  },
  {
    longitude: -58.47116511,
    latitude: -34.63278822,
    name: "FALCON, RAMON L.,CNEL. 3056",
    district: "Flores"
  },
  {
    longitude: -58.47597955,
    latitude: -34.63392763,
    name: "FALCON, RAMON L.,CNEL. 3496",
    district: "Floresta"
  },
  {
    longitude: -58.47925037,
    latitude: -34.63469007,
    name: "FALCON, RAMON L.,CNEL. 3766",
    district: "Floresta"
  },
  {
    longitude: -58.48353393,
    latitude: -34.63567594,
    name: "FALCON, RAMON L.,CNEL. 4050",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48846763,
    latitude: -34.63686034,
    name: "FALCON, RAMON L.,CNEL. 4362",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4895216,
    latitude: -34.63712416,
    name: "FALCON, RAMON L.,CNEL. 4420",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49277083,
    latitude: -34.63788504,
    name: "FALCON, RAMON L.,CNEL. 4644",
    district: "Villa Luro"
  },
  {
    longitude: -58.49703069,
    latitude: -34.63844398,
    name: "FALCON, RAMON L.,CNEL. 4950",
    district: "Villa Luro"
  },
  {
    longitude: -58.49990084,
    latitude: -34.63882337,
    name: "FALCON, RAMON L.,CNEL. 5154",
    district: "Villa Luro"
  },
  {
    longitude: -58.42428603,
    latitude: -34.64396677,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 988",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.4268825,
    latitude: -34.64666542,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 1312",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.44050898,
    latitude: -34.6574348,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 2781",
    district: "Villa Soldati"
  },
  {
    longitude: -58.45503856,
    latitude: -34.66962231,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 4050",
    district: "Villa Soldati"
  },
  {
    longitude: -58.45503856,
    latitude: -34.66962231,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 4050",
    district: "Villa Soldati"
  },
  {
    longitude: -58.45503856,
    latitude: -34.66962231,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 4050",
    district: "Villa Soldati"
  },
  {
    longitude: -58.45503856,
    latitude: -34.66962231,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 4050",
    district: "Villa Soldati"
  },
  {
    longitude: -58.46641,
    latitude: -34.67935461,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 5411",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47101129,
    latitude: -34.68342958,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 5791",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47095417,
    latitude: -34.68342591,
    name: "FERNANDEZ DE LA CRUZ, F., GRAL. AV. 5921",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44580548,
    latitude: -34.63219921,
    name: "FERNANDEZ MORENO, BALDOMERO 1391",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44768056,
    latitude: -34.63280056,
    name: "FERNANDEZ MORENO, BALDOMERO 1559",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45050414,
    latitude: -34.63370741,
    name: "FERNANDEZ MORENO, BALDOMERO 1777",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45220174,
    latitude: -34.63424401,
    name: "FERNANDEZ MORENO, BALDOMERO 1927",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45426691,
    latitude: -34.63489692,
    name: "FERNANDEZ MORENO, BALDOMERO 2107",
    district: "Flores"
  },
  {
    longitude: -58.45909982,
    latitude: -34.63815724,
    name: "FERNANDEZ MORENO, BALDOMERO 2525",
    district: "Flores"
  },
  {
    longitude: -58.46041062,
    latitude: -34.63918523,
    name: "FERNANDEZ MORENO, BALDOMERO 2705",
    district: "Flores"
  },
  {
    longitude: -58.46303697,
    latitude: -34.64103406,
    name: "FERNANDEZ MORENO, BALDOMERO 3095",
    district: "Flores"
  },
  {
    longitude: -58.46522626,
    latitude: -34.64244331,
    name: "FERNANDEZ MORENO, BALDOMERO 3249",
    district: "Flores"
  },
  {
    longitude: -58.42949536,
    latitude: -34.66332103,
    name: "FERRE 2505",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43048856,
    latitude: -34.66387004,
    name: "FERRE 2605",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43225538,
    latitude: -34.66483729,
    name: "FERRE 2749",
    district: "Villa Soldati"
  },
  {
    longitude: -58.47022946,
    latitude: -34.69678422,
    name: "FERRE 6925",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.43893776,
    latitude: -34.54918618,
    name: "FIGUEROA ALCORTA, PRES. AV. 6871",
    district: "Belgrano"
  },
  {
    longitude: -58.44915264,
    latitude: -34.54681978,
    name: "FIGUEROA ALCORTA, PRES. AV. 7576",
    district: "Belgrano"
  },
  {
    longitude: -58.450352,
    latitude: -34.54655215,
    name: "FIGUEROA ALCORTA, PRES. AV. 7651",
    district: "Belgrano"
  },
  {
    longitude: -58.37254049,
    latitude: -34.6279089,
    name: "FINOCHIETTO ENRIQUE DR. 510",
    district: "Barracas"
  },
  {
    longitude: -58.37389012,
    latitude: -34.62843094,
    name: "FINOCHIETTO ENRIQUE DR. 626",
    district: "Barracas"
  },
  {
    longitude: -58.37471785,
    latitude: -34.62870551,
    name: "FINOCHIETTO ENRIQUE DR. 706",
    district: "Barracas"
  },
  {
    longitude: -58.38211385,
    latitude: -34.63297013,
    name: "FINOCHIETTO ENRIQUE DR. 1270",
    district: "Barracas"
  },
  {
    longitude: -58.38906986,
    latitude: -34.63538316,
    name: "FINOCHIETTO ENRIQUE DR. 1814",
    district: "Barracas"
  },
  {
    longitude: -58.43974776,
    latitude: -34.58713633,
    name: "FITZ ROY 1340",
    district: "Palermo"
  },
  {
    longitude: -58.4375969,
    latitude: -34.58520808,
    name: "FITZ ROY 1560",
    district: "Palermo"
  },
  {
    longitude: -58.43682534,
    latitude: -34.58453436,
    name: "FITZ ROY 1640",
    district: "Palermo"
  },
  {
    longitude: -58.43585452,
    latitude: -34.58368498,
    name: "FITZ ROY 1750",
    district: "Palermo"
  },
  {
    longitude: -58.43449408,
    latitude: -34.58249475,
    name: "FITZ ROY 1912",
    district: "Palermo"
  },
  {
    longitude: -58.43122586,
    latitude: -34.57963447,
    name: "FITZ ROY 2278",
    district: "Palermo"
  },
  {
    longitude: -58.43029538,
    latitude: -34.5788176,
    name: "FITZ ROY 2368",
    district: "Palermo"
  },
  {
    longitude: -58.42955639,
    latitude: -34.57817047,
    name: "FITZ ROY 2442",
    district: "Palermo"
  },
  {
    longitude: -58.43271181,
    latitude: -34.6144255,
    name: "FLORES, VENANCIO, GRAL. 126",
    district: "Caballito"
  },
  {
    longitude: -58.51554415,
    latitude: -34.63971411,
    name: "FONROUGE 36",
    district: "Liniers"
  },
  {
    longitude: -58.51230108,
    latitude: -34.6422941,
    name: "FONROUGE 350",
    district: "Liniers"
  },
  {
    longitude: -58.50962162,
    latitude: -34.64394851,
    name: "FONROUGE 556",
    district: "Liniers"
  },
  {
    longitude: -58.50648919,
    latitude: -34.64635296,
    name: "FONROUGE 828",
    district: "Liniers"
  },
  {
    longitude: -58.49821048,
    latitude: -34.65281314,
    name: "FONROUGE 1560",
    district: "Mataderos"
  },
  {
    longitude: -58.49182061,
    latitude: -34.65781619,
    name: "FONROUGE 2148",
    district: "Mataderos"
  },
  {
    longitude: -58.48838907,
    latitude: -34.66053869,
    name: "FONROUGE 2450",
    district: "Mataderos"
  },
  {
    longitude: -58.48572829,
    latitude: -34.66256528,
    name: "FONROUGE 2706",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48225286,
    latitude: -34.66527347,
    name: "FONROUGE 2990",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47970028,
    latitude: -34.66725157,
    name: "FONROUGE 3180",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4751758,
    latitude: -34.67078842,
    name: "FONROUGE 3594",
    district: "Villa Lugano"
  },
  {
    longitude: -58.45872222,
    latitude: -34.58006648,
    name: "FOREST AV. 1094",
    district: "Chacarita"
  },
  {
    longitude: -58.46126992,
    latitude: -34.57731468,
    name: "FOREST AV. 1274",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46519181,
    latitude: -34.57393857,
    name: "FOREST AV. 1610",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4317474,
    latitude: -34.62103471,
    name: "FORMOSA 238",
    district: "Caballito"
  },
  {
    longitude: -58.44823052,
    latitude: -34.58655026,
    name: "FRAGA 235",
    district: "Chacarita"
  },
  {
    longitude: -58.45903041,
    latitude: -34.60105721,
    name: "FRAGATA PRES. SARMIENTO 2141",
    district: "Paternal"
  },
  {
    longitude: -58.45872517,
    latitude: -34.60007303,
    name: "FRAGATA PRES. SARMIENTO 2235",
    district: "Paternal"
  },
  {
    longitude: -58.45798408,
    latitude: -34.59753572,
    name: "FRAGATA PRES. SARMIENTO 2461",
    district: "Paternal"
  },
  {
    longitude: -58.51648827,
    latitude: -34.58757638,
    name: "FRANCO 3647",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45061539,
    latitude: -34.61142797,
    name: "FRANKLIN 1130",
    district: "Caballito"
  },
  {
    longitude: -58.43064141,
    latitude: -34.58618883,
    name: "FRAY JUSTO SANTAMARIA DE ORO 1768",
    district: "Palermo"
  },
  {
    longitude: -58.42848471,
    latitude: -34.58377965,
    name: "FRAY JUSTO SANTAMARIA DE ORO 2030",
    district: "Palermo"
  },
  {
    longitude: -58.42653605,
    latitude: -34.58160065,
    name: "FRAY JUSTO SANTAMARIA DE ORO 2278",
    district: "Palermo"
  },
  {
    longitude: -58.4251961,
    latitude: -34.58011294,
    name: "FRAY JUSTO SANTAMARIA DE ORO 2424",
    district: "Palermo"
  },
  {
    longitude: -58.42160011,
    latitude: -34.57623495,
    name: "FRAY JUSTO SANTAMARIA DE ORO 2774",
    district: "Palermo"
  },
  {
    longitude: -58.42103407,
    latitude: -34.57554328,
    name: "FRAY JUSTO SANTAMARIA DE ORO 2836",
    district: "Palermo"
  },
  {
    longitude: -58.44388003,
    latitude: -34.5798359,
    name: "FREIRE, RAMON, CAP. GRAL. 121",
    district: "Colegiales"
  },
  {
    longitude: -58.44849209,
    latitude: -34.57724228,
    name: "FREIRE, RAMON, CAP. GRAL. 664",
    district: "Colegiales"
  },
  {
    longitude: -58.44914809,
    latitude: -34.57683906,
    name: "FREIRE, RAMON, CAP. GRAL. 711",
    district: "Colegiales"
  },
  {
    longitude: -58.45233539,
    latitude: -34.57549495,
    name: "FREIRE, RAMON, CAP. GRAL. 980",
    district: "Colegiales"
  },
  {
    longitude: -58.45371155,
    latitude: -34.57468616,
    name: "FREIRE, RAMON, CAP. GRAL. 1071",
    district: "Colegiales"
  },
  {
    longitude: -58.45551763,
    latitude: -34.57372271,
    name: "FREIRE, RAMON, CAP. GRAL. 1257",
    district: "Colegiales"
  },
  {
    longitude: -58.45620041,
    latitude: -34.57335678,
    name: "FREIRE, RAMON, CAP. GRAL. 1323",
    district: "Colegiales"
  },
  {
    longitude: -58.46612871,
    latitude: -34.56453483,
    name: "FREIRE, RAMON, CAP. GRAL. 2313",
    district: "Belgrano"
  },
  {
    longitude: -58.46687825,
    latitude: -34.56367194,
    name: "FREIRE, RAMON, CAP. GRAL. 2401",
    district: "Belgrano"
  },
  {
    longitude: -58.39774393,
    latitude: -34.59176666,
    name: "FRENCH 2262",
    district: "Recoleta"
  },
  {
    longitude: -58.40228463,
    latitude: -34.58912547,
    name: "FRENCH 2722",
    district: "Recoleta"
  },
  {
    longitude: -58.40456463,
    latitude: -34.5877944,
    name: "FRENCH 2920",
    district: "Recoleta"
  },
  {
    longitude: -58.41192733,
    latitude: -34.58275198,
    name: "FRENCH 3691",
    district: "Palermo"
  },
  {
    longitude: -58.44668431,
    latitude: -34.61529045,
    name: "GAINZA, MARTIN DE, GRAL. 588",
    district: "Caballito"
  },
  {
    longitude: -58.44656599,
    latitude: -34.6131525,
    name: "GAINZA, MARTIN DE, GRAL. 716",
    district: "Caballito"
  },
  {
    longitude: -58.44665367,
    latitude: -34.61052851,
    name: "GAINZA, MARTIN DE, GRAL. 934",
    district: "Caballito"
  },
  {
    longitude: -58.44661812,
    latitude: -34.60932041,
    name: "GAINZA, MARTIN DE, GRAL. 1040",
    district: "Caballito"
  },
  {
    longitude: -58.45368538,
    latitude: -34.60733291,
    name: "GALICIA 1026",
    district: "Caballito"
  },
  {
    longitude: -58.45765281,
    latitude: -34.60933829,
    name: "GALICIA 1370",
    district: "Caballito"
  },
  {
    longitude: -58.46427615,
    latitude: -34.61238449,
    name: "GALICIA 1966",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46693179,
    latitude: -34.61379146,
    name: "GALICIA 2160",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46864093,
    latitude: -34.6146978,
    name: "GALICIA 2310",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47106775,
    latitude: -34.61597865,
    name: "GALICIA 2524",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47372971,
    latitude: -34.61739017,
    name: "GALICIA 2738",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48025545,
    latitude: -34.62073792,
    name: "GALICIA 3241",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48358278,
    latitude: -34.62315106,
    name: "GALICIA 3653",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.52030879,
    latitude: -34.63063037,
    name: "GAMBOA, MARCELO 6145",
    district: "Versalles"
  },
  {
    longitude: -58.52300313,
    latitude: -34.63119485,
    name: "GAMBOA, MARCELO 6387",
    district: "Versalles"
  },
  {
    longitude: -58.52654913,
    latitude: -34.63193648,
    name: "GAMBOA, MARCELO 6749",
    district: "Versalles"
  },
  {
    longitude: -58.52919669,
    latitude: -34.63249518,
    name: "GAMBOA, MARCELO 6975",
    district: "Versalles"
  },
  {
    longitude: -58.52718293,
    latitude: -34.63266822,
    name: "GANA 566",
    district: "Versalles"
  },
  {
    longitude: -58.47661488,
    latitude: -34.58091145,
    name: "GANDARA 2355",
    district: "Parque Chas"
  },
  {
    longitude: -58.48204426,
    latitude: -34.58390804,
    name: "GANDARA 2927",
    district: "Parque Chas"
  },
  {
    longitude: -58.48298134,
    latitude: -34.58448627,
    name: "GANDARA 3083",
    district: "Parque Chas"
  },
  {
    longitude: -58.4852194,
    latitude: -34.58587046,
    name: "GANDARA 3295",
    district: "Parque Chas"
  },
  {
    longitude: -58.44842809,
    latitude: -34.60849074,
    name: "GAONA AV. 1343",
    district: "Caballito"
  },
  {
    longitude: -58.45089503,
    latitude: -34.60982799,
    name: "GAONA AV. 1593",
    district: "Caballito"
  },
  {
    longitude: -58.45295447,
    latitude: -34.61093876,
    name: "GAONA AV. 1747",
    district: "Caballito"
  },
  {
    longitude: -58.45539858,
    latitude: -34.61214485,
    name: "GAONA AV. 1951",
    district: "Caballito"
  },
  {
    longitude: -58.46133721,
    latitude: -34.61450356,
    name: "GAONA AV. 2457",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46404546,
    latitude: -34.61551472,
    name: "GAONA AV. 2673",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46654304,
    latitude: -34.61655871,
    name: "GAONA AV. 2885",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46831275,
    latitude: -34.6173254,
    name: "GAONA AV. 3013",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47063535,
    latitude: -34.61852217,
    name: "GAONA AV. 3219",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47357068,
    latitude: -34.62007668,
    name: "GAONA AV. 3443",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47503708,
    latitude: -34.62083629,
    name: "GAONA AV. 3561",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.4825201,
    latitude: -34.62443992,
    name: "GAONA AV. 4165",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48360344,
    latitude: -34.62488935,
    name: "GAONA AV. 4253",
    district: "Floresta"
  },
  {
    longitude: -58.48590077,
    latitude: -34.625831,
    name: "GAONA AV. 4431",
    district: "Floresta"
  },
  {
    longitude: -58.48853893,
    latitude: -34.62691692,
    name: "GAONA AV. 4665",
    district: "Floresta"
  },
  {
    longitude: -58.49096114,
    latitude: -34.62792925,
    name: "GAONA AV. 4867",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.51611581,
    latitude: -34.64664028,
    name: "GARCIA DE COSSIO 6393",
    district: "Liniers"
  },
  {
    longitude: -58.51713962,
    latitude: -34.64756073,
    name: "GARCIA DE COSSIO 6509",
    district: "Liniers"
  },
  {
    longitude: -58.51865592,
    latitude: -34.6489415,
    name: "GARCIA DE COSSIO 6727",
    district: "Liniers"
  },
  {
    longitude: -58.52056129,
    latitude: -34.65065178,
    name: "GARCIA DE COSSIO 7035",
    district: "Liniers"
  },
  {
    longitude: -58.52242363,
    latitude: -34.65232586,
    name: "GARCIA DE COSSIO 7287",
    district: "Liniers"
  },
  {
    longitude: -58.52385685,
    latitude: -34.65361954,
    name: "GARCIA DE COSSIO 7451",
    district: "Liniers"
  },
  {
    longitude: -58.50171153,
    latitude: -34.64678791,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 5635",
    district: "Mataderos"
  },
  {
    longitude: -58.50406087,
    latitude: -34.6490326,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 5951",
    district: "Mataderos"
  },
  {
    longitude: -58.50651233,
    latitude: -34.65152741,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 6234",
    district: "Mataderos"
  },
  {
    longitude: -58.50788995,
    latitude: -34.65267245,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 6385",
    district: "Mataderos"
  },
  {
    longitude: -58.50972459,
    latitude: -34.65442477,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 6645",
    district: "Mataderos"
  },
  {
    longitude: -58.51041377,
    latitude: -34.65511887,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 6785",
    district: "Mataderos"
  },
  {
    longitude: -58.51341043,
    latitude: -34.65801309,
    name: "GARCIA GRANDE DE ZEQUEIRA, SEVERO 7197",
    district: "Mataderos"
  },
  {
    longitude: -58.44520848,
    latitude: -34.61888475,
    name: "GARCIA LORCA, FEDERICO 219",
    district: "Caballito"
  },
  {
    longitude: -58.46421997,
    latitude: -34.5977083,
    name: "GARCIA, JUAN AGUSTIN 1166",
    district: "Paternal"
  },
  {
    longitude: -58.46520515,
    latitude: -34.60085017,
    name: "GARCIA, JUAN AGUSTIN 1456",
    district: "Paternal"
  },
  {
    longitude: -58.46776863,
    latitude: -34.60332444,
    name: "GARCIA, JUAN AGUSTIN 1770",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47034286,
    latitude: -34.60444308,
    name: "GARCIA, JUAN AGUSTIN 1948",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47380775,
    latitude: -34.60603728,
    name: "GARCIA, JUAN AGUSTIN 2208",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47908608,
    latitude: -34.60881347,
    name: "GARCIA, JUAN AGUSTIN 2654",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.48135808,
    latitude: -34.61001439,
    name: "GARCIA, JUAN AGUSTIN 2832",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48522998,
    latitude: -34.6120319,
    name: "GARCIA, JUAN AGUSTIN 3140",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48757233,
    latitude: -34.6132802,
    name: "GARCIA, JUAN AGUSTIN 3338",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48960818,
    latitude: -34.61437656,
    name: "GARCIA, JUAN AGUSTIN 3506",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49206505,
    latitude: -34.61630803,
    name: "GARCIA, JUAN AGUSTIN 3808",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49399898,
    latitude: -34.61795761,
    name: "GARCIA, JUAN AGUSTIN 4038",
    district: "Floresta"
  },
  {
    longitude: -58.49610654,
    latitude: -34.61971224,
    name: "GARCIA, JUAN AGUSTIN 4292",
    district: "Floresta"
  },
  {
    longitude: -58.4977463,
    latitude: -34.62106336,
    name: "GARCIA, JUAN AGUSTIN 4464",
    district: "Floresta"
  },
  {
    longitude: -58.50116901,
    latitude: -34.62292057,
    name: "GARCIA, JUAN AGUSTIN 4774",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50310011,
    latitude: -34.62388284,
    name: "GARCIA, JUAN AGUSTIN 4960",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50648797,
    latitude: -34.62690829,
    name: "GARCIA, JUAN AGUSTIN 5238",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50867161,
    latitude: -34.62884191,
    name: "GARCIA, JUAN AGUSTIN 5446",
    district: "Villa Luro"
  },
  {
    longitude: -58.51039555,
    latitude: -34.63038618,
    name: "GARCIA, JUAN AGUSTIN 5632",
    district: "Villa Luro"
  },
  {
    longitude: -58.51230942,
    latitude: -34.63208446,
    name: "GARCIA, JUAN AGUSTIN 5846",
    district: "Versalles"
  },
  {
    longitude: -58.44907706,
    latitude: -34.54793954,
    name: "GARCIA, MANUEL J., ALTE. 1005",
    district: "Belgrano"
  },
  {
    longitude: -58.44935551,
    latitude: -34.54921428,
    name: "GARCIA, MANUEL J., ALTE. 1113",
    district: "Belgrano"
  },
  {
    longitude: -58.44262499,
    latitude: -34.56606568,
    name: "GARCIA, TEODORO 2039",
    district: "Palermo"
  },
  {
    longitude: -58.44427749,
    latitude: -34.56794331,
    name: "GARCIA, TEODORO 2285",
    district: "Palermo"
  },
  {
    longitude: -58.44841972,
    latitude: -34.57323952,
    name: "GARCIA, TEODORO 2825",
    district: "Colegiales"
  },
  {
    longitude: -58.45344091,
    latitude: -34.58195171,
    name: "GARCIA, TEODORO 3691",
    district: "Chacarita"
  },
  {
    longitude: -58.50686176,
    latitude: -34.66972678,
    name: "GARZON, EUGENIO, GRAL. 7487",
    district: "Mataderos"
  },
  {
    longitude: -58.48476953,
    latitude: -34.65055339,
    name: "GARZON, EUGENIO, GRAL. AV. 4773",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49194793,
    latitude: -34.65683064,
    name: "GARZON, EUGENIO, GRAL. AV. 5628",
    district: "Mataderos"
  },
  {
    longitude: -58.49342108,
    latitude: -34.65808564,
    name: "GARZON, EUGENIO, GRAL. AV. 5810",
    district: "Mataderos"
  },
  {
    longitude: -58.42389626,
    latitude: -34.61202251,
    name: "GASCON 37",
    district: "Almagro"
  },
  {
    longitude: -58.49191937,
    latitude: -34.58401372,
    name: "GAVILAN 4350",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49319388,
    latitude: -34.58260544,
    name: "GAVILAN 4550",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.4938403,
    latitude: -34.58189604,
    name: "GAVILAN 4640",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.47639893,
    latitude: -34.58032702,
    name: "GINEBRA 3939",
    district: "Parque Chas"
  },
  {
    longitude: -58.46554186,
    latitude: -34.58828003,
    name: "GIRARDOT 1350",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46785077,
    latitude: -34.58658676,
    name: "GIRARDOT 1526",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.45272234,
    latitude: -34.58131882,
    name: "GIRIBONE 689",
    district: "Chacarita"
  },
  {
    longitude: -58.45622871,
    latitude: -34.58016916,
    name: "GIRIBONE 953",
    district: "Chacarita"
  },
  {
    longitude: -58.45833456,
    latitude: -34.57973845,
    name: "GIRIBONE 1165",
    district: "Chacarita"
  },
  {
    longitude: -58.45977817,
    latitude: -34.57966273,
    name: "GIRIBONE 1249",
    district: "Chacarita"
  },
  {
    longitude: -58.46209409,
    latitude: -34.57958446,
    name: "GIRIBONE 1413",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46529578,
    latitude: -34.57949074,
    name: "GIRIBONE 1641",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46764068,
    latitude: -34.57942104,
    name: "GIRIBONE 1829",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.48365498,
    latitude: -34.58391338,
    name: "GIRIBONE 3084",
    district: "Parque Chas"
  },
  {
    longitude: -58.48634354,
    latitude: -34.58558821,
    name: "GIRIBONE 3348",
    district: "Parque Chas"
  },
  {
    longitude: -58.43638901,
    latitude: -34.58914462,
    name: "GODOY CRUZ 1471",
    district: "Palermo"
  },
  {
    longitude: -58.43433411,
    latitude: -34.58779758,
    name: "GODOY CRUZ 1653",
    district: "Palermo"
  },
  {
    longitude: -58.43258076,
    latitude: -34.58669757,
    name: "GODOY CRUZ 1825",
    district: "Palermo"
  },
  {
    longitude: -58.43065486,
    latitude: -34.58490051,
    name: "GODOY CRUZ 2055",
    district: "Palermo"
  },
  {
    longitude: -58.42834723,
    latitude: -34.58227277,
    name: "GODOY CRUZ 2355",
    district: "Palermo"
  },
  {
    longitude: -58.42672291,
    latitude: -34.58041902,
    name: "GODOY CRUZ 2535",
    district: "Palermo"
  },
  {
    longitude: -58.42496524,
    latitude: -34.57843174,
    name: "GODOY CRUZ 2725",
    district: "Palermo"
  },
  {
    longitude: -58.42265322,
    latitude: -34.57594913,
    name: "GODOY CRUZ 2985",
    district: "Palermo"
  },
  {
    longitude: -58.42156352,
    latitude: -34.57405797,
    name: "GODOY CRUZ 3150",
    district: "Palermo"
  },
  {
    longitude: -58.49069791,
    latitude: -34.67882075,
    name: "GOLETA SANTA CRUZ 6711",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49239233,
    latitude: -34.67927258,
    name: "GOLETA SANTA CRUZ 6851",
    district: "Villa Lugano"
  },
  {
    longitude: -58.40600282,
    latitude: -34.60553327,
    name: "GOMEZ, VALENTIN 2824",
    district: "Balvanera"
  },
  {
    longitude: -58.40802058,
    latitude: -34.60540947,
    name: "GOMEZ, VALENTIN 2992",
    district: "Balvanera"
  },
  {
    longitude: -58.41193685,
    latitude: -34.60515863,
    name: "GOMEZ, VALENTIN 3294",
    district: "Balvanera"
  },
  {
    longitude: -58.48774176,
    latitude: -34.6118238,
    name: "GONZALEZ, ELPIDIO 3263",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48997293,
    latitude: -34.61300424,
    name: "GONZALEZ, ELPIDIO 3465",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49190792,
    latitude: -34.61428697,
    name: "GONZALEZ, ELPIDIO 3665",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49284001,
    latitude: -34.61507194,
    name: "GONZALEZ, ELPIDIO 3789",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49457027,
    latitude: -34.61655414,
    name: "GONZALEZ, ELPIDIO 3987",
    district: "Monte Castro"
  },
  {
    longitude: -58.49733445,
    latitude: -34.6189136,
    name: "GONZALEZ, ELPIDIO 4293",
    district: "Monte Castro"
  },
  {
    longitude: -58.49968238,
    latitude: -34.62069691,
    name: "GONZALEZ, ELPIDIO 4529",
    district: "Monte Castro"
  },
  {
    longitude: -58.50267107,
    latitude: -34.62230887,
    name: "GONZALEZ, ELPIDIO 4745",
    district: "Monte Castro"
  },
  {
    longitude: -58.50538345,
    latitude: -34.62404248,
    name: "GONZALEZ, ELPIDIO 4977",
    district: "Monte Castro"
  },
  {
    longitude: -58.50920662,
    latitude: -34.62754048,
    name: "GONZALEZ, ELPIDIO 5297",
    district: "Villa Luro"
  },
  {
    longitude: -58.51072836,
    latitude: -34.62890683,
    name: "GONZALEZ, ELPIDIO 5455",
    district: "Villa Luro"
  },
  {
    longitude: -58.51408404,
    latitude: -34.63193684,
    name: "GONZALEZ, ELPIDIO 5873",
    district: "Versalles"
  },
  {
    longitude: -58.48683324,
    latitude: -34.62142537,
    name: "GONZALEZ, JOAQUIN V. 1252",
    district: "Floresta"
  },
  {
    longitude: -58.48767038,
    latitude: -34.62075667,
    name: "GONZALEZ, JOAQUIN V. 1332",
    district: "Floresta"
  },
  {
    longitude: -58.4888698,
    latitude: -34.61980185,
    name: "GONZALEZ, JOAQUIN V. 1448",
    district: "Floresta"
  },
  {
    longitude: -58.49217155,
    latitude: -34.61716715,
    name: "GONZALEZ, JOAQUIN V. 1760",
    district: "Floresta"
  },
  {
    longitude: -58.49431326,
    latitude: -34.61544676,
    name: "GONZALEZ, JOAQUIN V. 1946",
    district: "Monte Castro"
  },
  {
    longitude: -58.52247232,
    latitude: -34.63915272,
    name: "GORDILLO, TIMOTEO 24",
    district: "Liniers"
  },
  {
    longitude: -58.52219088,
    latitude: -34.64113572,
    name: "GORDILLO, TIMOTEO 184",
    district: "Liniers"
  },
  {
    longitude: -58.52162282,
    latitude: -34.64534677,
    name: "GORDILLO, TIMOTEO 576",
    district: "Liniers"
  },
  {
    longitude: -58.5214587,
    latitude: -34.64656196,
    name: "GORDILLO, TIMOTEO 720",
    district: "Liniers"
  },
  {
    longitude: -58.51923781,
    latitude: -34.64899403,
    name: "GORDILLO, TIMOTEO 980",
    district: "Liniers"
  },
  {
    longitude: -58.51484161,
    latitude: -34.65229896,
    name: "GORDILLO, TIMOTEO 1330",
    district: "Mataderos"
  },
  {
    longitude: -58.49948223,
    latitude: -34.66432877,
    name: "GORDILLO, TIMOTEO 2654",
    district: "Mataderos"
  },
  {
    longitude: -58.49841657,
    latitude: -34.66521868,
    name: "GORDILLO, TIMOTEO 2770",
    district: "Mataderos"
  },
  {
    longitude: -58.48562081,
    latitude: -34.67564956,
    name: "GORDILLO, TIMOTEO 3891",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48347495,
    latitude: -34.67729464,
    name: "GORDILLO, TIMOTEO 4090",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48325235,
    latitude: -34.67747716,
    name: "GORDILLO, TIMOTEO 4106",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48098114,
    latitude: -34.67937192,
    name: "GORDILLO, TIMOTEO 4256",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47725938,
    latitude: -34.68237445,
    name: "GORDILLO, TIMOTEO 4551",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47455119,
    latitude: -34.6844269,
    name: "GORDILLO, TIMOTEO 4781",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47230052,
    latitude: -34.6861326,
    name: "GORDILLO, TIMOTEO 4965",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46789105,
    latitude: -34.68947057,
    name: "GORDILLO, TIMOTEO 5339",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46605147,
    latitude: -34.69086603,
    name: "GORDILLO, TIMOTEO 5495",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46441053,
    latitude: -34.69210569,
    name: "GORDILLO, TIMOTEO 5611",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.43735956,
    latitude: -34.5665193,
    name: "GOROSTIAGA 1750",
    district: "Palermo"
  },
  {
    longitude: -58.41883661,
    latitude: -34.5955086,
    name: "GORRITI 3818",
    district: "Palermo"
  },
  {
    longitude: -58.42333761,
    latitude: -34.59511426,
    name: "GORRITI 4142",
    district: "Palermo"
  },
  {
    longitude: -58.42586031,
    latitude: -34.59304,
    name: "GORRITI 4474",
    district: "Palermo"
  },
  {
    longitude: -58.43597214,
    latitude: -34.58592302,
    name: "GORRITI 5468",
    district: "Palermo"
  },
  {
    longitude: -58.4380022,
    latitude: -34.58437945,
    name: "GORRITI 5676",
    district: "Palermo"
  },
  {
    longitude: -58.43901595,
    latitude: -34.58362056,
    name: "GORRITI 5770",
    district: "Palermo"
  },
  {
    longitude: -58.44227209,
    latitude: -34.58118252,
    name: "GORRITI 6080",
    district: "Palermo"
  },
  {
    longitude: -58.42786612,
    latitude: -34.62512371,
    name: "GOYENA, PEDRO AV. 33",
    district: "Caballito"
  },
  {
    longitude: -58.43051924,
    latitude: -34.62555818,
    name: "GOYENA, PEDRO AV. 234",
    district: "Caballito"
  },
  {
    longitude: -58.43311637,
    latitude: -34.62583228,
    name: "GOYENA, PEDRO AV. 426",
    district: "Caballito"
  },
  {
    longitude: -58.43816564,
    latitude: -34.62622365,
    name: "GOYENA, PEDRO AV. 728",
    district: "Caballito"
  },
  {
    longitude: -58.44365585,
    latitude: -34.62692189,
    name: "GOYENA, PEDRO AV. 1122",
    district: "Caballito"
  },
  {
    longitude: -58.447459,
    latitude: -34.62764795,
    name: "GOYENA, PEDRO AV. 1430",
    district: "Caballito"
  },
  {
    longitude: -58.45126531,
    latitude: -34.62838849,
    name: "GOYENA, PEDRO AV. 1642",
    district: "Caballito"
  },
  {
    longitude: -58.45315911,
    latitude: -34.62874859,
    name: "GOYENA, PEDRO AV. 1750",
    district: "Flores"
  },
  {
    longitude: -58.46720667,
    latitude: -34.541155,
    name: "GRECIA 4307",
    district: "Nuñez"
  },
  {
    longitude: -58.46845873,
    latitude: -34.53960595,
    name: "GRECIA 4520",
    district: "Nuñez"
  },
  {
    longitude: -58.5108679,
    latitude: -34.58891718,
    name: "GRIVEO 3437",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51199975,
    latitude: -34.58961292,
    name: "GRIVEO 3519",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51616194,
    latitude: -34.59217596,
    name: "GRIVEO 3841",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51753045,
    latitude: -34.59301963,
    name: "GRIVEO 3981",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51940641,
    latitude: -34.59417012,
    name: "GRIVEO 4159",
    district: "Villa Devoto"
  },
  {
    longitude: -58.4993604,
    latitude: -34.61744153,
    name: "GUALEGUAYCHU 1966",
    district: "Monte Castro"
  },
  {
    longitude: -58.50670733,
    latitude: -34.66508316,
    name: "GUAMINI 2487",
    district: "Mataderos"
  },
  {
    longitude: -58.50357582,
    latitude: -34.66768223,
    name: "GUAMINI 2741",
    district: "Mataderos"
  },
  {
    longitude: -58.50202595,
    latitude: -34.668974,
    name: "GUAMINI 2905",
    district: "Mataderos"
  },
  {
    longitude: -58.50020914,
    latitude: -34.67048245,
    name: "GUAMINI 3057",
    district: "Mataderos"
  },
  {
    longitude: -58.49610622,
    latitude: -34.67320294,
    name: "GUAMINI 3311",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48025317,
    latitude: -34.68505755,
    name: "GUAMINI 4648",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47674482,
    latitude: -34.68771922,
    name: "GUAMINI 4948",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47499051,
    latitude: -34.6890472,
    name: "GUAMINI 5090",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47263393,
    latitude: -34.69083129,
    name: "GUAMINI 5296",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47104578,
    latitude: -34.69202943,
    name: "GUAMINI 5416",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46859637,
    latitude: -34.69389153,
    name: "GUAMINI 5626",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.50208858,
    latitude: -34.64087492,
    name: "GUARDIA NACIONAL 341",
    district: "Villa Luro"
  },
  {
    longitude: -58.50093634,
    latitude: -34.64177677,
    name: "GUARDIA NACIONAL 449",
    district: "Villa Luro"
  },
  {
    longitude: -58.49796979,
    latitude: -34.64412558,
    name: "GUARDIA NACIONAL 739",
    district: "Mataderos"
  },
  {
    longitude: -58.49538158,
    latitude: -34.64620514,
    name: "GUARDIA NACIONAL 951",
    district: "Mataderos"
  },
  {
    longitude: -58.49312188,
    latitude: -34.64795197,
    name: "GUARDIA NACIONAL 1119",
    district: "Mataderos"
  },
  {
    longitude: -58.49137514,
    latitude: -34.64930239,
    name: "GUARDIA NACIONAL 1293",
    district: "Mataderos"
  },
  {
    longitude: -58.48898698,
    latitude: -34.65114935,
    name: "GUARDIA NACIONAL 1521",
    district: "Mataderos"
  },
  {
    longitude: -58.48612477,
    latitude: -34.65338772,
    name: "GUARDIA NACIONAL 1791",
    district: "Mataderos"
  },
  {
    longitude: -58.48510059,
    latitude: -34.65407832,
    name: "GUARDIA NACIONAL 1860",
    district: "Mataderos"
  },
  {
    longitude: -58.4819466,
    latitude: -34.65665526,
    name: "GUARDIA NACIONAL 2119",
    district: "Mataderos"
  },
  {
    longitude: -58.4779464,
    latitude: -34.65976609,
    name: "GUARDIA NACIONAL 2491",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47648331,
    latitude: -34.66093532,
    name: "GUARDIA NACIONAL 2605",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4696783,
    latitude: -34.66622488,
    name: "GUARDIA NACIONAL 3205",
    district: "Villa Lugano"
  },
  {
    longitude: -58.41257216,
    latitude: -34.60253442,
    name: "GUARDIA VIEJA 3395",
    district: "Balvanera"
  },
  {
    longitude: -58.41486438,
    latitude: -34.60185186,
    name: "GUARDIA VIEJA 3559",
    district: "Almagro"
  },
  {
    longitude: -58.41689794,
    latitude: -34.60120492,
    name: "GUARDIA VIEJA 3739",
    district: "Almagro"
  },
  {
    longitude: -58.41977709,
    latitude: -34.60073243,
    name: "GUARDIA VIEJA 3941",
    district: "Almagro"
  },
  {
    longitude: -58.42305628,
    latitude: -34.60041739,
    name: "GUARDIA VIEJA 4159",
    district: "Almagro"
  },
  {
    longitude: -58.42573125,
    latitude: -34.60015451,
    name: "GUARDIA VIEJA 4327",
    district: "Almagro"
  },
  {
    longitude: -58.42939209,
    latitude: -34.59980816,
    name: "GUARDIA VIEJA 4579",
    district: "Almagro"
  },
  {
    longitude: -58.43072148,
    latitude: -34.5814127,
    name: "GUATEMALA 5440",
    district: "Palermo"
  },
  {
    longitude: -58.43334373,
    latitude: -34.57932012,
    name: "GUATEMALA 5730",
    district: "Palermo"
  },
  {
    longitude: -58.43480953,
    latitude: -34.57814206,
    name: "GUATEMALA 5880",
    district: "Palermo"
  },
  {
    longitude: -58.42941436,
    latitude: -34.61953021,
    name: "GUAYAQUIL 75",
    district: "Caballito"
  },
  {
    longitude: -58.43264526,
    latitude: -34.61995444,
    name: "GUAYAQUIL 291",
    district: "Caballito"
  },
  {
    longitude: -58.44025658,
    latitude: -34.62190461,
    name: "GUAYAQUIL 864",
    district: "Caballito"
  },
  {
    longitude: -58.45654253,
    latitude: -34.54849111,
    name: "GUAYRA 1586",
    district: "Nuñez"
  },
  {
    longitude: -58.46313732,
    latitude: -34.55180499,
    name: "GUAYRA 2200",
    district: "Nuñez"
  },
  {
    longitude: -58.40959442,
    latitude: -34.59145292,
    name: "GUEMES 3080",
    district: "Recoleta"
  },
  {
    longitude: -58.45268076,
    latitude: -34.58595093,
    name: "GUEVARA 577",
    district: "Chacarita"
  },
  {
    longitude: -58.46266209,
    latitude: -34.5839449,
    name: "GUEVARA 1341",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.39160816,
    latitude: -34.58861786,
    name: "GUIDO 1985",
    district: "Recoleta"
  },
  {
    longitude: -58.44449251,
    latitude: -34.59947051,
    name: "GURRUCHAGA 242",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4384415,
    latitude: -34.59515473,
    name: "GURRUCHAGA 784",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43298185,
    latitude: -34.59169779,
    name: "GURRUCHAGA 1260",
    district: "Palermo"
  },
  {
    longitude: -58.43094303,
    latitude: -34.59038301,
    name: "GURRUCHAGA 1424",
    district: "Palermo"
  },
  {
    longitude: -58.42866727,
    latitude: -34.58891517,
    name: "GURRUCHAGA 1670",
    district: "Palermo"
  },
  {
    longitude: -58.42648963,
    latitude: -34.58750589,
    name: "GURRUCHAGA 1882",
    district: "Palermo"
  },
  {
    longitude: -58.42512563,
    latitude: -34.58663149,
    name: "GURRUCHAGA 2018",
    district: "Palermo"
  },
  {
    longitude: -58.42297594,
    latitude: -34.58514441,
    name: "GURRUCHAGA 2220",
    district: "Palermo"
  },
  {
    longitude: -58.42053475,
    latitude: -34.5826879,
    name: "GURRUCHAGA 2474",
    district: "Palermo"
  },
  {
    longitude: -58.51238444,
    latitude: -34.59726833,
    name: "HABANA 3866",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51409168,
    latitude: -34.59832196,
    name: "HABANA 4060",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51587436,
    latitude: -34.59942548,
    name: "HABANA 4210",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51987772,
    latitude: -34.60189569,
    name: "HABANA 4536",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52346029,
    latitude: -34.60410256,
    name: "HABANA 4804",
    district: "Villa Devoto"
  },
  {
    longitude: -58.48395029,
    latitude: -34.58714558,
    name: "HAMBURGO 3286",
    district: "Parque Chas"
  },
  {
    longitude: -58.50004501,
    latitude: -34.59310062,
    name: "HELGUERA 3995",
    district: "Agronomia"
  },
  {
    longitude: -58.50117966,
    latitude: -34.59185694,
    name: "HELGUERA 4153",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50237089,
    latitude: -34.59054498,
    name: "HELGUERA 4349",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50443869,
    latitude: -34.58826558,
    name: "HELGUERA 4659",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50586189,
    latitude: -34.58668195,
    name: "HELGUERA 4833",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50736812,
    latitude: -34.58502359,
    name: "HELGUERA 5031",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50872379,
    latitude: -34.58352335,
    name: "HELGUERA 5223",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50931338,
    latitude: -34.58287415,
    name: "HELGUERA 5331",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.46490234,
    latitude: -34.58653666,
    name: "HEREDIA 535",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46377857,
    latitude: -34.57739179,
    name: "HEREDIA 1379",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46549598,
    latitude: -34.57543982,
    name: "HEREDIA 1557",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46691175,
    latitude: -34.57417934,
    name: "HEREDIA 1689",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.36951854,
    latitude: -34.62996892,
    name: "HERNANDARIAS 122",
    district: "Boca"
  },
  {
    longitude: -58.36917135,
    latitude: -34.63118764,
    name: "HERNANDARIAS 240",
    district: "Boca"
  },
  {
    longitude: -58.36899741,
    latitude: -34.63180328,
    name: "HERNANDARIAS 308",
    district: "Boca"
  },
  {
    longitude: -58.36846091,
    latitude: -34.634117,
    name: "HERNANDARIAS 586",
    district: "Boca"
  },
  {
    longitude: -58.36831226,
    latitude: -34.63506833,
    name: "HERNANDARIAS 674",
    district: "Boca"
  },
  {
    longitude: -58.36816443,
    latitude: -34.63599476,
    name: "HERNANDARIAS 780",
    district: "Boca"
  },
  {
    longitude: -58.36803947,
    latitude: -34.63685639,
    name: "HERNANDARIAS 860",
    district: "Boca"
  },
  {
    longitude: -58.36778511,
    latitude: -34.63842314,
    name: "HERNANDARIAS 1032",
    district: "Boca"
  },
  {
    longitude: -58.36757152,
    latitude: -34.6402502,
    name: "HERNANDARIAS 1240",
    district: "Boca"
  },
  {
    longitude: -58.36724228,
    latitude: -34.64201259,
    name: "HERNANDARIAS 1434",
    district: "Boca"
  },
  {
    longitude: -58.36691234,
    latitude: -34.64446022,
    name: "HERNANDARIAS 1696",
    district: "Boca"
  },
  {
    longitude: -58.3666805,
    latitude: -34.64602359,
    name: "HERNANDARIAS 1864",
    district: "Boca"
  },
  {
    longitude: -58.44834339,
    latitude: -34.5627543,
    name: "HERNANDEZ, JOSE 1827",
    district: "Belgrano"
  },
  {
    longitude: -58.44931321,
    latitude: -34.56332325,
    name: "HERNANDEZ, JOSE 1971",
    district: "Belgrano"
  },
  {
    longitude: -58.4501527,
    latitude: -34.55043291,
    name: "HERNANDEZ, RAFAEL 2796",
    district: "Belgrano"
  },
  {
    longitude: -58.45127073,
    latitude: -34.54989595,
    name: "HERNANDEZ, RAFAEL 2848",
    district: "Belgrano"
  },
  {
    longitude: -58.45164587,
    latitude: -34.54976308,
    name: "HERNANDEZ, RAFAEL 2895",
    district: "Belgrano"
  },
  {
    longitude: -58.45295328,
    latitude: -34.54964117,
    name: "HERNANDEZ, RAFAEL 2968",
    district: "Belgrano"
  },
  {
    longitude: -58.44214579,
    latitude: -34.6057733,
    name: "HIDALGO 1230",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44512314,
    latitude: -34.60279712,
    name: "HIDALGO 1606",
    district: "Villa Crespo"
  },
  {
    longitude: -58.46878582,
    latitude: -34.5785083,
    name: "HOLMBERG 1419",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47020244,
    latitude: -34.57682929,
    name: "HOLMBERG 1641",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.49354475,
    latitude: -34.64423881,
    name: "HOMERO 605",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4882994,
    latitude: -34.64835075,
    name: "HOMERO 1095",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48318838,
    latitude: -34.65235827,
    name: "HOMERO 1553",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47821154,
    latitude: -34.65622513,
    name: "HOMERO 1961",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47651672,
    latitude: -34.65759455,
    name: "HOMERO 2055",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47565119,
    latitude: -34.65830939,
    name: "HOMERO 2113",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47379004,
    latitude: -34.65979021,
    name: "HOMERO 2312",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.42468312,
    latitude: -34.59245844,
    name: "HONDURAS 4457",
    district: "Palermo"
  },
  {
    longitude: -58.42522924,
    latitude: -34.59200617,
    name: "HONDURAS 4505",
    district: "Palermo"
  },
  {
    longitude: -58.43592144,
    latitude: -34.58438656,
    name: "HONDURAS 5563",
    district: "Palermo"
  },
  {
    longitude: -58.43775285,
    latitude: -34.58295513,
    name: "HONDURAS 5749",
    district: "Palermo"
  },
  {
    longitude: -58.43852653,
    latitude: -34.58234921,
    name: "HONDURAS 5815",
    district: "Palermo"
  },
  {
    longitude: -58.44132985,
    latitude: -34.58013881,
    name: "HONDURAS 6067",
    district: "Palermo"
  },
  {
    longitude: -58.41602815,
    latitude: -34.59401452,
    name: "HONDURAS AV. 3777",
    district: "Palermo"
  },
  {
    longitude: -58.42196447,
    latitude: -34.59411078,
    name: "HONDURAS AV. 4153",
    district: "Palermo"
  },
  {
    longitude: -58.45351024,
    latitude: -34.59707334,
    name: "HUAURA 1474",
    district: "Villa Crespo"
  },
  {
    longitude: -58.47711884,
    latitude: -34.68022812,
    name: "HUDSON 4306",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47564556,
    latitude: -34.68136846,
    name: "HUDSON 4446",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47385196,
    latitude: -34.68274847,
    name: "HUDSON 4606",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4161269,
    latitude: -34.60254876,
    name: "HUMAHUACA 3648",
    district: "Almagro"
  },
  {
    longitude: -58.41805715,
    latitude: -34.60222339,
    name: "HUMAHUACA 3806",
    district: "Almagro"
  },
  {
    longitude: -58.42167266,
    latitude: -34.6018203,
    name: "HUMAHUACA 4056",
    district: "Almagro"
  },
  {
    longitude: -58.42497603,
    latitude: -34.60153454,
    name: "HUMAHUACA 4266",
    district: "Almagro"
  },
  {
    longitude: -58.42769374,
    latitude: -34.60126538,
    name: "HUMAHUACA 4434",
    district: "Almagro"
  },
  {
    longitude: -58.43012832,
    latitude: -34.6010225,
    name: "HUMAHUACA 4626",
    district: "Almagro"
  },
  {
    longitude: -58.51996279,
    latitude: -34.64554107,
    name: "HUMAITA 6679",
    district: "Liniers"
  },
  {
    longitude: -58.5270826,
    latitude: -34.64593058,
    name: "HUMAITA 7191",
    district: "Liniers"
  },
  {
    longitude: -58.39216677,
    latitude: -34.62154473,
    name: "HUMBERTO 1° 1831",
    district: "San Cristobal"
  },
  {
    longitude: -58.39533825,
    latitude: -34.62169411,
    name: "HUMBERTO 1° 2087",
    district: "San Cristobal"
  },
  {
    longitude: -58.39696491,
    latitude: -34.62176814,
    name: "HUMBERTO 1° 2207",
    district: "San Cristobal"
  },
  {
    longitude: -58.40000308,
    latitude: -34.6220904,
    name: "HUMBERTO 1° 2425",
    district: "San Cristobal"
  },
  {
    longitude: -58.40556373,
    latitude: -34.62290374,
    name: "HUMBERTO 1° 2881",
    district: "San Cristobal"
  },
  {
    longitude: -58.4098687,
    latitude: -34.62360322,
    name: "HUMBERTO 1° 3169",
    district: "San Cristobal"
  },
  {
    longitude: -58.44090368,
    latitude: -34.58939673,
    name: "HUMBOLDT 1143",
    district: "Chacarita"
  },
  {
    longitude: -58.4389251,
    latitude: -34.58776615,
    name: "HUMBOLDT 1345",
    district: "Palermo"
  },
  {
    longitude: -58.4369928,
    latitude: -34.5863372,
    name: "HUMBOLDT 1509",
    district: "Palermo"
  },
  {
    longitude: -58.4360699,
    latitude: -34.58553618,
    name: "HUMBOLDT 1611",
    district: "Palermo"
  },
  {
    longitude: -58.43415936,
    latitude: -34.58387174,
    name: "HUMBOLDT 1843",
    district: "Palermo"
  },
  {
    longitude: -58.43295499,
    latitude: -34.58282438,
    name: "HUMBOLDT 1959",
    district: "Palermo"
  },
  {
    longitude: -58.43138999,
    latitude: -34.58145735,
    name: "HUMBOLDT 2125",
    district: "Palermo"
  },
  {
    longitude: -58.43075415,
    latitude: -34.58090546,
    name: "HUMBOLDT 2211",
    district: "Palermo"
  },
  {
    longitude: -58.42958692,
    latitude: -34.57988071,
    name: "HUMBOLDT 2341",
    district: "Palermo"
  },
  {
    longitude: -58.44041032,
    latitude: -34.55550951,
    name: "HUSARES 1882",
    district: "Belgrano"
  },
  {
    longitude: -58.49986594,
    latitude: -34.67432924,
    name: "IBAÑEZ 7412",
    district: "Villa Lugano"
  },
  {
    longitude: -58.52412996,
    latitude: -34.64148809,
    name: "IBARROLA 6947",
    district: "Liniers"
  },
  {
    longitude: -58.52551455,
    latitude: -34.64155051,
    name: "IBARROLA 7047",
    district: "Liniers"
  },
  {
    longitude: -58.39852498,
    latitude: -34.62962015,
    name: "INCLAN 2430",
    district: "Parque Patricios"
  },
  {
    longitude: -58.4011857,
    latitude: -34.63010348,
    name: "INCLAN 2622",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40991787,
    latitude: -34.63133259,
    name: "INCLAN 3208",
    district: "Parque Patricios"
  },
  {
    longitude: -58.39272549,
    latitude: -34.61812344,
    name: "INDEPENDENCIA AV. 1869",
    district: "Balvanera"
  },
  {
    longitude: -58.39549201,
    latitude: -34.61827117,
    name: "INDEPENDENCIA AV. 2065",
    district: "Balvanera"
  },
  {
    longitude: -58.39784331,
    latitude: -34.618393,
    name: "INDEPENDENCIA AV. 2217",
    district: "Balvanera"
  },
  {
    longitude: -58.40016645,
    latitude: -34.61852382,
    name: "INDEPENDENCIA AV. 2405",
    district: "Balvanera"
  },
  {
    longitude: -58.40476698,
    latitude: -34.61900999,
    name: "INDEPENDENCIA AV. 2789",
    district: "Balvanera"
  },
  {
    longitude: -58.40717226,
    latitude: -34.61950162,
    name: "INDEPENDENCIA AV. 2957",
    district: "Balvanera"
  },
  {
    longitude: -58.40939616,
    latitude: -34.61996185,
    name: "INDEPENDENCIA AV. 3107",
    district: "Balvanera"
  },
  {
    longitude: -58.36853953,
    latitude: -34.63039566,
    name: "IRALA 185",
    district: "Boca"
  },
  {
    longitude: -58.36762123,
    latitude: -34.63317623,
    name: "IRALA 491",
    district: "Boca"
  },
  {
    longitude: -58.37623874,
    latitude: -34.64872966,
    name: "IRIARTE, GRAL. 1955",
    district: "Barracas"
  },
  {
    longitude: -58.38131312,
    latitude: -34.64960566,
    name: "IRIARTE, GRAL. AV. 2489",
    district: "Barracas"
  },
  {
    longitude: -58.38626456,
    latitude: -34.65056611,
    name: "IRIARTE, GRAL. AV. 2839",
    district: "Barracas"
  },
  {
    longitude: -58.37191373,
    latitude: -34.64592699,
    name: "ISABEL LA CATOLICA 1446",
    district: "Barracas"
  },
  {
    longitude: -58.37160546,
    latitude: -34.64755651,
    name: "ISABEL LA CATOLICA 1650",
    district: "Barracas"
  },
  {
    longitude: -58.37494056,
    latitude: -34.63097383,
    name: "ITUZAINGO 763",
    district: "Barracas"
  },
  {
    longitude: -58.43501312,
    latitude: -34.61006121,
    name: "JAURETCHE, ARTURO 156",
    district: "Caballito"
  },
  {
    longitude: -58.43740892,
    latitude: -34.61106343,
    name: "JAURETCHE, ARTURO 272",
    district: "Caballito"
  },
  {
    longitude: -58.37415859,
    latitude: -34.63184777,
    name: "JOVELLANOS, GASPAR M. DE 106",
    district: "Barracas"
  },
  {
    longitude: -58.37085686,
    latitude: -34.64640205,
    name: "JOVELLANOS, GASPAR M. DE 1513",
    district: "Barracas"
  },
  {
    longitude: -58.43045112,
    latitude: -34.59777765,
    name: "JUFRE 142",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4347906,
    latitude: -34.59314439,
    name: "JUFRE 692",
    district: "Villa Crespo"
  },
  {
    longitude: -58.40555831,
    latitude: -34.61282606,
    name: "JUJUY AV. 251",
    district: "Balvanera"
  },
  {
    longitude: -58.40446242,
    latitude: -34.61644018,
    name: "JUJUY AV. 547",
    district: "Balvanera"
  },
  {
    longitude: -58.40271586,
    latitude: -34.62190432,
    name: "JUJUY AV. 1051",
    district: "San Cristobal"
  },
  {
    longitude: -58.40200714,
    latitude: -34.62498558,
    name: "JUJUY AV. 1285",
    district: "San Cristobal"
  },
  {
    longitude: -58.40104539,
    latitude: -34.62958959,
    name: "JUJUY AV. 1667",
    district: "Parque Patricios"
  },
  {
    longitude: -58.39989324,
    latitude: -34.63297229,
    name: "JUJUY AV. 1942",
    district: "Parque Patricios"
  },
  {
    longitude: -58.39587962,
    latitude: -34.59330511,
    name: "JUNCAL 2009",
    district: "Recoleta"
  },
  {
    longitude: -58.40058287,
    latitude: -34.5917887,
    name: "JUNCAL 2368",
    district: "Recoleta"
  },
  {
    longitude: -58.40959261,
    latitude: -34.58571182,
    name: "JUNCAL 3186",
    district: "Palermo"
  },
  {
    longitude: -58.41228697,
    latitude: -34.58432636,
    name: "JUNCAL 3460",
    district: "Palermo"
  },
  {
    longitude: -58.44199545,
    latitude: -34.55332646,
    name: "JURAMENTO 992",
    district: "Belgrano"
  },
  {
    longitude: -58.44257144,
    latitude: -34.55358188,
    name: "JURAMENTO 1031",
    district: "Belgrano"
  },
  {
    longitude: -58.44405076,
    latitude: -34.55447239,
    name: "JURAMENTO 1169",
    district: "Belgrano"
  },
  {
    longitude: -58.44617016,
    latitude: -34.55573258,
    name: "JURAMENTO 1351",
    district: "Belgrano"
  },
  {
    longitude: -58.44974377,
    latitude: -34.55786334,
    name: "JURAMENTO 1685",
    district: "Belgrano"
  },
  {
    longitude: -58.46365138,
    latitude: -34.56611153,
    name: "JURAMENTO 3125",
    district: "Belgrano"
  },
  {
    longitude: -58.4692111,
    latitude: -34.56939965,
    name: "JURAMENTO 3675",
    district: "Belgrano"
  },
  {
    longitude: -58.42726387,
    latitude: -34.5788615,
    name: "JUSTO, JUAN B. AV. 671",
    district: "Palermo"
  },
  {
    longitude: -58.42857015,
    latitude: -34.58035727,
    name: "JUSTO, JUAN B. AV. 839",
    district: "Palermo"
  },
  {
    longitude: -58.43025762,
    latitude: -34.58205719,
    name: "JUSTO, JUAN B. AV. 1035",
    district: "Palermo"
  },
  {
    longitude: -58.4315877,
    latitude: -34.58289175,
    name: "JUSTO, JUAN B. AV. 1191",
    district: "Palermo"
  },
  {
    longitude: -58.43239865,
    latitude: -34.58348949,
    name: "JUSTO, JUAN B. AV. 1257",
    district: "Palermo"
  },
  {
    longitude: -58.43564068,
    latitude: -34.58587861,
    name: "JUSTO, JUAN B. AV. 1591",
    district: "Palermo"
  },
  {
    longitude: -58.44325117,
    latitude: -34.59389333,
    name: "JUSTO, JUAN B. AV. 2455",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45896832,
    latitude: -34.60497842,
    name: "JUSTO, JUAN B. AV. 4048",
    district: "Caballito"
  },
  {
    longitude: -58.4609161,
    latitude: -34.60629787,
    name: "JUSTO, JUAN B. AV. 4246",
    district: "Caballito"
  },
  {
    longitude: -58.46332779,
    latitude: -34.60765072,
    name: "JUSTO, JUAN B. AV. 4455",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46503892,
    latitude: -34.60929607,
    name: "JUSTO, JUAN B. AV. 4645",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46757034,
    latitude: -34.61103226,
    name: "JUSTO, JUAN B. AV. 4855",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47113022,
    latitude: -34.61290051,
    name: "JUSTO, JUAN B. AV. 5195",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47271009,
    latitude: -34.61431095,
    name: "JUSTO, JUAN B. AV. 5335",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.475398,
    latitude: -34.61710503,
    name: "JUSTO, JUAN B. AV. 5615",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47827742,
    latitude: -34.61968217,
    name: "JUSTO, JUAN B. AV. 5899",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48140596,
    latitude: -34.62234749,
    name: "JUSTO, JUAN B. AV. 6235",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48398403,
    latitude: -34.62423467,
    name: "JUSTO, JUAN B. AV. 6527",
    district: "Floresta"
  },
  {
    longitude: -58.48715144,
    latitude: -34.62545812,
    name: "JUSTO, JUAN B. AV. 6793",
    district: "Floresta"
  },
  {
    longitude: -58.48934935,
    latitude: -34.62635974,
    name: "JUSTO, JUAN B. AV. 6967",
    district: "Floresta"
  },
  {
    longitude: -58.49712707,
    latitude: -34.63064821,
    name: "JUSTO, JUAN B. AV. 7669",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49713512,
    latitude: -34.63088702,
    name: "JUSTO, JUAN B. AV. 7694",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49833667,
    latitude: -34.63130769,
    name: "JUSTO, JUAN B. AV. 7754",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.5006597,
    latitude: -34.63192183,
    name: "JUSTO, JUAN B. AV. 7927",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50255187,
    latitude: -34.63322868,
    name: "JUSTO, JUAN B. AV. 8160",
    district: "Villa Luro"
  },
  {
    longitude: -58.50778237,
    latitude: -34.63440619,
    name: "JUSTO, JUAN B. AV. 8447",
    district: "Villa Luro"
  },
  {
    longitude: -58.51272107,
    latitude: -34.63379865,
    name: "JUSTO, JUAN B. AV. 8855",
    district: "Versalles"
  },
  {
    longitude: -58.51477309,
    latitude: -34.63311562,
    name: "JUSTO, JUAN B. AV. 8991",
    district: "Versalles"
  },
  {
    longitude: -58.51768857,
    latitude: -34.63280695,
    name: "JUSTO, JUAN B. AV. 9123",
    district: "Versalles"
  },
  {
    longitude: -58.52373142,
    latitude: -34.63421765,
    name: "JUSTO, JUAN B. AV. 9459",
    district: "Versalles"
  },
  {
    longitude: -58.525933,
    latitude: -34.63450236,
    name: "JUSTO, JUAN B. AV. 9617",
    district: "Versalles"
  },
  {
    longitude: -58.41916249,
    latitude: -34.57514587,
    name: "KENNEDY, JOHN FITZGERALD 2945",
    district: "Palermo"
  },
  {
    longitude: -58.43763877,
    latitude: -34.55507508,
    name: "LA PAMPA 884",
    district: "Belgrano"
  },
  {
    longitude: -58.44082235,
    latitude: -34.55691505,
    name: "LA PAMPA 1100",
    district: "Belgrano"
  },
  {
    longitude: -58.45887162,
    latitude: -34.56753502,
    name: "LA PAMPA 2900",
    district: "Belgrano"
  },
  {
    longitude: -58.46341834,
    latitude: -34.57028017,
    name: "LA PAMPA 3326",
    district: "Belgrano"
  },
  {
    longitude: -58.46668188,
    latitude: -34.57217597,
    name: "LA PAMPA 3656",
    district: "Belgrano"
  },
  {
    longitude: -58.47862518,
    latitude: -34.57897115,
    name: "LA PAMPA 4992",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.48445807,
    latitude: -34.5823642,
    name: "LA PAMPA 5542",
    district: "Parque Chas"
  },
  {
    longitude: -58.42134082,
    latitude: -34.64450397,
    name: "LA PlatitudeA AV. 2550",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.41998794,
    latitude: -34.64608691,
    name: "LA PlatitudeA AV. 2690",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.40664079,
    latitude: -34.62781921,
    name: "LA RIOJA 1460",
    district: "San Cristobal"
  },
  {
    longitude: -58.48350018,
    latitude: -34.63855932,
    name: "LACARRA 355",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.47110523,
    latitude: -34.64833318,
    name: "LACARRA AV. 1511",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44108731,
    latitude: -34.56595422,
    name: "LACROZE, FEDERICO AV. 1955",
    district: "Palermo"
  },
  {
    longitude: -58.44787891,
    latitude: -34.57533087,
    name: "LACROZE, FEDERICO AV. 2950",
    district: "Colegiales"
  },
  {
    longitude: -58.44860276,
    latitude: -34.57667403,
    name: "LACROZE, FEDERICO AV. 3064",
    district: "Colegiales"
  },
  {
    longitude: -58.44895381,
    latitude: -34.57733048,
    name: "LACROZE, FEDERICO AV. 3118",
    district: "Colegiales"
  },
  {
    longitude: -58.44961162,
    latitude: -34.57849978,
    name: "LACROZE, FEDERICO AV. 3236",
    district: "Colegiales"
  },
  {
    longitude: -58.44998158,
    latitude: -34.57873546,
    name: "LACROZE, FEDERICO AV. 3299",
    district: "Colegiales"
  },
  {
    longitude: -58.51279059,
    latitude: -34.58887156,
    name: "LADINES 3524",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51658488,
    latitude: -34.59121157,
    name: "LADINES 3820",
    district: "Villa Devoto"
  },
  {
    longitude: -58.44370942,
    latitude: -34.63047308,
    name: "LAFERRERE, GREGORIO DE 1186",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44577398,
    latitude: -34.63113938,
    name: "LAFERRERE, GREGORIO DE 1314",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44881825,
    latitude: -34.63209943,
    name: "LAFERRERE, GREGORIO DE 1516",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45099287,
    latitude: -34.63279822,
    name: "LAFERRERE, GREGORIO DE 1784",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45357959,
    latitude: -34.63362048,
    name: "LAFERRERE, GREGORIO DE 2004",
    district: "Flores"
  },
  {
    longitude: -58.45612664,
    latitude: -34.63442863,
    name: "LAFERRERE, GREGORIO DE 2242",
    district: "Flores"
  },
  {
    longitude: -58.45918369,
    latitude: -34.63668244,
    name: "LAFERRERE, GREGORIO DE 2430",
    district: "Flores"
  },
  {
    longitude: -58.46098423,
    latitude: -34.6378373,
    name: "LAFERRERE, GREGORIO DE 2640",
    district: "Flores"
  },
  {
    longitude: -58.46259646,
    latitude: -34.63895911,
    name: "LAFERRERE, GREGORIO DE 2896",
    district: "Flores"
  },
  {
    longitude: -58.4652859,
    latitude: -34.64076348,
    name: "LAFERRERE, GREGORIO DE 3262",
    district: "Flores"
  },
  {
    longitude: -58.46759812,
    latitude: -34.64221551,
    name: "LAFERRERE, GREGORIO DE 3460",
    district: "Flores"
  },
  {
    longitude: -58.46876373,
    latitude: -34.64295349,
    name: "LAFERRERE, GREGORIO DE 3584",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44416732,
    latitude: -34.65853758,
    name: "LAFUENTE 2695",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44122273,
    latitude: -34.6608732,
    name: "LAFUENTE 2949",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43945407,
    latitude: -34.66228434,
    name: "LAFUENTE 3109",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43831713,
    latitude: -34.66318709,
    name: "LAFUENTE 3255",
    district: "Villa Soldati"
  },
  {
    longitude: -58.47897943,
    latitude: -34.64022641,
    name: "LAGUNA 568",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47650484,
    latitude: -34.64218421,
    name: "LAGUNA 852",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47301876,
    latitude: -34.64493554,
    name: "LAGUNA 1160",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46698921,
    latitude: -34.61013368,
    name: "LAMAS, ANDRES 1650",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.42978869,
    latitude: -34.64166609,
    name: "LANZA 2124",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42896177,
    latitude: -34.64486013,
    name: "LANZA 2394",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.40866754,
    latitude: -34.59644394,
    name: "LAPRIDA 1082",
    district: "Recoleta"
  },
  {
    longitude: -58.4077252,
    latitude: -34.59451993,
    name: "LAPRIDA 1226",
    district: "Recoleta"
  },
  {
    longitude: -58.46083373,
    latitude: -34.54521628,
    name: "LARRALDE, CRISOLOGO AV. 1635",
    district: "Nuñez"
  },
  {
    longitude: -58.46296454,
    latitude: -34.5462764,
    name: "LARRALDE, CRISOLOGO AV. 1865",
    district: "Nuñez"
  },
  {
    longitude: -58.46506199,
    latitude: -34.54731616,
    name: "LARRALDE, CRISOLOGO AV. 2083",
    district: "Nuñez"
  },
  {
    longitude: -58.46674954,
    latitude: -34.54816629,
    name: "LARRALDE, CRISOLOGO AV. 2267",
    district: "Nuñez"
  },
  {
    longitude: -58.48762695,
    latitude: -34.64622952,
    name: "LARRAÑAGA, DAMASO 896",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49737403,
    latitude: -34.65474563,
    name: "LARRAYA 1710",
    district: "Mataderos"
  },
  {
    longitude: -58.49515626,
    latitude: -34.65659154,
    name: "LARRAYA 1949",
    district: "Mataderos"
  },
  {
    longitude: -58.48991885,
    latitude: -34.66062896,
    name: "LARRAYA 2391",
    district: "Mataderos"
  },
  {
    longitude: -58.4879538,
    latitude: -34.66221158,
    name: "LARRAYA 2555",
    district: "Mataderos"
  },
  {
    longitude: -58.48560562,
    latitude: -34.66404145,
    name: "LARRAYA 2787",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48373589,
    latitude: -34.66550075,
    name: "LARRAYA 2945",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4809329,
    latitude: -34.66767864,
    name: "LARRAYA 3137",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47964228,
    latitude: -34.66868195,
    name: "LARRAYA 3271",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47055466,
    latitude: -34.67570929,
    name: "LARRAYA 4096",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46918228,
    latitude: -34.67692283,
    name: "LARRAYA 4211",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46692195,
    latitude: -34.67870272,
    name: "LARRAYA 4411",
    district: "Villa Lugano"
  },
  {
    longitude: -58.51362447,
    latitude: -34.64225845,
    name: "LARRAZABAL 290",
    district: "Liniers"
  },
  {
    longitude: -58.50179422,
    latitude: -34.65176207,
    name: "LARRAZABAL 1339",
    district: "Mataderos"
  },
  {
    longitude: -58.49984196,
    latitude: -34.65341457,
    name: "LARRAZABAL 1518",
    district: "Mataderos"
  },
  {
    longitude: -58.48945487,
    latitude: -34.66288426,
    name: "LARRAZABAL 2526",
    district: "Mataderos"
  },
  {
    longitude: -58.48752128,
    latitude: -34.66440348,
    name: "LARRAZABAL 2712",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48462152,
    latitude: -34.66666926,
    name: "LARRAZABAL 2948",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48069451,
    latitude: -34.66975406,
    name: "LARRAZABAL 3296",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48023972,
    latitude: -34.67010185,
    name: "LARRAZABAL 3316",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47282169,
    latitude: -34.67594525,
    name: "LARRAZABAL 3995",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47052839,
    latitude: -34.67762256,
    name: "LARRAZABAL 4196",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46773492,
    latitude: -34.68030876,
    name: "LARRAZABAL 4485",
    district: "Villa Lugano"
  },
  {
    longitude: -58.50635628,
    latitude: -34.64801809,
    name: "LARRAZABAL AV. 911",
    district: "Mataderos"
  },
  {
    longitude: -58.4642823,
    latitude: -34.68149309,
    name: "LARRAZABAL AV. 4651",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4626563,
    latitude: -34.68271008,
    name: "LARRAZABAL AV. 4791",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4630838,
    latitude: -34.68244025,
    name: "LARRAZABAL AV. 5011",
    district: "Villa Lugano"
  },
  {
    longitude: -58.45914692,
    latitude: -34.68534726,
    name: "LARRAZABAL AV. 5111",
    district: "Villa Lugano"
  },
  {
    longitude: -58.50709804,
    latitude: -34.57811599,
    name: "LARSEN 2759",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50805027,
    latitude: -34.57870787,
    name: "LARSEN 2843",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51072532,
    latitude: -34.58036678,
    name: "LARSEN 3059",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.3931782,
    latitude: -34.59083657,
    name: "LAS HERAS GENERAL AV. 1924",
    district: "Recoleta"
  },
  {
    longitude: -58.39534743,
    latitude: -34.58908047,
    name: "LAS HERAS GENERAL AV. 2148",
    district: "Recoleta"
  },
  {
    longitude: -58.39932376,
    latitude: -34.58569541,
    name: "LAS HERAS GENERAL AV. 2506",
    district: "Recoleta"
  },
  {
    longitude: -58.4029313,
    latitude: -34.58355323,
    name: "LAS HERAS GENERAL AV. 2940",
    district: "Recoleta"
  },
  {
    longitude: -58.40775916,
    latitude: -34.58286026,
    name: "LAS HERAS GENERAL AV. 3351",
    district: "Palermo"
  },
  {
    longitude: -58.41100766,
    latitude: -34.58211204,
    name: "LAS HERAS GENERAL AV. 3680",
    district: "Palermo"
  },
  {
    longitude: -58.4134918,
    latitude: -34.58191378,
    name: "LAS HERAS GENERAL AV. 3850",
    district: "Palermo"
  },
  {
    longitude: -58.41604972,
    latitude: -34.58151579,
    name: "LAS HERAS GENERAL AV. 4063",
    district: "Palermo"
  },
  {
    longitude: -58.39043532,
    latitude: -34.5929596,
    name: "LAS HERAS, GENERAL 1646",
    district: "Recoleta"
  },
  {
    longitude: -58.47785616,
    latitude: -34.60323114,
    name: "LASCANO 2332",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4807036,
    latitude: -34.60479062,
    name: "LASCANO 2568",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48378607,
    latitude: -34.60622005,
    name: "LASCANO 2796",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48596874,
    latitude: -34.60740305,
    name: "LASCANO 2966",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48807048,
    latitude: -34.60855684,
    name: "LASCANO 3138",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49055921,
    latitude: -34.6099462,
    name: "LASCANO 3350",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49286185,
    latitude: -34.61121958,
    name: "LASCANO 3540",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49598011,
    latitude: -34.61298378,
    name: "LASCANO 3826",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49730837,
    latitude: -34.6137517,
    name: "LASCANO 3968",
    district: "Monte Castro"
  },
  {
    longitude: -58.5000817,
    latitude: -34.615354,
    name: "LASCANO 4212",
    district: "Monte Castro"
  },
  {
    longitude: -58.50278231,
    latitude: -34.61687464,
    name: "LASCANO 4466",
    district: "Monte Castro"
  },
  {
    longitude: -58.50528227,
    latitude: -34.61816438,
    name: "LASCANO 4664",
    district: "Monte Castro"
  },
  {
    longitude: -58.50757935,
    latitude: -34.61936535,
    name: "LASCANO 4886",
    district: "Monte Castro"
  },
  {
    longitude: -58.51070872,
    latitude: -34.62169784,
    name: "LASCANO 5136",
    district: "Monte Castro"
  },
  {
    longitude: -58.51162718,
    latitude: -34.6225057,
    name: "LASCANO 5208",
    district: "Monte Castro"
  },
  {
    longitude: -58.51385826,
    latitude: -34.62453522,
    name: "LASCANO 5416",
    district: "Monte Castro"
  },
  {
    longitude: -58.51849939,
    latitude: -34.62877463,
    name: "LASCANO 5996",
    district: "Versalles"
  },
  {
    longitude: -58.5205514,
    latitude: -34.62920252,
    name: "LASCANO 6140",
    district: "Versalles"
  },
  {
    longitude: -58.52323173,
    latitude: -34.62976747,
    name: "LASCANO 6368",
    district: "Versalles"
  },
  {
    longitude: -58.52602711,
    latitude: -34.63034933,
    name: "LASCANO 6646",
    district: "Versalles"
  },
  {
    longitude: -58.52906396,
    latitude: -34.63098768,
    name: "LASCANO 6930",
    district: "Versalles"
  },
  {
    longitude: -58.52134172,
    latitude: -34.607488,
    name: "LASTRA AV. 3879",
    district: "Villa Devoto"
  },
  {
    longitude: -58.48553235,
    latitude: -34.61573554,
    name: "LAUSANA 3314",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.3950896,
    latitude: -34.60320911,
    name: "LAVALLE 1981",
    district: "Balvanera"
  },
  {
    longitude: -58.39710491,
    latitude: -34.60324625,
    name: "LAVALLE 2107",
    district: "Balvanera"
  },
  {
    longitude: -58.40033543,
    latitude: -34.60336347,
    name: "LAVALLE 2361",
    district: "Balvanera"
  },
  {
    longitude: -58.40263857,
    latitude: -34.60337982,
    name: "LAVALLE 2535",
    district: "Balvanera"
  },
  {
    longitude: -58.40536359,
    latitude: -34.60327306,
    name: "LAVALLE 2713",
    district: "Balvanera"
  },
  {
    longitude: -58.40779223,
    latitude: -34.60295597,
    name: "LAVALLE 2935",
    district: "Balvanera"
  },
  {
    longitude: -58.41110266,
    latitude: -34.60205832,
    name: "LAVALLE 3193",
    district: "Balvanera"
  },
  {
    longitude: -58.41340609,
    latitude: -34.60128501,
    name: "LAVALLE 3351",
    district: "Almagro"
  },
  {
    longitude: -58.41584834,
    latitude: -34.60049332,
    name: "LAVALLE 3585",
    district: "Almagro"
  },
  {
    longitude: -58.41806326,
    latitude: -34.59980445,
    name: "LAVALLE 3705",
    district: "Almagro"
  },
  {
    longitude: -58.401438,
    latitude: -34.63923127,
    name: "LAVARDEN 229",
    district: "Parque Patricios"
  },
  {
    longitude: -58.40070563,
    latitude: -34.64242959,
    name: "LAVARDEN 450",
    district: "Parque Patricios"
  },
  {
    longitude: -58.51962943,
    latitude: -34.63957871,
    name: "LEGUIZAMON, MARTINIANO 34",
    district: "Liniers"
  },
  {
    longitude: -58.51947024,
    latitude: -34.64079759,
    name: "LEGUIZAMON, MARTINIANO 140",
    district: "Liniers"
  },
  {
    longitude: -58.51919445,
    latitude: -34.64290738,
    name: "LEGUIZAMON, MARTINIANO 338",
    district: "Liniers"
  },
  {
    longitude: -58.51576154,
    latitude: -34.64711947,
    name: "LEGUIZAMON, MARTINIANO 846",
    district: "Liniers"
  },
  {
    longitude: -58.48751418,
    latitude: -34.66926177,
    name: "LEGUIZAMON, MARTINIANO 3242",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48522789,
    latitude: -34.67098363,
    name: "LEGUIZAMON, MARTINIANO 3406",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48370162,
    latitude: -34.67211786,
    name: "LEGUIZAMON, MARTINIANO 3560",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48100699,
    latitude: -34.67411178,
    name: "LEGUIZAMON, MARTINIANO 3810",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47888255,
    latitude: -34.6756787,
    name: "LEGUIZAMON, MARTINIANO 3992",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47353913,
    latitude: -34.67999335,
    name: "LEGUIZAMON, MARTINIANO 4475",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47160902,
    latitude: -34.68148187,
    name: "LEGUIZAMON, MARTINIANO 4649",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4497421,
    latitude: -34.59220976,
    name: "LEIVA 4230",
    district: "Chacarita"
  },
  {
    longitude: -58.45194063,
    latitude: -34.59418023,
    name: "LEIVA 4450",
    district: "Chacarita"
  },
  {
    longitude: -58.44908662,
    latitude: -34.58863883,
    name: "LEMOS, JUAN GREGORIO, GRAL. 236",
    district: "Chacarita"
  },
  {
    longitude: -58.42916131,
    latitude: -34.59716534,
    name: "LERMA 131",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43099354,
    latitude: -34.5952037,
    name: "LERMA 373",
    district: "Villa Crespo"
  },
  {
    longitude: -58.41466315,
    latitude: -34.61340307,
    name: "LINIERS VIRREY 224",
    district: "Almagro"
  },
  {
    longitude: -58.41408087,
    latitude: -34.61774936,
    name: "LINIERS VIRREY 572",
    district: "Almagro"
  },
  {
    longitude: -58.41353712,
    latitude: -34.62491377,
    name: "LINIERS VIRREY 1186",
    district: "Boedo"
  },
  {
    longitude: -58.41324122,
    latitude: -34.62824434,
    name: "LINIERS VIRREY 1450",
    district: "Boedo"
  },
  {
    longitude: -58.4129234,
    latitude: -34.63160354,
    name: "LINIERS VIRREY 1774",
    district: "Boedo"
  },
  {
    longitude: -58.41270224,
    latitude: -34.63419737,
    name: "LINIERS VIRREY 2000",
    district: "Boedo"
  },
  {
    longitude: -58.41163732,
    latitude: -34.63786749,
    name: "LINIERS VIRREY 2384",
    district: "Boedo"
  },
  {
    longitude: -58.47331064,
    latitude: -34.60163162,
    name: "LINNEO 1951",
    district: "Paternal"
  },
  {
    longitude: -58.47383508,
    latitude: -34.60415574,
    name: "LINNEO 2137",
    district: "Paternal"
  },
  {
    longitude: -58.51954621,
    latitude: -34.63069379,
    name: "LISBOA 585",
    district: "Versalles"
  },
  {
    longitude: -58.52711253,
    latitude: -34.6171786,
    name: "LISTA, RAMON, CORONEL 5594",
    district: "Villa Real"
  },
  {
    longitude: -58.52823274,
    latitude: -34.61817238,
    name: "LISTA, RAMON, CORONEL 5710",
    district: "Villa Real"
  },
  {
    longitude: -58.47448422,
    latitude: -34.58504921,
    name: "LLERENA 2579",
    district: "Parque Chas"
  },
  {
    longitude: -58.47641089,
    latitude: -34.5865949,
    name: "LLERENA 2725",
    district: "Parque Chas"
  },
  {
    longitude: -58.47939638,
    latitude: -34.58889937,
    name: "LLERENA 3063",
    district: "Parque Chas"
  },
  {
    longitude: -58.48100569,
    latitude: -34.5901397,
    name: "LLERENA 3193",
    district: "Parque Chas"
  },
  {
    longitude: -58.52038077,
    latitude: -34.61751623,
    name: "LOPE DE VEGA AV. 2623",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52453608,
    latitude: -34.61430712,
    name: "LOPE DE VEGA AV. 3037",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51058265,
    latitude: -34.59007818,
    name: "LOPEZ, CARLOS ANTONIO 3459",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52021215,
    latitude: -34.59597844,
    name: "LOPEZ, CARLOS ANTONIO 4293",
    district: "Villa Devoto"
  },
  {
    longitude: -58.39645486,
    latitude: -34.58681985,
    name: "LOPEZ, VICENTE 2306",
    district: "Recoleta"
  },
  {
    longitude: -58.44671709,
    latitude: -34.56458175,
    name: "LORETO, VIRREY 1935",
    district: "Belgrano"
  },
  {
    longitude: -58.45605567,
    latitude: -34.57528167,
    name: "LORETO, VIRREY 3224",
    district: "Colegiales"
  },
  {
    longitude: -58.38845997,
    latitude: -34.63739569,
    name: "LOS PATOS 1869",
    district: "Barracas"
  },
  {
    longitude: -58.43328133,
    latitude: -34.59843469,
    name: "LOYOLA 222",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43526261,
    latitude: -34.59631445,
    name: "LOYOLA 492",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4365587,
    latitude: -34.59493172,
    name: "LOYOLA 634",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44280069,
    latitude: -34.58869606,
    name: "LOYOLA 1490",
    district: "Chacarita"
  },
  {
    longitude: -58.44456384,
    latitude: -34.58736263,
    name: "LOYOLA 1620",
    district: "Chacarita"
  },
  {
    longitude: -58.48965288,
    latitude: -34.59797385,
    name: "LOZANO, PEDRO 2737",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49332551,
    latitude: -34.60016031,
    name: "LOZANO, PEDRO 3047",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49773705,
    latitude: -34.6028794,
    name: "LOZANO, PEDRO 3418",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50077087,
    latitude: -34.6046924,
    name: "LOZANO, PEDRO 3720",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50215898,
    latitude: -34.60554057,
    name: "LOZANO, PEDRO 3834",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.5056819,
    latitude: -34.60767492,
    name: "LOZANO, PEDRO 4184",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50777143,
    latitude: -34.60892146,
    name: "LOZANO, PEDRO 4360",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51037165,
    latitude: -34.61053527,
    name: "LOZANO, PEDRO 4544",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51375547,
    latitude: -34.61264807,
    name: "LOZANO, PEDRO 4810",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51725747,
    latitude: -34.61504031,
    name: "LOZANO, PEDRO 5067",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51941019,
    latitude: -34.61707778,
    name: "LOZANO, PEDRO 5239",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52346768,
    latitude: -34.62093867,
    name: "LOZANO, PEDRO 5663",
    district: "Villa Real"
  },
  {
    longitude: -58.4737221,
    latitude: -34.58070431,
    name: "LUGONES 1412",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.3801622,
    latitude: -34.65650365,
    name: "LUJAN 2510",
    district: "Barracas"
  },
  {
    longitude: -58.38399231,
    latitude: -34.65671303,
    name: "LUJAN 2754",
    district: "Barracas"
  },
  {
    longitude: -58.39178067,
    latitude: -34.65654551,
    name: "MAGALDI, AGUSTIN 1850",
    district: "Barracas"
  },
  {
    longitude: -58.39168914,
    latitude: -34.65772432,
    name: "MAGALDI, AGUSTIN 1904",
    district: "Barracas"
  },
  {
    longitude: -58.36656575,
    latitude: -34.64066396,
    name: "MAGALLANES 1140",
    district: "Boca"
  },
  {
    longitude: -58.46319328,
    latitude: -34.60533481,
    name: "MAGARIÑOS CERVANTES, A. 1583",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46539186,
    latitude: -34.60627103,
    name: "MAGARIÑOS CERVANTES, A. 1739",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46813221,
    latitude: -34.60744161,
    name: "MAGARIÑOS CERVANTES, A. 1955",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47166285,
    latitude: -34.60907511,
    name: "MAGARIÑOS CERVANTES, A. 2221",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47378558,
    latitude: -34.61018765,
    name: "MAGARIÑOS CERVANTES, A. 2413",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47647068,
    latitude: -34.61161181,
    name: "MAGARIÑOS CERVANTES, A. 2631",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47916989,
    latitude: -34.61303486,
    name: "MAGARIÑOS CERVANTES, A. 2847",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48173961,
    latitude: -34.6143884,
    name: "MAGARIÑOS CERVANTES, A. 3051",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49208359,
    latitude: -34.62152624,
    name: "MAGARIÑOS CERVANTES, A. 4093",
    district: "Floresta"
  },
  {
    longitude: -58.49725496,
    latitude: -34.62499472,
    name: "MAGARIÑOS CERVANTES, A. 4577",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49987933,
    latitude: -34.6261509,
    name: "MAGARIÑOS CERVANTES, A. 4787",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50350932,
    latitude: -34.62900358,
    name: "MAGARIÑOS CERVANTES, A. 5035",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50572364,
    latitude: -34.63101143,
    name: "MAGARIÑOS CERVANTES, A. 5249",
    district: "Villa Luro"
  },
  {
    longitude: -58.50831629,
    latitude: -34.63332462,
    name: "MAGARIÑOS CERVANTES, A. 5511",
    district: "Villa Luro"
  },
  {
    longitude: -58.43083425,
    latitude: -34.59321918,
    name: "MALABIA 1242",
    district: "Palermo"
  },
  {
    longitude: -58.42904843,
    latitude: -34.59202952,
    name: "MALABIA 1414",
    district: "Palermo"
  },
  {
    longitude: -58.42736266,
    latitude: -34.59091646,
    name: "MALABIA 1578",
    district: "Palermo"
  },
  {
    longitude: -58.42293755,
    latitude: -34.58799271,
    name: "MALABIA 2062",
    district: "Palermo"
  },
  {
    longitude: -58.4211431,
    latitude: -34.58683925,
    name: "MALABIA 2208",
    district: "Palermo"
  },
  {
    longitude: -58.41821595,
    latitude: -34.58500746,
    name: "MALABIA 2438",
    district: "Palermo"
  },
  {
    longitude: -58.41517903,
    latitude: -34.59059716,
    name: "MANSILLA, LUCIO NORBERTO, GENERAL 3691",
    district: "Palermo"
  },
  {
    longitude: -58.4157678,
    latitude: -34.59017364,
    name: "MANSILLA, LUCIO NORBERTO, GENERAL 3741",
    district: "Palermo"
  },
  {
    longitude: -58.46642404,
    latitude: -34.5459592,
    name: "MANZANARES 2102",
    district: "Nuñez"
  },
  {
    longitude: -58.46853128,
    latitude: -34.54691877,
    name: "MANZANARES 2331",
    district: "Nuñez"
  },
  {
    longitude: -58.46853128,
    latitude: -34.54691877,
    name: "MANZANARES 2331",
    district: "Nuñez"
  },
  {
    longitude: -58.43816705,
    latitude: -34.60720748,
    name: "MARECHAL, LEOPOLDO 944",
    district: "Caballito"
  },
  {
    longitude: -58.42601197,
    latitude: -34.61410045,
    name: "MARMOL, JOSE 34",
    district: "Almagro"
  },
  {
    longitude: -58.4259463,
    latitude: -34.6163179,
    name: "MARMOL, JOSE 225",
    district: "Almagro"
  },
  {
    longitude: -58.42535778,
    latitude: -34.62091856,
    name: "MARMOL, JOSE 635",
    district: "Almagro"
  },
  {
    longitude: -58.42437488,
    latitude: -34.62586982,
    name: "MARMOL, JOSE 961",
    district: "Boedo"
  },
  {
    longitude: -58.4235956,
    latitude: -34.62924338,
    name: "MARMOL, JOSE 1215",
    district: "Boedo"
  },
  {
    longitude: -58.42275514,
    latitude: -34.6327921,
    name: "MARMOL, JOSE 1551",
    district: "Boedo"
  },
  {
    longitude: -58.42141234,
    latitude: -34.63806246,
    name: "MARMOL, JOSE 2029",
    district: "Boedo"
  },
  {
    longitude: -58.42109563,
    latitude: -34.6392878,
    name: "MARMOL, JOSE 2165",
    district: "Boedo"
  },
  {
    longitude: -58.44446261,
    latitude: -34.65939717,
    name: "MARTI, JOSE 2920",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4419548,
    latitude: -34.66138803,
    name: "MARTI, JOSE 3150",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44025867,
    latitude: -34.66283977,
    name: "MARTI, JOSE 3307",
    district: "Villa Soldati"
  },
  {
    longitude: -58.46963295,
    latitude: -34.64594954,
    name: "MARTINEZ CASTRO 1229",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.45162452,
    latitude: -34.59708743,
    name: "MARTINEZ ROSAS 1338",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44609944,
    latitude: -34.58083145,
    name: "MARTINEZ, ENRIQUE, GRAL. 187",
    district: "Colegiales"
  },
  {
    longitude: -58.44924723,
    latitude: -34.5792276,
    name: "MARTINEZ, ENRIQUE, GRAL. 503",
    district: "Colegiales"
  },
  {
    longitude: -58.45378779,
    latitude: -34.57703203,
    name: "MARTINEZ, ENRIQUE, GRAL. 901",
    district: "Colegiales"
  },
  {
    longitude: -58.4673458,
    latitude: -34.57052375,
    name: "MARTINEZ, ENRIQUE, GRAL. 1960",
    district: "Belgrano"
  },
  {
    longitude: -58.46917633,
    latitude: -34.56834846,
    name: "MARTINEZ, ENRIQUE, GRAL. 2184",
    district: "Belgrano"
  },
  {
    longitude: -58.46941026,
    latitude: -34.56808405,
    name: "MARTINEZ, ENRIQUE, GRAL. 2204",
    district: "Belgrano"
  },
  {
    longitude: -58.47055357,
    latitude: -34.56661483,
    name: "MARTINEZ, ENRIQUE, GRAL. 2349",
    district: "Belgrano"
  },
  {
    longitude: -58.44615533,
    latitude: -34.57929331,
    name: "MATIENZO, BENJAMIN, TENIENTE 3175",
    district: "Colegiales"
  },
  {
    longitude: -58.43895225,
    latitude: -34.56932245,
    name: "MAURE 2037",
    district: "Palermo"
  },
  {
    longitude: -58.44534036,
    latitude: -34.57498126,
    name: "MAURE 2833",
    district: "Colegiales"
  },
  {
    longitude: -58.44685159,
    latitude: -34.57695218,
    name: "MAURE 3011",
    district: "Colegiales"
  },
  {
    longitude: -58.44800511,
    latitude: -34.57887576,
    name: "MAURE 3223",
    district: "Colegiales"
  },
  {
    longitude: -58.44962446,
    latitude: -34.58194028,
    name: "MAURE 3569",
    district: "Chacarita"
  },
  {
    longitude: -58.41696333,
    latitude: -34.61168269,
    name: "MAZA 58",
    district: "Almagro"
  },
  {
    longitude: -58.41587727,
    latitude: -34.61464032,
    name: "MAZA 318",
    district: "Almagro"
  },
  {
    longitude: -58.41521105,
    latitude: -34.61912592,
    name: "MAZA 658",
    district: "Almagro"
  },
  {
    longitude: -58.41459194,
    latitude: -34.6259247,
    name: "MAZA 1248",
    district: "Boedo"
  },
  {
    longitude: -58.41448942,
    latitude: -34.62900756,
    name: "MAZA 1510",
    district: "Boedo"
  },
  {
    longitude: -58.4144259,
    latitude: -34.63319263,
    name: "MAZA 1870",
    district: "Boedo"
  },
  {
    longitude: -58.41351497,
    latitude: -34.63697342,
    name: "MAZA 2196",
    district: "Boedo"
  },
  {
    longitude: -58.47563485,
    latitude: -34.65101353,
    name: "MEDINA 1649",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47090478,
    latitude: -34.65476839,
    name: "MEDINA 1911",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46741852,
    latitude: -34.56898872,
    name: "MELIAN AV. 2054",
    district: "Belgrano"
  },
  {
    longitude: -58.46998633,
    latitude: -34.56653394,
    name: "MELIAN AV. 2365",
    district: "Belgrano"
  },
  {
    longitude: -58.48636778,
    latitude: -34.59835867,
    name: "MELINCUE 2548",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48846426,
    latitude: -34.59960718,
    name: "MELINCUE 2728",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49525003,
    latitude: -34.60355311,
    name: "MELINCUE 3291",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49782571,
    latitude: -34.60508847,
    name: "MELINCUE 3587",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4989075,
    latitude: -34.60573168,
    name: "MELINCUE 3665",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50099682,
    latitude: -34.60708759,
    name: "MELINCUE 3855",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50307456,
    latitude: -34.60836405,
    name: "MELINCUE 4007",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50633269,
    latitude: -34.61034407,
    name: "MELINCUE 4349",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50812808,
    latitude: -34.61141597,
    name: "MELINCUE 4479",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51156284,
    latitude: -34.61344775,
    name: "MELINCUE 4739",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51566379,
    latitude: -34.61619016,
    name: "MELINCUE 5073",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51633144,
    latitude: -34.61683147,
    name: "MELINCUE 5113",
    district: "Villa Devoto"
  },
  {
    longitude: -58.44275954,
    latitude: -34.61354056,
    name: "MENDEZ DE ANDES 634",
    district: "Caballito"
  },
  {
    longitude: -58.45201935,
    latitude: -34.61699762,
    name: "MENDEZ DE ANDES 1240",
    district: "Caballito"
  },
  {
    longitude: -58.45454662,
    latitude: -34.61775943,
    name: "MENDEZ DE ANDES 1450",
    district: "Caballito"
  },
  {
    longitude: -58.45820961,
    latitude: -34.61919409,
    name: "MENDEZ DE ANDES 1788",
    district: "Flores"
  },
  {
    longitude: -58.4626681,
    latitude: -34.621237,
    name: "MENDEZ DE ANDES 2146",
    district: "Flores"
  },
  {
    longitude: -58.46465168,
    latitude: -34.62211015,
    name: "MENDEZ DE ANDES 2338",
    district: "Flores"
  },
  {
    longitude: -58.5115112,
    latitude: -34.60175283,
    name: "MERCEDES 3840",
    district: "Villa Devoto"
  },
  {
    longitude: -58.39241383,
    latitude: -34.61578419,
    name: "MEXICO 1848",
    district: "Balvanera"
  },
  {
    longitude: -58.39597576,
    latitude: -34.61603484,
    name: "MEXICO 2094",
    district: "Balvanera"
  },
  {
    longitude: -58.39880972,
    latitude: -34.61632293,
    name: "MEXICO 2266",
    district: "Balvanera"
  },
  {
    longitude: -58.40074163,
    latitude: -34.61655116,
    name: "MEXICO 2458",
    district: "Balvanera"
  },
  {
    longitude: -58.40769784,
    latitude: -34.61821553,
    name: "MEXICO 2980",
    district: "Balvanera"
  },
  {
    longitude: -58.40964853,
    latitude: -34.61881701,
    name: "MEXICO 3120",
    district: "Balvanera"
  },
  {
    longitude: -58.41119055,
    latitude: -34.61914162,
    name: "MEXICO 3206",
    district: "Balvanera"
  },
  {
    longitude: -58.47149947,
    latitude: -34.60218088,
    name: "MIGUEL ANGEL 1865",
    district: "Paternal"
  },
  {
    longitude: -58.43336122,
    latitude: -34.56692957,
    name: "MIGUELETES 738",
    district: "Palermo"
  },
  {
    longitude: -58.43665937,
    latitude: -34.56499865,
    name: "MIGUELETES 1046",
    district: "Palermo"
  },
  {
    longitude: -58.44685984,
    latitude: -34.5539247,
    name: "MIÑONES 2260",
    district: "Belgrano"
  },
  {
    longitude: -58.51059105,
    latitude: -34.64068797,
    name: "MIRALLA 142",
    district: "Liniers"
  },
  {
    longitude: -58.50579911,
    latitude: -34.64432311,
    name: "MIRALLA 562",
    district: "Liniers"
  },
  {
    longitude: -58.50285264,
    latitude: -34.64665404,
    name: "MIRALLA 822",
    district: "Mataderos"
  },
  {
    longitude: -58.49848924,
    latitude: -34.65005489,
    name: "MIRALLA 1204",
    district: "Mataderos"
  },
  {
    longitude: -58.48628439,
    latitude: -34.65956377,
    name: "MIRALLA 2296",
    district: "Mataderos"
  },
  {
    longitude: -58.48195646,
    latitude: -34.66293196,
    name: "MIRALLA 2680",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47987053,
    latitude: -34.66456475,
    name: "MIRALLA 2844",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47806087,
    latitude: -34.66596765,
    name: "MIRALLA 2986",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4759605,
    latitude: -34.66759062,
    name: "MIRALLA 3190",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47436814,
    latitude: -34.66898408,
    name: "MIRALLA 3335",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47143652,
    latitude: -34.67124723,
    name: "MIRALLA 3589",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46902733,
    latitude: -34.67314077,
    name: "MIRALLA 3821",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49294532,
    latitude: -34.61336124,
    name: "MIRANDA 3683",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49444733,
    latitude: -34.6147784,
    name: "MIRANDA 3848",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49633221,
    latitude: -34.61638044,
    name: "MIRANDA 4074",
    district: "Monte Castro"
  },
  {
    longitude: -58.50038069,
    latitude: -34.61987032,
    name: "MIRANDA 4518",
    district: "Monte Castro"
  },
  {
    longitude: -58.50278975,
    latitude: -34.62093305,
    name: "MIRANDA 4718",
    district: "Monte Castro"
  },
  {
    longitude: -58.50685031,
    latitude: -34.62383347,
    name: "MIRANDA 5104",
    district: "Monte Castro"
  },
  {
    longitude: -58.51041303,
    latitude: -34.6270561,
    name: "MIRANDA 5408",
    district: "Villa Luro"
  },
  {
    longitude: -58.51321392,
    latitude: -34.6295735,
    name: "MIRANDA 5708",
    district: "Villa Luro"
  },
  {
    longitude: -58.51595032,
    latitude: -34.63203254,
    name: "MIRANDA 6086",
    district: "Versalles"
  },
  {
    longitude: -58.38898747,
    latitude: -34.64177187,
    name: "MIRAVE 2849",
    district: "Barracas"
  },
  {
    longitude: -58.49371446,
    latitude: -34.58226854,
    name: "MISTRAL, GABRIELA 2209",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.5127934,
    latitude: -34.59406421,
    name: "MISTRAL, GABRIELA 3763",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51400641,
    latitude: -34.59481291,
    name: "MISTRAL, GABRIELA 3851",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52320744,
    latitude: -34.60048571,
    name: "MISTRAL, GABRIELA 4643",
    district: "Villa Devoto"
  },
  {
    longitude: -58.39380233,
    latitude: -34.60811496,
    name: "MITRE, BARTOLOME 1918",
    district: "Balvanera"
  },
  {
    longitude: -58.42693772,
    latitude: -34.61048932,
    name: "MITRE, BARTOLOME 4266",
    district: "Almagro"
  },
  {
    longitude: -58.42924293,
    latitude: -34.61081114,
    name: "MITRE, BARTOLOME 4420",
    district: "Almagro"
  },
  {
    longitude: -58.44334485,
    latitude: -34.6244272,
    name: "MITRE, EMILIO 228",
    district: "Caballito"
  },
  {
    longitude: -58.4301937,
    latitude: -34.64827999,
    name: "MOM 2549",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42310988,
    latitude: -34.65340333,
    name: "MOM 3213",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.39479552,
    latitude: -34.63861537,
    name: "MONASTERIO 286",
    district: "Parque Patricios"
  },
  {
    longitude: -58.44468485,
    latitude: -34.54918764,
    name: "MONROE 945",
    district: "Belgrano"
  },
  {
    longitude: -58.44554169,
    latitude: -34.54968932,
    name: "MONROE 1005",
    district: "Belgrano"
  },
  {
    longitude: -58.44554169,
    latitude: -34.54968932,
    name: "MONROE 1005",
    district: "Belgrano"
  },
  {
    longitude: -58.44704786,
    latitude: -34.5505806,
    name: "MONROE 1163",
    district: "Belgrano"
  },
  {
    longitude: -58.44792196,
    latitude: -34.55110113,
    name: "MONROE 1201",
    district: "Belgrano"
  },
  {
    longitude: -58.44907529,
    latitude: -34.55178587,
    name: "MONROE 1315",
    district: "Belgrano"
  },
  {
    longitude: -58.45046631,
    latitude: -34.55260804,
    name: "MONROE 1483",
    district: "Belgrano"
  },
  {
    longitude: -58.45141196,
    latitude: -34.55317091,
    name: "MONROE 1525",
    district: "Belgrano"
  },
  {
    longitude: -58.4536765,
    latitude: -34.55451281,
    name: "MONROE 1723",
    district: "Belgrano"
  },
  {
    longitude: -58.45564515,
    latitude: -34.55568055,
    name: "MONROE 1925",
    district: "Belgrano"
  },
  {
    longitude: -58.46597875,
    latitude: -34.56182109,
    name: "MONROE 3061",
    district: "Belgrano"
  },
  {
    longitude: -58.4493088,
    latitude: -34.55699665,
    name: "MONTAÑESES 2150",
    district: "Belgrano"
  },
  {
    longitude: -58.47718327,
    latitude: -34.65160947,
    name: "MONTE 4437",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46698059,
    latitude: -34.58870458,
    name: "MONTENEGRO 1393",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46796185,
    latitude: -34.58797695,
    name: "MONTENEGRO 1481",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46981131,
    latitude: -34.58662414,
    name: "MONTENEGRO 1653",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.37678387,
    latitude: -34.6303686,
    name: "MONTES DE OCA, MANUEL AV. 164",
    district: "Barracas"
  },
  {
    longitude: -58.37452209,
    latitude: -34.63844435,
    name: "MONTES DE OCA, MANUEL AV. 886",
    district: "Barracas"
  },
  {
    longitude: -58.37390492,
    latitude: -34.64171191,
    name: "MONTES DE OCA, MANUEL AV. 1184",
    district: "Barracas"
  },
  {
    longitude: -58.3736799,
    latitude: -34.64283755,
    name: "MONTES DE OCA, MANUEL AV. 1286",
    district: "Barracas"
  },
  {
    longitude: -58.37345484,
    latitude: -34.64398955,
    name: "MONTES DE OCA, MANUEL AV. 1430",
    district: "Barracas"
  },
  {
    longitude: -58.37308996,
    latitude: -34.64592551,
    name: "MONTES DE OCA, MANUEL AV. 1640",
    district: "Barracas"
  },
  {
    longitude: -58.37271342,
    latitude: -34.64800977,
    name: "MONTES DE OCA, MANUEL AV. 1792",
    district: "Barracas"
  },
  {
    longitude: -58.5261463,
    latitude: -34.64270468,
    name: "MONTIEL 292",
    district: "Liniers"
  },
  {
    longitude: -58.52605177,
    latitude: -34.64417406,
    name: "MONTIEL 444",
    district: "Liniers"
  },
  {
    longitude: -58.525798,
    latitude: -34.6480373,
    name: "MONTIEL 834",
    district: "Liniers"
  },
  {
    longitude: -58.51956564,
    latitude: -34.6559504,
    name: "MONTIEL 1606",
    district: "Mataderos"
  },
  {
    longitude: -58.51068542,
    latitude: -34.66298041,
    name: "MONTIEL 2350",
    district: "Mataderos"
  },
  {
    longitude: -58.50518038,
    latitude: -34.66756205,
    name: "MONTIEL 2756",
    district: "Mataderos"
  },
  {
    longitude: -58.50273468,
    latitude: -34.66959398,
    name: "MONTIEL 3006",
    district: "Mataderos"
  },
  {
    longitude: -58.50090529,
    latitude: -34.67111289,
    name: "MONTIEL 3160",
    district: "Mataderos"
  },
  {
    longitude: -58.50029983,
    latitude: -34.6716163,
    name: "MONTIEL 3206",
    district: "Mataderos"
  },
  {
    longitude: -58.49366043,
    latitude: -34.67621818,
    name: "MONTIEL 3806",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48100684,
    latitude: -34.68585704,
    name: "MONTIEL 4855",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4759191,
    latitude: -34.68971128,
    name: "MONTIEL 5285",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47179792,
    latitude: -34.69283077,
    name: "MONTIEL 5625",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46960554,
    latitude: -34.69449513,
    name: "MONTIEL 5805",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46839412,
    latitude: -34.69530834,
    name: "MONTIEL 5905",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.48890889,
    latitude: -34.58816227,
    name: "MORAN, PEDRO 2249",
    district: "Agronomia"
  },
  {
    longitude: -58.49588524,
    latitude: -34.59247718,
    name: "MORAN, PEDRO 2877",
    district: "Agronomia"
  },
  {
    longitude: -58.49827531,
    latitude: -34.59404687,
    name: "MORAN, PEDRO 3060",
    district: "Agronomia"
  },
  {
    longitude: -58.50349288,
    latitude: -34.59728465,
    name: "MORAN, PEDRO 3450",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5074269,
    latitude: -34.59965685,
    name: "MORAN, PEDRO 3740",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50894028,
    latitude: -34.60065205,
    name: "MORAN, PEDRO 3862",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51059194,
    latitude: -34.60166989,
    name: "MORAN, PEDRO 4002",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51580086,
    latitude: -34.60486745,
    name: "MORAN, PEDRO 4444",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51937231,
    latitude: -34.60707365,
    name: "MORAN, PEDRO 4748",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52378357,
    latitude: -34.60999645,
    name: "MORAN, PEDRO 5074",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52534156,
    latitude: -34.61106666,
    name: "MORAN, PEDRO 5180",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45461804,
    latitude: -34.62185462,
    name: "MORELOS 312",
    district: "Caballito"
  },
  {
    longitude: -58.43520501,
    latitude: -34.62096869,
    name: "MORENO, JOSE MARIA AV. 274",
    district: "Caballito"
  },
  {
    longitude: -58.48115112,
    latitude: -34.64903839,
    name: "MORETO 1280",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46522827,
    latitude: -34.62187059,
    name: "MORON 2370",
    district: "Flores"
  },
  {
    longitude: -58.48491175,
    latitude: -34.62740141,
    name: "MORON 3910",
    district: "Floresta"
  },
  {
    longitude: -58.48763366,
    latitude: -34.62806199,
    name: "MORON 4116",
    district: "Floresta"
  },
  {
    longitude: -58.49079224,
    latitude: -34.62923651,
    name: "MORON 4340",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49280108,
    latitude: -34.63021691,
    name: "MORON 4528",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4950827,
    latitude: -34.63102853,
    name: "MORON 4716",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50590613,
    latitude: -34.58861422,
    name: "MOSCONI GENERAL AV. 3192",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.508073,
    latitude: -34.58994943,
    name: "MOSCONI GENERAL AV. 3348",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51064958,
    latitude: -34.59149727,
    name: "MOSCONI GENERAL AV. 3582",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51506261,
    latitude: -34.59425786,
    name: "MOSCONI GENERAL AV. 3870",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51757447,
    latitude: -34.59580982,
    name: "MOSCONI GENERAL AV. 4146",
    district: "Villa Devoto"
  },
  {
    longitude: -58.48100512,
    latitude: -34.58721225,
    name: "MOSCU 5190",
    district: "Parque Chas"
  },
  {
    longitude: -58.48301255,
    latitude: -34.58868653,
    name: "MOSCU 5408",
    district: "Parque Chas"
  },
  {
    longitude: -58.48874604,
    latitude: -34.64455338,
    name: "MOZART 651",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47923783,
    latitude: -34.65201016,
    name: "MOZART 1503",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44804569,
    latitude: -34.59844233,
    name: "MUÑECAS 1041",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45072903,
    latitude: -34.59601894,
    name: "MUÑECAS 1387",
    district: "Villa Crespo"
  },
  {
    longitude: -58.42714374,
    latitude: -34.61888628,
    name: "MUÑIZ 458",
    district: "Almagro"
  },
  {
    longitude: -58.42643592,
    latitude: -34.62280513,
    name: "MUÑIZ 758",
    district: "Boedo"
  },
  {
    longitude: -58.42544687,
    latitude: -34.62706389,
    name: "MUÑIZ 1110",
    district: "Boedo"
  },
  {
    longitude: -58.42463072,
    latitude: -34.63065975,
    name: "MUÑIZ 1458",
    district: "Boedo"
  },
  {
    longitude: -58.42299896,
    latitude: -34.63706992,
    name: "MUÑIZ 1906",
    district: "Boedo"
  },
  {
    longitude: -58.49771506,
    latitude: -34.62663531,
    name: "MURATURE 4660",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50171327,
    latitude: -34.62940528,
    name: "MURATURE 4990",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50274089,
    latitude: -34.63029531,
    name: "MURATURE 5078",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50439723,
    latitude: -34.63179846,
    name: "MURATURE 5230",
    district: "Villa Luro"
  },
  {
    longitude: -58.51860764,
    latitude: -34.64112405,
    name: "MURGUIONDO 171",
    district: "Liniers"
  },
  {
    longitude: -58.5179966,
    latitude: -34.64410665,
    name: "MURGUIONDO 485",
    district: "Liniers"
  },
  {
    longitude: -58.50983436,
    latitude: -34.65032309,
    name: "MURGUIONDO 1171",
    district: "Mataderos"
  },
  {
    longitude: -58.49108646,
    latitude: -34.66519255,
    name: "MURGUIONDO 2891",
    district: "Mataderos"
  },
  {
    longitude: -58.48962938,
    latitude: -34.66640719,
    name: "MURGUIONDO 3009",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48637796,
    latitude: -34.66892936,
    name: "MURGUIONDO 3289",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48448107,
    latitude: -34.67038921,
    name: "MURGUIONDO 3405",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48173379,
    latitude: -34.67248647,
    name: "MURGUIONDO 3695",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47852042,
    latitude: -34.67486883,
    name: "MURGUIONDO 3991",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47755636,
    latitude: -34.67556641,
    name: "MURGUIONDO 4005",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47476901,
    latitude: -34.67771341,
    name: "MURGUIONDO 4297",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47448079,
    latitude: -34.67794219,
    name: "MURGUIONDO 4315",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46992177,
    latitude: -34.6815005,
    name: "MURGUIONDO 4751",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44630435,
    latitude: -34.59827646,
    name: "MURILLO 973",
    district: "Villa Crespo"
  },
  {
    longitude: -58.47017566,
    latitude: -34.57032457,
    name: "NAON, ROMULO 2081",
    district: "Belgrano"
  },
  {
    longitude: -58.47254825,
    latitude: -34.56752047,
    name: "NAON, ROMULO 2387",
    district: "Belgrano"
  },
  {
    longitude: -58.48799965,
    latitude: -34.58991473,
    name: "NAVARRO 2293",
    district: "Agronomia"
  },
  {
    longitude: -58.49445608,
    latitude: -34.59389417,
    name: "NAVARRO 2855",
    district: "Agronomia"
  },
  {
    longitude: -58.49792187,
    latitude: -34.59603301,
    name: "NAVARRO 3131",
    district: "Agronomia"
  },
  {
    longitude: -58.50094062,
    latitude: -34.59789961,
    name: "NAVARRO 3353",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50370893,
    latitude: -34.59961635,
    name: "NAVARRO 3565",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50539761,
    latitude: -34.60066843,
    name: "NAVARRO 3695",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51068721,
    latitude: -34.60393358,
    name: "NAVARRO 4153",
    district: "Villa Devoto"
  },
  {
    longitude: -58.511403,
    latitude: -34.60437324,
    name: "NAVARRO 4219",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51442938,
    latitude: -34.60623115,
    name: "NAVARRO 4461",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51858922,
    latitude: -34.60879692,
    name: "NAVARRO 4783",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52066835,
    latitude: -34.61016607,
    name: "NAVARRO 4945",
    district: "Villa Devoto"
  },
  {
    longitude: -58.48849419,
    latitude: -34.59851979,
    name: "NAZARRE 2695",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48946438,
    latitude: -34.59909786,
    name: "NAZARRE 2785",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49520004,
    latitude: -34.60252426,
    name: "NAZARRE 3231",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49737873,
    latitude: -34.60382112,
    name: "NAZARRE 3455",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50068256,
    latitude: -34.60578571,
    name: "NAZARRE 3765",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50400683,
    latitude: -34.60775483,
    name: "NAZARRE 4029",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50587855,
    latitude: -34.60887412,
    name: "NAZARRE 4251",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50832246,
    latitude: -34.61035449,
    name: "NAZARRE 4453",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51099612,
    latitude: -34.61193551,
    name: "NAZARRE 4637",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51191609,
    latitude: -34.61248158,
    name: "NAZARRE 4703",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51760165,
    latitude: -34.61679645,
    name: "NAZARRE 5154",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51861581,
    latitude: -34.6177607,
    name: "NAZARRE 5246",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52363082,
    latitude: -34.62243021,
    name: "NAZARRE 5779",
    district: "Villa Real"
  },
  {
    longitude: -58.52593531,
    latitude: -34.62361,
    name: "NAZARRE 5969",
    district: "Villa Real"
  },
  {
    longitude: -58.52801477,
    latitude: -34.62468706,
    name: "NAZARRE 6103",
    district: "Villa Real"
  },
  {
    longitude: -58.4976894,
    latitude: -34.59118697,
    name: "NAZCA 4025",
    district: "Agronomia"
  },
  {
    longitude: -58.49838019,
    latitude: -34.59042397,
    name: "NAZCA 4141",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49977741,
    latitude: -34.58887604,
    name: "NAZCA 4351",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50107913,
    latitude: -34.58743339,
    name: "NAZCA 4551",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50314424,
    latitude: -34.58514158,
    name: "NAZCA 4823",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50484573,
    latitude: -34.583266,
    name: "NAZCA 5073",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.5054485,
    latitude: -34.58260296,
    name: "NAZCA 5157",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.36321206,
    latitude: -34.62895744,
    name: "NECOCHEA 496",
    district: "Boca"
  },
  {
    longitude: -58.36022007,
    latitude: -34.63087398,
    name: "NECOCHEA 790",
    district: "Boca"
  },
  {
    longitude: -58.35778257,
    latitude: -34.63424076,
    name: "NECOCHEA 1132",
    district: "Boca"
  },
  {
    longitude: -58.44208717,
    latitude: -34.61600676,
    name: "NEUQUEN 748",
    district: "Caballito"
  },
  {
    longitude: -58.44464105,
    latitude: -34.61591344,
    name: "NEUQUEN 875",
    district: "Caballito"
  },
  {
    longitude: -58.4470409,
    latitude: -34.61591654,
    name: "NEUQUEN 1009",
    district: "Caballito"
  },
  {
    longitude: -58.45053168,
    latitude: -34.61582099,
    name: "NEUQUEN 1214",
    district: "Caballito"
  },
  {
    longitude: -58.45356097,
    latitude: -34.61572998,
    name: "NEUQUEN 1420",
    district: "Caballito"
  },
  {
    longitude: -58.45625096,
    latitude: -34.61581488,
    name: "NEUQUEN 1608",
    district: "Caballito"
  },
  {
    longitude: -58.46081532,
    latitude: -34.61663947,
    name: "NEUQUEN 1996",
    district: "Flores"
  },
  {
    longitude: -58.4630462,
    latitude: -34.61732517,
    name: "NEUQUEN 2148",
    district: "Flores"
  },
  {
    longitude: -58.46463146,
    latitude: -34.61799335,
    name: "NEUQUEN 2246",
    district: "Flores"
  },
  {
    longitude: -58.46727561,
    latitude: -34.61910836,
    name: "NEUQUEN 2408",
    district: "Flores"
  },
  {
    longitude: -58.46890458,
    latitude: -34.61967859,
    name: "NEUQUEN 2540",
    district: "Flores"
  },
  {
    longitude: -58.47196312,
    latitude: -34.62062603,
    name: "NEUQUEN 2764",
    district: "Flores"
  },
  {
    longitude: -58.47436643,
    latitude: -34.62137304,
    name: "NEUQUEN 2920",
    district: "Flores"
  },
  {
    longitude: -58.44706838,
    latitude: -34.57963334,
    name: "NEWBERY, JORGE 3234",
    district: "Colegiales"
  },
  {
    longitude: -58.45269739,
    latitude: -34.59052014,
    name: "NEWBERY, JORGE AV. 4226",
    district: "Chacarita"
  },
  {
    longitude: -58.45363564,
    latitude: -34.59142998,
    name: "NEWBERY, JORGE AV. 4346",
    district: "Chacarita"
  },
  {
    longitude: -58.45523994,
    latitude: -34.59296966,
    name: "NEWBERY, JORGE AV. 4528",
    district: "Chacarita"
  },
  {
    longitude: -58.45635345,
    latitude: -34.593988,
    name: "NEWBERY, JORGE AV. 4652",
    district: "Chacarita"
  },
  {
    longitude: -58.45729222,
    latitude: -34.59490014,
    name: "NEWBERY, JORGE AV. 4762",
    district: "Chacarita"
  },
  {
    longitude: -58.43238536,
    latitude: -34.58259126,
    name: "NICARAGUA 5458",
    district: "Palermo"
  },
  {
    longitude: -58.43503169,
    latitude: -34.58054141,
    name: "NICARAGUA 5746",
    district: "Palermo"
  },
  {
    longitude: -58.4359511,
    latitude: -34.57981898,
    name: "NICARAGUA 5836",
    district: "Palermo"
  },
  {
    longitude: -58.43798683,
    latitude: -34.57822275,
    name: "NICARAGUA 6032",
    district: "Palermo"
  },
  {
    longitude: -58.48493513,
    latitude: -34.59894116,
    name: "NOGOYA 2480",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4869481,
    latitude: -34.60011576,
    name: "NOGOYA 2650",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49053242,
    latitude: -34.60220361,
    name: "NOGOYA 2990",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49236889,
    latitude: -34.60327555,
    name: "NOGOYA 3126",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49694437,
    latitude: -34.60593687,
    name: "NOGOYA 3558",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49914474,
    latitude: -34.60722417,
    name: "NOGOYA 3762",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50262423,
    latitude: -34.60931954,
    name: "NOGOYA 4042",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50375403,
    latitude: -34.60999822,
    name: "NOGOYA 4190",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50764552,
    latitude: -34.61229698,
    name: "NOGOYA 4494",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50836087,
    latitude: -34.61272204,
    name: "NOGOYA 4546",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50973645,
    latitude: -34.61353424,
    name: "NOGOYA 4660",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51878149,
    latitude: -34.6206635,
    name: "NOGOYA 5408",
    district: "Villa Real"
  },
  {
    longitude: -58.51988592,
    latitude: -34.6217243,
    name: "NOGOYA 5530",
    district: "Villa Real"
  },
  {
    longitude: -58.52514603,
    latitude: -34.62470484,
    name: "NOGOYA 5988",
    district: "Versalles"
  },
  {
    longitude: -58.52952495,
    latitude: -34.62693284,
    name: "NOGOYA 6370",
    district: "Versalles"
  },
  {
    longitude: -58.48953429,
    latitude: -34.58640407,
    name: "NUEVA YORK 2195",
    district: "Agronomia"
  },
  {
    longitude: -58.50587519,
    latitude: -34.59661549,
    name: "NUEVA YORK 3540",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50759275,
    latitude: -34.59767631,
    name: "NUEVA YORK 3672",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50970351,
    latitude: -34.59898038,
    name: "NUEVA YORK 3824",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5182488,
    latitude: -34.60415151,
    name: "NUEVA YORK 4553",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52186128,
    latitude: -34.60637304,
    name: "NUEVA YORK 4847",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5245037,
    latitude: -34.60814281,
    name: "NUEVA YORK 5005",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52642866,
    latitude: -34.6094558,
    name: "NUEVA YORK 5151",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45924956,
    latitude: -34.54560955,
    name: "NUÑEZ 1540",
    district: "Nuñez"
  },
  {
    longitude: -58.46049871,
    latitude: -34.54623358,
    name: "NUÑEZ 1684",
    district: "Nuñez"
  },
  {
    longitude: -58.46116062,
    latitude: -34.54656122,
    name: "NUÑEZ 1724",
    district: "Nuñez"
  },
  {
    longitude: -58.46237965,
    latitude: -34.54717582,
    name: "NUÑEZ 1872",
    district: "Nuñez"
  },
  {
    longitude: -58.46516689,
    latitude: -34.54858148,
    name: "NUÑEZ 2180",
    district: "Nuñez"
  },
  {
    longitude: -58.42997348,
    latitude: -34.65755177,
    name: "O'GORMAN 3173",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42941611,
    latitude: -34.6579586,
    name: "O'GORMAN 3205",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4284844,
    latitude: -34.65863281,
    name: "O'GORMAN 3321",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42725018,
    latitude: -34.65987208,
    name: "O'GORMAN 3415",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42609975,
    latitude: -34.66129039,
    name: "O'GORMAN 3591",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44799574,
    latitude: -34.56567801,
    name: "O'HIGGINS 1476",
    district: "Belgrano"
  },
  {
    longitude: -58.45333857,
    latitude: -34.55947099,
    name: "O'HIGGINS 2142",
    district: "Belgrano"
  },
  {
    longitude: -58.45419817,
    latitude: -34.55847424,
    name: "O'HIGGINS 2244",
    district: "Belgrano"
  },
  {
    longitude: -58.46332008,
    latitude: -34.54885013,
    name: "O'HIGGINS 3394",
    district: "Nuñez"
  },
  {
    longitude: -58.46332008,
    latitude: -34.54885013,
    name: "O'HIGGINS 3394",
    district: "Nuñez"
  },
  {
    longitude: -58.46589482,
    latitude: -34.54478234,
    name: "O'HIGGINS 3900",
    district: "Nuñez"
  },
  {
    longitude: -58.46741919,
    latitude: -34.54273712,
    name: "O'HIGGINS 4186",
    district: "Nuñez"
  },
  {
    longitude: -58.47089009,
    latitude: -34.53806034,
    name: "O'HIGGINS 4798",
    district: "Nuñez"
  },
  {
    longitude: -58.49952208,
    latitude: -34.57831276,
    name: "OBISPO SAN ALBERTO 2336",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50063786,
    latitude: -34.57900142,
    name: "OBISPO SAN ALBERTO 2440",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.51295092,
    latitude: -34.58663217,
    name: "OBISPO SAN ALBERTO 3452",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51464074,
    latitude: -34.58767294,
    name: "OBISPO SAN ALBERTO 3558",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51720302,
    latitude: -34.58924744,
    name: "OBISPO SAN ALBERTO 3754",
    district: "Villa Devoto"
  },
  {
    longitude: -58.45937474,
    latitude: -34.57643454,
    name: "OLAGUER Y FELIU, VIRREY 3462",
    district: "Colegiales"
  },
  {
    longitude: -58.36725122,
    latitude: -34.63895196,
    name: "OLAVARRIA 1060",
    district: "Boca"
  },
  {
    longitude: -58.37352405,
    latitude: -34.63952045,
    name: "OLAVARRIA 1623",
    district: "Barracas"
  },
  {
    longitude: -58.44496157,
    latitude: -34.60456286,
    name: "OLAYA 1346",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44657451,
    latitude: -34.60291374,
    name: "OLAYA 1590",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44338018,
    latitude: -34.55125741,
    name: "OLAZABAL 945",
    district: "Belgrano"
  },
  {
    longitude: -58.44371443,
    latitude: -34.5514557,
    name: "OLAZABAL 999",
    district: "Belgrano"
  },
  {
    longitude: -58.44438123,
    latitude: -34.55189841,
    name: "OLAZABAL 1055",
    district: "Belgrano"
  },
  {
    longitude: -58.44700099,
    latitude: -34.55340525,
    name: "OLAZABAL 1289",
    district: "Belgrano"
  },
  {
    longitude: -58.44762708,
    latitude: -34.55377887,
    name: "OLAZABAL 1337",
    district: "Belgrano"
  },
  {
    longitude: -58.45015784,
    latitude: -34.55532529,
    name: "OLAZABAL 1571",
    district: "Belgrano"
  },
  {
    longitude: -58.45117904,
    latitude: -34.5558856,
    name: "OLAZABAL 1671",
    district: "Belgrano"
  },
  {
    longitude: -58.47071275,
    latitude: -34.5676445,
    name: "OLAZABAL AV. 3582",
    district: "Belgrano"
  },
  {
    longitude: -58.47146237,
    latitude: -34.56809944,
    name: "OLAZABAL AV. 3644",
    district: "Belgrano"
  },
  {
    longitude: -58.5172744,
    latitude: -34.63948522,
    name: "OLIDEN 18",
    district: "Liniers"
  },
  {
    longitude: -58.51685209,
    latitude: -34.6411769,
    name: "OLIDEN 172",
    district: "Liniers"
  },
  {
    longitude: -58.51653891,
    latitude: -34.64243077,
    name: "OLIDEN 310",
    district: "Liniers"
  },
  {
    longitude: -58.50860567,
    latitude: -34.64918012,
    name: "OLIDEN 1080",
    district: "Mataderos"
  },
  {
    longitude: -58.50384291,
    latitude: -34.65315527,
    name: "OLIDEN 1506",
    district: "Mataderos"
  },
  {
    longitude: -58.49209259,
    latitude: -34.66275228,
    name: "OLIDEN 2606",
    district: "Mataderos"
  },
  {
    longitude: -58.48945244,
    latitude: -34.6648412,
    name: "OLIDEN 2852",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48653782,
    latitude: -34.66714094,
    name: "OLIDEN 3090",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48416156,
    latitude: -34.66900792,
    name: "OLIDEN 3262",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48131723,
    latitude: -34.6710885,
    name: "OLIDEN 3520",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47652958,
    latitude: -34.67477486,
    name: "OLIDEN 4005",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4739313,
    latitude: -34.67668166,
    name: "OLIDEN 4278",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4733423,
    latitude: -34.67713987,
    name: "OLIDEN 4330",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46973544,
    latitude: -34.67995679,
    name: "OLIDEN 4656",
    district: "Villa Lugano"
  },
  {
    longitude: -58.46854355,
    latitude: -34.68089595,
    name: "OLIDEN 4768",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48576398,
    latitude: -34.64121507,
    name: "OLIVERA AV. 450",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48504878,
    latitude: -34.64357062,
    name: "OLIVERA AV. 550",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44244867,
    latitude: -34.56879232,
    name: "OLLEROS 2223",
    district: "Palermo"
  },
  {
    longitude: -58.44880599,
    latitude: -34.57894139,
    name: "OLLEROS 3252",
    district: "Colegiales"
  },
  {
    longitude: -58.45319879,
    latitude: -34.58637871,
    name: "OLLEROS 4112",
    district: "Chacarita"
  },
  {
    longitude: -58.46136877,
    latitude: -34.60321598,
    name: "OROÑO, NICASIO 2034",
    district: "Paternal"
  },
  {
    longitude: -58.46051871,
    latitude: -34.60048637,
    name: "OROÑO, NICASIO 2270",
    district: "Paternal"
  },
  {
    longitude: -58.45986464,
    latitude: -34.59844271,
    name: "OROÑO, NICASIO 2466",
    district: "Paternal"
  },
  {
    longitude: -58.47091057,
    latitude: -34.67303408,
    name: "OZANAM FEDERICO, BEATO 5205",
    district: "Villa Lugano"
  },
  {
    longitude: -58.40057446,
    latitude: -34.58732773,
    name: "PACHECO DE MELO, JOSE ANDRES 2552",
    district: "Recoleta"
  },
  {
    longitude: -58.44641082,
    latitude: -34.5965832,
    name: "PADILLA 1084",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4470111,
    latitude: -34.59604047,
    name: "PADILLA 1126",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44760799,
    latitude: -34.59550103,
    name: "PADILLA 1238",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4591765,
    latitude: -34.61693986,
    name: "PAEZ 1785",
    district: "Flores"
  },
  {
    longitude: -58.46123194,
    latitude: -34.6179208,
    name: "PAEZ 1959",
    district: "Flores"
  },
  {
    longitude: -58.46421641,
    latitude: -34.61892064,
    name: "PAEZ 2195",
    district: "Flores"
  },
  {
    longitude: -58.46641482,
    latitude: -34.61984257,
    name: "PAEZ 2395",
    district: "Flores"
  },
  {
    longitude: -58.46684941,
    latitude: -34.62002695,
    name: "PAEZ 2409",
    district: "Flores"
  },
  {
    longitude: -58.46951449,
    latitude: -34.62092207,
    name: "PAEZ 2607",
    district: "Flores"
  },
  {
    longitude: -58.47253714,
    latitude: -34.62193889,
    name: "PAEZ 2836",
    district: "Flores"
  },
  {
    longitude: -58.47561972,
    latitude: -34.62278751,
    name: "PAEZ 3040",
    district: "Flores"
  },
  {
    longitude: -58.4181492,
    latitude: -34.64318004,
    name: "PAGOLA, CNEL. 3940",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.36399054,
    latitude: -34.63306026,
    name: "PALOS 176",
    district: "Boca"
  },
  {
    longitude: -58.36291066,
    latitude: -34.63456544,
    name: "PALOS 372",
    district: "Boca"
  },
  { longitude: -58.36192894, latitude: -34.6361594, name: "PALOS 560", district: "Boca" },
  {
    longitude: -58.36135114,
    latitude: -34.63712717,
    name: "PALOS 690",
    district: "Boca"
  },
  {
    longitude: -58.44922935,
    latitude: -34.57287895,
    name: "PALPA 2806",
    district: "Colegiales"
  },
  {
    longitude: -58.45083579,
    latitude: -34.57587428,
    name: "PALPA 3092",
    district: "Colegiales"
  },
  {
    longitude: -58.45421534,
    latitude: -34.58063841,
    name: "PALPA 3595",
    district: "Chacarita"
  },
  {
    longitude: -58.41416121,
    latitude: -34.592632,
    name: "PARAGUAY 3474",
    district: "Palermo"
  },
  {
    longitude: -58.41631345,
    latitude: -34.59091866,
    name: "PARAGUAY 3730",
    district: "Palermo"
  },
  {
    longitude: -58.41914099,
    latitude: -34.5886754,
    name: "PARAGUAY 3972",
    district: "Palermo"
  },
  {
    longitude: -58.42677838,
    latitude: -34.58278927,
    name: "PARAGUAY 4742",
    district: "Palermo"
  },
  {
    longitude: -58.42977943,
    latitude: -34.58028355,
    name: "PARAGUAY 5083",
    district: "Palermo"
  },
  {
    longitude: -58.43167391,
    latitude: -34.57880074,
    name: "PARAGUAY 5275",
    district: "Palermo"
  },
  {
    longitude: -58.4325266,
    latitude: -34.57813654,
    name: "PARAGUAY 5367",
    district: "Palermo"
  },
  {
    longitude: -58.43341824,
    latitude: -34.57743524,
    name: "PARAGUAY 5441",
    district: "Palermo"
  },
  {
    longitude: -58.51064411,
    latitude: -34.59722874,
    name: "PAREJA 3795",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51360398,
    latitude: -34.59903819,
    name: "PAREJA 4083",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51720829,
    latitude: -34.60127944,
    name: "PAREJA 4373",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51842178,
    latitude: -34.60202416,
    name: "PAREJA 4475",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52253042,
    latitude: -34.60456397,
    name: "PAREJA 4795",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52345086,
    latitude: -34.60513323,
    name: "PAREJA 4855",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51087732,
    latitude: -34.64406748,
    name: "PATRON 5990",
    district: "Liniers"
  },
  {
    longitude: -58.51355469,
    latitude: -34.64644327,
    name: "PATRON 6218",
    district: "Liniers"
  },
  {
    longitude: -58.51566286,
    latitude: -34.6483245,
    name: "PATRON 6550",
    district: "Liniers"
  },
  {
    longitude: -58.51811593,
    latitude: -34.6505224,
    name: "PATRON 6896",
    district: "Liniers"
  },
  {
    longitude: -58.51966856,
    latitude: -34.65191827,
    name: "PATRON 7090",
    district: "Liniers"
  },
  {
    longitude: -58.52146975,
    latitude: -34.65354469,
    name: "PATRON 7310",
    district: "Liniers"
  },
  {
    longitude: -58.52259015,
    latitude: -34.65455845,
    name: "PATRON 7442",
    district: "Liniers"
  },
  {
    longitude: -58.3920468,
    latitude: -34.62646176,
    name: "PAVON 1880",
    district: "San Cristobal"
  },
  {
    longitude: -58.39381312,
    latitude: -34.62665686,
    name: "PAVON 2042",
    district: "San Cristobal"
  },
  {
    longitude: -58.39639205,
    latitude: -34.62690923,
    name: "PAVON 2256",
    district: "San Cristobal"
  },
  {
    longitude: -58.39950681,
    latitude: -34.62730313,
    name: "PAVON 2432",
    district: "San Cristobal"
  },
  {
    longitude: -58.40180578,
    latitude: -34.62756171,
    name: "PAVON 2626",
    district: "San Cristobal"
  },
  {
    longitude: -58.40351583,
    latitude: -34.62777862,
    name: "PAVON 2786",
    district: "San Cristobal"
  },
  {
    longitude: -58.40632188,
    latitude: -34.62812669,
    name: "PAVON 2978",
    district: "San Cristobal"
  },
  {
    longitude: -58.40943917,
    latitude: -34.62864795,
    name: "PAVON 3168",
    district: "San Cristobal"
  },
  {
    longitude: -58.41148823,
    latitude: -34.62917742,
    name: "PAVON 3284",
    district: "San Cristobal"
  },
  {
    longitude: -58.45776617,
    latitude: -34.60235269,
    name: "PAYSANDU 1952",
    district: "Paternal"
  },
  {
    longitude: -58.45749041,
    latitude: -34.6014644,
    name: "PAYSANDU 2022",
    district: "Paternal"
  },
  {
    longitude: -58.47304222,
    latitude: -34.53835852,
    name: "PAZ, GRAL. AV. 900",
    district: "Nuñez"
  },
  {
    longitude: -58.50022852,
    latitude: -34.67498416,
    name: "PAZ, GRAL. AV. 14214",
    district: "Villa Lugano"
  },
  {
    longitude: -58.4804726,
    latitude: -34.68989488,
    name: "PAZ, GRAL. AV. 15884",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47775215,
    latitude: -34.69194988,
    name: "PAZ, GRAL. AV. 16106",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47474694,
    latitude: -34.69421842,
    name: "PAZ, GRAL. AV. 16368",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.43616714,
    latitude: -34.65599329,
    name: "PEDERNERA 2787",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4348044,
    latitude: -34.65732994,
    name: "PEDERNERA 2951",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43310694,
    latitude: -34.65889997,
    name: "PEDERNERA 3204",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43198409,
    latitude: -34.66004694,
    name: "PEDERNERA 3382",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43014734,
    latitude: -34.66213917,
    name: "PEDERNERA 3574",
    district: "Villa Soldati"
  },
  {
    longitude: -58.48509528,
    latitude: -34.56171257,
    name: "PEDRAZA, MANUELA 4494",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.48639743,
    latitude: -34.56231334,
    name: "PEDRAZA, MANUELA 4610",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49069002,
    latitude: -34.56436167,
    name: "PEDRAZA, MANUELA 5078",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49284557,
    latitude: -34.56537628,
    name: "PEDRAZA, MANUELA 5256",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49543162,
    latitude: -34.56670717,
    name: "PEDRAZA, MANUELA 5472",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.49863513,
    latitude: -34.56847497,
    name: "PEDRAZA, MANUELA 5766",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.50327043,
    latitude: -34.57104301,
    name: "PEDRAZA, MANUELA 6140",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.50405429,
    latitude: -34.57147831,
    name: "PEDRAZA, MANUELA 6218",
    district: "Villa Urquiza"
  },
  {
    longitude: -58.3983202,
    latitude: -34.58998616,
    name: "PEÑA 2369",
    district: "Recoleta"
  },
  {
    longitude: -58.40929816,
    latitude: -34.64233142,
    name: "PEPIRI 365",
    district: "Parque Patricios"
  },
  {
    longitude: -58.47123307,
    latitude: -34.63977994,
    name: "PERGAMINO 659",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.44640581,
    latitude: -34.6610257,
    name: "PERGAMINO 3010",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44246011,
    latitude: -34.66415184,
    name: "PERGAMINO 3394",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44212344,
    latitude: -34.66442151,
    name: "PERGAMINO 3408",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43691611,
    latitude: -34.66779724,
    name: "PERGAMINO 3694",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43607894,
    latitude: -34.66828051,
    name: "PERGAMINO 3740",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4412865,
    latitude: -34.63029228,
    name: "PERON, EVA AV. 1115",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45031631,
    latitude: -34.63676046,
    name: "PERON, EVA AV. 1991",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45213014,
    latitude: -34.63778013,
    name: "PERON, EVA AV. 2159",
    district: "Flores"
  },
  {
    longitude: -58.46006606,
    latitude: -34.64250842,
    name: "PERON, EVA AV. 3051",
    district: "Flores"
  },
  {
    longitude: -58.49954425,
    latitude: -34.67295386,
    name: "PERON, EVA AV. 7220",
    district: "Villa Lugano"
  },
  {
    longitude: -58.40727925,
    latitude: -34.60776132,
    name: "PERON, JUAN DOMINGO, TTE. GENERAL 2875",
    district: "Balvanera"
  },
  {
    longitude: -58.41002367,
    latitude: -34.60787894,
    name: "PERON, JUAN DOMINGO, TTE. GENERAL 3073",
    district: "Balvanera"
  },
  {
    longitude: -58.41242289,
    latitude: -34.60765053,
    name: "PERON, JUAN DOMINGO, TTE. GENERAL 3281",
    district: "Balvanera"
  },
  {
    longitude: -58.41572754,
    latitude: -34.60697488,
    name: "PERON, JUAN DOMINGO, TTE. GENERAL 3471",
    district: "Almagro"
  },
  {
    longitude: -58.36602389,
    latitude: -34.62761064,
    name: "PI Y MARGALL 739",
    district: "Boca"
  },
  {
    longitude: -58.39509267,
    latitude: -34.63455264,
    name: "PICHINCHA 2151",
    district: "Parque Patricios"
  },
  {
    longitude: -58.47139606,
    latitude: -34.5393073,
    name: "PICO 2102",
    district: "Nuñez"
  },
  {
    longitude: -58.48736124,
    latitude: -34.67838135,
    name: "PIEDRA BUENA AV. 3921",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48424948,
    latitude: -34.68106051,
    name: "PIEDRA BUENA AV. 4255",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48239986,
    latitude: -34.68263934,
    name: "PIEDRA BUENA AV. 4381",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47192354,
    latitude: -34.69021054,
    name: "PIEDRA BUENA AV. 5193",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47162227,
    latitude: -34.69043824,
    name: "PIEDRA BUENA AV. 5207",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46804503,
    latitude: -34.69314652,
    name: "PIEDRA BUENA AV. 5513",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46688823,
    latitude: -34.69402002,
    name: "PIEDRA BUENA AV. 5605",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.37223624,
    latitude: -34.63054859,
    name: "PIEDRAS 1954",
    district: "Barracas"
  },
  {
    longitude: -58.51220917,
    latitude: -34.64491316,
    name: "PIERES 487",
    district: "Liniers"
  },
  {
    longitude: -58.50903512,
    latitude: -34.64735453,
    name: "PIERES 761",
    district: "Liniers"
  },
  {
    longitude: -58.50689834,
    latitude: -34.64907208,
    name: "PIERES 953",
    district: "Mataderos"
  },
  {
    longitude: -58.45933451,
    latitude: -34.5696938,
    name: "PINO, VIRREY DEL 3055",
    district: "Belgrano"
  },
  {
    longitude: -58.46295629,
    latitude: -34.57162219,
    name: "PINO, VIRREY DEL 3381",
    district: "Belgrano"
  },
  {
    longitude: -58.46379089,
    latitude: -34.57218586,
    name: "PINO, VIRREY DEL 3432",
    district: "Belgrano"
  },
  {
    longitude: -58.37255973,
    latitude: -34.63681962,
    name: "PINZON 1495",
    district: "Barracas"
  },
  {
    longitude: -58.50983153,
    latitude: -34.65095143,
    name: "PIZARRO 6360",
    district: "Mataderos"
  },
  {
    longitude: -58.51160583,
    latitude: -34.65265761,
    name: "PIZARRO 6604",
    district: "Mataderos"
  },
  {
    longitude: -58.51249749,
    latitude: -34.65351572,
    name: "PIZARRO 6752",
    district: "Mataderos"
  },
  {
    longitude: -58.51388512,
    latitude: -34.65485764,
    name: "PIZARRO 6954",
    district: "Mataderos"
  },
  {
    longitude: -58.51541548,
    latitude: -34.6563308,
    name: "PIZARRO 7188",
    district: "Mataderos"
  },
  {
    longitude: -58.51777317,
    latitude: -34.65842931,
    name: "PIZARRO 7467",
    district: "Mataderos"
  },
  {
    longitude: -58.44896719,
    latitude: -34.61191225,
    name: "PLANES 1115",
    district: "Caballito"
  },
  {
    longitude: -58.45311777,
    latitude: -34.61360371,
    name: "PLANES 1373",
    district: "Caballito"
  },
  {
    longitude: -58.44816644,
    latitude: -34.54722722,
    name: "PLAZA, VICTORINO DE LA, DR. 913",
    district: "Belgrano"
  },
  {
    longitude: -58.44826754,
    latitude: -34.54811403,
    name: "PLAZA, VICTORINO DE LA, DR. 1010",
    district: "Belgrano"
  },
  {
    longitude: -58.44866067,
    latitude: -34.54988755,
    name: "PLAZA, VICTORINO DE LA, DR. 1182",
    district: "Belgrano"
  },
  {
    longitude: -58.45163188,
    latitude: -34.5506853,
    name: "PLAZA, VICTORINO DE LA, DR. 1510",
    district: "Belgrano"
  },
  {
    longitude: -58.45151324,
    latitude: -34.54828013,
    name: "PLAZA, VICTORINO DE LA, DR. 1720",
    district: "Belgrano"
  },
  {
    longitude: -58.45116561,
    latitude: -34.54670303,
    name: "PLAZA, VICTORINO DE LA, DR. 1892",
    district: "Belgrano"
  },
  {
    longitude: -58.51090582,
    latitude: -34.64180424,
    name: "POLA 289",
    district: "Liniers"
  },
  {
    longitude: -58.50885039,
    latitude: -34.64337043,
    name: "POLA 459",
    district: "Liniers"
  },
  {
    longitude: -58.50689814,
    latitude: -34.64485146,
    name: "POLA 621",
    district: "Liniers"
  },
  {
    longitude: -58.50399257,
    latitude: -34.647137,
    name: "POLA 895",
    district: "Mataderos"
  },
  {
    longitude: -58.50276256,
    latitude: -34.64811586,
    name: "POLA 1009",
    district: "Mataderos"
  },
  {
    longitude: -58.49921189,
    latitude: -34.65087219,
    name: "POLA 1319",
    district: "Mataderos"
  },
  {
    longitude: -58.49052358,
    latitude: -34.65764822,
    name: "POLA 2105",
    district: "Mataderos"
  },
  {
    longitude: -58.48772923,
    latitude: -34.65982442,
    name: "POLA 2345",
    district: "Mataderos"
  },
  {
    longitude: -58.48386346,
    latitude: -34.66283468,
    name: "POLA 2697",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48228804,
    latitude: -34.66406554,
    name: "POLA 2817",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48029507,
    latitude: -34.66561774,
    name: "POLA 2963",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47319803,
    latitude: -34.67106152,
    name: "POLA 3592",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44639435,
    latitude: -34.65953383,
    name: "PORTELA 2807",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44337863,
    latitude: -34.66194242,
    name: "PORTELA 3109",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44109334,
    latitude: -34.66376275,
    name: "PORTELA 3325",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44026136,
    latitude: -34.66442496,
    name: "PORTELA 3405",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42100471,
    latitude: -34.60722104,
    name: "POTOSI 3881",
    district: "Almagro"
  },
  {
    longitude: -58.42209721,
    latitude: -34.6072192,
    name: "POTOSI 3943",
    district: "Almagro"
  },
  {
    longitude: -58.42404409,
    latitude: -34.6072198,
    name: "POTOSI 4061",
    district: "Almagro"
  },
  {
    longitude: -58.51430604,
    latitude: -34.63902362,
    name: "PRELADO DON BUENAVENTURA RISSO PATRON 9",
    district: "Liniers"
  },
  {
    longitude: -58.44596789,
    latitude: -34.63337948,
    name: "PRIMERA JUNTA 1439",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4511086,
    latitude: -34.63510753,
    name: "PRIMERA JUNTA 1894",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4532517,
    latitude: -34.63578605,
    name: "PRIMERA JUNTA 2050",
    district: "Flores"
  },
  {
    longitude: -58.4548353,
    latitude: -34.6362925,
    name: "PRIMERA JUNTA 2220",
    district: "Flores"
  },
  {
    longitude: -58.4556485,
    latitude: -34.63665424,
    name: "PRIMERA JUNTA 2308",
    district: "Flores"
  },
  {
    longitude: -58.45736045,
    latitude: -34.63836621,
    name: "PRIMERA JUNTA 2442",
    district: "Flores"
  },
  {
    longitude: -58.45865028,
    latitude: -34.63966456,
    name: "PRIMERA JUNTA 2610",
    district: "Flores"
  },
  {
    longitude: -58.46069281,
    latitude: -34.6411109,
    name: "PRIMERA JUNTA 2980",
    district: "Flores"
  },
  {
    longitude: -58.46284646,
    latitude: -34.6425975,
    name: "PRIMERA JUNTA 3230",
    district: "Flores"
  },
  {
    longitude: -58.46534337,
    latitude: -34.64419257,
    name: "PRIMERA JUNTA 3492",
    district: "Flores"
  },
  {
    longitude: -58.48199229,
    latitude: -34.65801809,
    name: "PRIMERA JUNTA 5126",
    district: "Mataderos"
  },
  {
    longitude: -58.39418566,
    latitude: -34.58587158,
    name: "PUEYRREDON AV. 2464",
    district: "Recoleta"
  },
  {
    longitude: -58.441004,
    latitude: -34.61360335,
    name: "PUEYRREDON, HONORIO, DR. AV. 527",
    district: "Caballito"
  },
  {
    longitude: -58.4425082,
    latitude: -34.61129087,
    name: "PUEYRREDON, HONORIO, DR. AV. 755",
    district: "Caballito"
  },
  {
    longitude: -58.44402867,
    latitude: -34.60930145,
    name: "PUEYRREDON, HONORIO, DR. AV. 971",
    district: "Caballito"
  },
  {
    longitude: -58.44630705,
    latitude: -34.60672884,
    name: "PUEYRREDON, HONORIO, DR. AV. 1158",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4503761,
    latitude: -34.60211052,
    name: "PUEYRREDON, HONORIO, DR. AV. 1674",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45165196,
    latitude: -34.60072637,
    name: "PUEYRREDON, HONORIO, DR. AV. 1830",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45344186,
    latitude: -34.59878206,
    name: "PUEYRREDON, HONORIO, DR. AV. 2104",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4703478,
    latitude: -34.59484412,
    name: "PUNTA ARENAS 1470",
    district: "Paternal"
  },
  {
    longitude: -58.47194977,
    latitude: -34.60055422,
    name: "PUNTA ARENAS 1744",
    district: "Paternal"
  },
  {
    longitude: -58.46099567,
    latitude: -34.55320125,
    name: "QUESADA 2152",
    district: "Nuñez"
  },
  {
    longitude: -58.36614253,
    latitude: -34.64260752,
    name: "QUINQUELA MARTIN, BENITO 1114",
    district: "Boca"
  },
  {
    longitude: -58.36854319,
    latitude: -34.64293995,
    name: "QUINQUELA MARTIN, BENITO 1292",
    district: "Boca"
  },
  {
    longitude: -58.37846455,
    latitude: -34.64486273,
    name: "QUINQUELA MARTIN, BENITO 2072",
    district: "Barracas"
  },
  {
    longitude: -58.38762552,
    latitude: -34.59016014,
    name: "QUINTANA, MANUEL, PRES. 279",
    district: "Recoleta"
  },
  {
    longitude: -58.44960672,
    latitude: -34.54738718,
    name: "QUINTEROS, LIDORO J. AV. 970",
    district: "Belgrano"
  },
  {
    longitude: -58.45007748,
    latitude: -34.5485558,
    name: "QUINTEROS, LIDORO J. AV. 1087",
    district: "Belgrano"
  },
  {
    longitude: -58.45062276,
    latitude: -34.5508933,
    name: "QUINTEROS, LIDORO J. AV. 1265",
    district: "Belgrano"
  },
  {
    longitude: -58.45048503,
    latitude: -34.55138008,
    name: "QUINTEROS, LIDORO J. AV. 1304",
    district: "Belgrano"
  },
  {
    longitude: -58.47528414,
    latitude: -34.58915525,
    name: "QUIROS 2829",
    district: "Parque Chas"
  },
  {
    longitude: -58.47724608,
    latitude: -34.59068758,
    name: "QUIROS 3037",
    district: "Parque Chas"
  },
  {
    longitude: -58.42156663,
    latitude: -34.6567566,
    name: "RABANAL, FRANCISCO, INTENDENTE AV. 1604",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.4761312,
    latitude: -34.63506548,
    name: "RAFAELA 3534",
    district: "Floresta"
  },
  {
    longitude: -58.47823355,
    latitude: -34.63545562,
    name: "RAFAELA 3723",
    district: "Floresta"
  },
  {
    longitude: -58.48726796,
    latitude: -34.63789941,
    name: "RAFAELA 4317",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4907207,
    latitude: -34.63875687,
    name: "RAFAELA 4541",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49476884,
    latitude: -34.63932917,
    name: "RAFAELA 4809",
    district: "Villa Luro"
  },
  {
    longitude: -58.49879325,
    latitude: -34.63987605,
    name: "RAFAELA 5095",
    district: "Villa Luro"
  },
  {
    longitude: -58.46876021,
    latitude: -34.54111531,
    name: "RAMALLO 2004",
    district: "Nuñez"
  },
  {
    longitude: -58.43400868,
    latitude: -34.60117784,
    name: "RAMIREZ DE VELASCO, JUAN 149",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43451901,
    latitude: -34.6006321,
    name: "RAMIREZ DE VELASCO, JUAN 219",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43696768,
    latitude: -34.598012,
    name: "RAMIREZ DE VELASCO, JUAN 541",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43757261,
    latitude: -34.59736473,
    name: "RAMIREZ DE VELASCO, JUAN 615",
    district: "Villa Crespo"
  },
  {
    longitude: -58.41669324,
    latitude: -34.64080516,
    name: "RAULET 121",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.44098007,
    latitude: -34.58320984,
    name: "RAVIGNANI, EMILIO, DR. 1529",
    district: "Palermo"
  },
  {
    longitude: -58.43964325,
    latitude: -34.58204136,
    name: "RAVIGNANI, EMILIO, DR. 1677",
    district: "Palermo"
  },
  {
    longitude: -58.43888227,
    latitude: -34.58138276,
    name: "RAVIGNANI, EMILIO, DR. 1749",
    district: "Palermo"
  },
  {
    longitude: -58.43703094,
    latitude: -34.5797608,
    name: "RAVIGNANI, EMILIO, DR. 1955",
    district: "Palermo"
  },
  {
    longitude: -58.43582335,
    latitude: -34.57871183,
    name: "RAVIGNANI, EMILIO, DR. 2085",
    district: "Palermo"
  },
  {
    longitude: -58.435235,
    latitude: -34.57819753,
    name: "RAVIGNANI, EMILIO, DR. 2171",
    district: "Palermo"
  },
  {
    longitude: -58.43341879,
    latitude: -34.57660477,
    name: "RAVIGNANI, EMILIO, DR. 2347",
    district: "Palermo"
  },
  {
    longitude: -58.37056415,
    latitude: -34.63141069,
    name: "REGIMIENTO DE PATRICIOS AV. 161",
    district: "Barracas"
  },
  {
    longitude: -58.37041098,
    latitude: -34.6329955,
    name: "REGIMIENTO DE PATRICIOS AV. 327",
    district: "Barracas"
  },
  {
    longitude: -58.36998668,
    latitude: -34.63585703,
    name: "REGIMIENTO DE PATRICIOS AV. 623",
    district: "Barracas"
  },
  {
    longitude: -58.36972927,
    latitude: -34.63751548,
    name: "REGIMIENTO DE PATRICIOS AV. 807",
    district: "Barracas"
  },
  {
    longitude: -58.3693189,
    latitude: -34.639666,
    name: "REGIMIENTO DE PATRICIOS AV. 1053",
    district: "Barracas"
  },
  {
    longitude: -58.36892308,
    latitude: -34.64280161,
    name: "REGIMIENTO DE PATRICIOS AV. 1391",
    district: "Barracas"
  },
  {
    longitude: -58.36873645,
    latitude: -34.64407721,
    name: "REGIMIENTO DE PATRICIOS AV. 1531",
    district: "Barracas"
  },
  {
    longitude: -58.36854755,
    latitude: -34.64535486,
    name: "REGIMIENTO DE PATRICIOS AV. 1671",
    district: "Barracas"
  },
  {
    longitude: -58.36841299,
    latitude: -34.64627548,
    name: "REGIMIENTO DE PATRICIOS AV. 1793",
    district: "Barracas"
  },
  {
    longitude: -58.36834749,
    latitude: -34.64672737,
    name: "REGIMIENTO DE PATRICIOS AV. 1819",
    district: "Barracas"
  },
  {
    longitude: -58.4921234,
    latitude: -34.65481237,
    name: "REMEDIOS 5397",
    district: "Mataderos"
  },
  {
    longitude: -58.49354823,
    latitude: -34.65625544,
    name: "REMEDIOS 5596",
    district: "Mataderos"
  },
  {
    longitude: -58.49574735,
    latitude: -34.65792379,
    name: "REMEDIOS 5805",
    district: "Mataderos"
  },
  {
    longitude: -58.45385213,
    latitude: -34.60328508,
    name: "REPETTO, NICOLAS, DR. 1743",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45439633,
    latitude: -34.60269422,
    name: "REPETTO, NICOLAS, DR. 1817",
    district: "Villa Crespo"
  },
  {
    longitude: -58.41631945,
    latitude: -34.58422363,
    name: "REPUBLICA ARABE SIRIA 2555",
    district: "Palermo"
  },
  {
    longitude: -58.41458783,
    latitude: -34.58223466,
    name: "REPUBLICA ARABE SIRIA 2827",
    district: "Palermo"
  },
  {
    longitude: -58.41173178,
    latitude: -34.57809128,
    name: "REPUBLICA ARABE SIRIA 3291",
    district: "Palermo"
  },
  {
    longitude: -58.40151654,
    latitude: -34.61545702,
    name: "REPUBLICA BOLIVARIANA DE VENEZUELA 2413",
    district: "Balvanera"
  },
  {
    longitude: -58.40611814,
    latitude: -34.61612175,
    name: "REPUBLICA BOLIVARIANA DE VENEZUELA 2815",
    district: "Balvanera"
  },
  {
    longitude: -58.40712849,
    latitude: -34.61633498,
    name: "REPUBLICA BOLIVARIANA DE VENEZUELA 2911",
    district: "Balvanera"
  },
  {
    longitude: -58.41249492,
    latitude: -34.61658386,
    name: "REPUBLICA BOLIVARIANA DE VENEZUELA 3287",
    district: "Balvanera"
  },
  {
    longitude: -58.4141536,
    latitude: -34.57741059,
    name: "REPUBLICA DE LA INDIA 3073",
    district: "Palermo"
  },
  {
    longitude: -58.41354151,
    latitude: -34.5764768,
    name: "REPUBLICA DE LA INDIA 3155",
    district: "Palermo"
  },
  {
    longitude: -58.44849707,
    latitude: -34.54909347,
    name: "RICCHERI, PABLO, TTE. GRAL. 2767",
    district: "Belgrano"
  },
  {
    longitude: -58.47587761,
    latitude: -34.67794729,
    name: "RIESTRA AV. 5796",
    district: "Villa Lugano"
  },
  {
    longitude: -58.3653635,
    latitude: -34.64745267,
    name: "RIO CUARTO 1142",
    district: "Boca"
  },
  {
    longitude: -58.37631494,
    latitude: -34.65032804,
    name: "RIO CUARTO 2093",
    district: "Barracas"
  },
  {
    longitude: -58.38274818,
    latitude: -34.65166678,
    name: "RIO CUARTO 2692",
    district: "Barracas"
  },
  {
    longitude: -58.39383049,
    latitude: -34.60924591,
    name: "RIVADAVIA AV. 1923",
    district: "Balvanera"
  },
  {
    longitude: -58.3965346,
    latitude: -34.60943566,
    name: "RIVADAVIA AV. 2115",
    district: "Balvanera"
  },
  {
    longitude: -58.40010299,
    latitude: -34.60971225,
    name: "RIVADAVIA AV. 2379",
    district: "Balvanera"
  },
  {
    longitude: -58.40204649,
    latitude: -34.6098227,
    name: "RIVADAVIA AV. 2515",
    district: "Balvanera"
  },
  {
    longitude: -58.40417765,
    latitude: -34.60993902,
    name: "RIVADAVIA AV. 2675",
    district: "Balvanera"
  },
  {
    longitude: -58.40640566,
    latitude: -34.61005377,
    name: "RIVADAVIA AV. 2915",
    district: "Balvanera"
  },
  {
    longitude: -58.41051701,
    latitude: -34.61037613,
    name: "RIVADAVIA AV. 3113",
    district: "Balvanera"
  },
  {
    longitude: -58.41400822,
    latitude: -34.6106238,
    name: "RIVADAVIA AV. 3375",
    district: "Balvanera"
  },
  {
    longitude: -58.43043157,
    latitude: -34.61553464,
    name: "RIVADAVIA AV. 4621",
    district: "Caballito"
  },
  {
    longitude: -58.438078,
    latitude: -34.61892864,
    name: "RIVADAVIA AV. 5129",
    district: "Caballito"
  },
  {
    longitude: -58.44041655,
    latitude: -34.61996952,
    name: "RIVADAVIA AV. 5303",
    district: "Caballito"
  },
  {
    longitude: -58.44458889,
    latitude: -34.62176976,
    name: "RIVADAVIA AV. 5611",
    district: "Caballito"
  },
  {
    longitude: -58.44675095,
    latitude: -34.62265994,
    name: "RIVADAVIA AV. 5779",
    district: "Caballito"
  },
  {
    longitude: -58.4517885,
    latitude: -34.6246643,
    name: "RIVADAVIA AV. 6095",
    district: "Caballito"
  },
  {
    longitude: -58.45273952,
    latitude: -34.62503816,
    name: "RIVADAVIA AV. 6137",
    district: "Caballito"
  },
  {
    longitude: -58.4547306,
    latitude: -34.62581512,
    name: "RIVADAVIA AV. 6251",
    district: "Flores"
  },
  {
    longitude: -58.45774247,
    latitude: -34.62700348,
    name: "RIVADAVIA AV. 6491",
    district: "Flores"
  },
  {
    longitude: -58.45974205,
    latitude: -34.62782272,
    name: "RIVADAVIA AV. 6689",
    district: "Flores"
  },
  {
    longitude: -58.4613829,
    latitude: -34.6283847,
    name: "RIVADAVIA AV. 6805",
    district: "Flores"
  },
  {
    longitude: -58.46541736,
    latitude: -34.62950705,
    name: "RIVADAVIA AV. 7093",
    district: "Flores"
  },
  {
    longitude: -58.46789795,
    latitude: -34.6301393,
    name: "RIVADAVIA AV. 7257",
    district: "Flores"
  },
  {
    longitude: -58.47208853,
    latitude: -34.63126709,
    name: "RIVADAVIA AV. 7569",
    district: "Flores"
  },
  {
    longitude: -58.47313472,
    latitude: -34.63155649,
    name: "RIVADAVIA AV. 7661",
    district: "Flores"
  },
  {
    longitude: -58.475053,
    latitude: -34.63230191,
    name: "RIVADAVIA AV. 7850",
    district: "Floresta"
  },
  {
    longitude: -58.47755629,
    latitude: -34.63290009,
    name: "RIVADAVIA AV. 8086",
    district: "Floresta"
  },
  {
    longitude: -58.47992419,
    latitude: -34.63346159,
    name: "RIVADAVIA AV. 8270",
    district: "Floresta"
  },
  {
    longitude: -58.48249074,
    latitude: -34.63407551,
    name: "RIVADAVIA AV. 8422",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.48553006,
    latitude: -34.63480459,
    name: "RIVADAVIA AV. 8644",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4900541,
    latitude: -34.63590016,
    name: "RIVADAVIA AV. 8942",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49152941,
    latitude: -34.63625359,
    name: "RIVADAVIA AV. 9020",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49612236,
    latitude: -34.63707452,
    name: "RIVADAVIA AV. 9372",
    district: "Villa Luro"
  },
  {
    longitude: -58.50040482,
    latitude: -34.63766843,
    name: "RIVADAVIA AV. 9672",
    district: "Villa Luro"
  },
  {
    longitude: -58.50123703,
    latitude: -34.63778652,
    name: "RIVADAVIA AV. 9720",
    district: "Villa Luro"
  },
  {
    longitude: -58.50683023,
    latitude: -34.63866097,
    name: "RIVADAVIA AV. 10172",
    district: "Villa Luro"
  },
  {
    longitude: -58.50942769,
    latitude: -34.63911725,
    name: "RIVADAVIA AV. 10328",
    district: "Villa Luro"
  },
  {
    longitude: -58.46578961,
    latitude: -34.54706388,
    name: "RIVADAVIA MARTIN, COMODORO 2110",
    district: "Nuñez"
  },
  {
    longitude: -58.46694611,
    latitude: -34.54769201,
    name: "RIVADAVIA MARTIN, COMODORO 2260",
    district: "Nuñez"
  },
  {
    longitude: -58.48313796,
    latitude: -34.59971327,
    name: "RIVAS, GRAL. 2459",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.43592929,
    latitude: -34.65446273,
    name: "RIVERA INDARTE AV. 2710",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43343199,
    latitude: -34.65691866,
    name: "RIVERA INDARTE AV. 2996",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43198752,
    latitude: -34.65837595,
    name: "RIVERA INDARTE AV. 3208",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42959877,
    latitude: -34.66104356,
    name: "RIVERA INDARTE AV. 3511",
    district: "Villa Soldati"
  },
  {
    longitude: -58.42885355,
    latitude: -34.66196111,
    name: "RIVERA INDARTE AV. 3611",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43868247,
    latitude: -34.65952996,
    name: "RIVERA, FRUCTUOSO, GENERAL 2815",
    district: "Villa Soldati"
  },
  {
    longitude: -58.47258453,
    latitude: -34.6891312,
    name: "RIVERA, FRUCTUOSO, GENERAL 6456",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47467428,
    latitude: -34.69102449,
    name: "RIVERA, FRUCTUOSO, GENERAL 6728",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.45246249,
    latitude: -34.64170416,
    name: "ROBERTSON 1194",
    district: "Flores"
  },
  {
    longitude: -58.46015842,
    latitude: -34.68881763,
    name: "ROCA, CNEL. AV. 5805",
    district: "Villa Lugano"
  },
  {
    longitude: -58.42091347,
    latitude: -34.59951806,
    name: "ROCAMORA 4020",
    district: "Almagro"
  },
  {
    longitude: -58.4248939,
    latitude: -34.59918835,
    name: "ROCAMORA 4286",
    district: "Almagro"
  },
  {
    longitude: -58.42736294,
    latitude: -34.59918594,
    name: "ROCAMORA 4452",
    district: "Almagro"
  },
  { longitude: -58.36398664, latitude: -34.6410485, name: "ROCHA 979", district: "Boca" },
  {
    longitude: -58.37229259,
    latitude: -34.64224284,
    name: "ROCHA 1583",
    district: "Barracas"
  },
  {
    longitude: -58.45018501,
    latitude: -34.59331459,
    name: "RODNEY 42",
    district: "Chacarita"
  },
  {
    longitude: -58.48605886,
    latitude: -34.64320546,
    name: "RODO, JOSE E. 4337",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49625337,
    latitude: -34.65207983,
    name: "RODO, JOSE E. 5406",
    district: "Mataderos"
  },
  {
    longitude: -58.49910137,
    latitude: -34.65444534,
    name: "RODO, JOSE E. 5814",
    district: "Mataderos"
  },
  {
    longitude: -58.50150603,
    latitude: -34.65644658,
    name: "RODO, JOSE E. 6084",
    district: "Mataderos"
  },
  {
    longitude: -58.50581218,
    latitude: -34.66002491,
    name: "RODO, JOSE E. 6660",
    district: "Mataderos"
  },
  {
    longitude: -58.50717689,
    latitude: -34.66116101,
    name: "RODO, JOSE E. 6836",
    district: "Mataderos"
  },
  {
    longitude: -58.50949899,
    latitude: -34.66310483,
    name: "RODO, JOSE E. 7120",
    district: "Mataderos"
  },
  {
    longitude: -58.51075891,
    latitude: -34.6641613,
    name: "RODO, JOSE E. 7294",
    district: "Mataderos"
  },
  {
    longitude: -58.45213351,
    latitude: -34.60346941,
    name: "RODRIGUEZ, MANUEL A., GENERAL 1659",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45364871,
    latitude: -34.60183226,
    name: "RODRIGUEZ, MANUEL A., GENERAL 1861",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45479368,
    latitude: -34.6005914,
    name: "RODRIGUEZ, MANUEL A., GENERAL 2045",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45697358,
    latitude: -34.59852984,
    name: "RODRIGUEZ, MANUEL A., GENERAL 2321",
    district: "Paternal"
  },
  {
    longitude: -58.36127004,
    latitude: -34.63453349,
    name: "RODRIGUEZ, MARTIN 733",
    district: "Boca"
  },
  {
    longitude: -58.35952226,
    latitude: -34.63740928,
    name: "RODRIGUEZ, MARTIN 1085",
    district: "Boca"
  },
  {
    longitude: -58.45122853,
    latitude: -34.60293268,
    name: "ROJAS 1660",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45277529,
    latitude: -34.60124475,
    name: "ROJAS 1866",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43073411,
    latitude: -34.61864066,
    name: "ROSARIO 150",
    district: "Caballito"
  },
  {
    longitude: -58.43945572,
    latitude: -34.62043623,
    name: "ROSARIO 754",
    district: "Caballito"
  },
  {
    longitude: -58.44805595,
    latitude: -34.58557409,
    name: "ROSETI 252",
    district: "Chacarita"
  },
  {
    longitude: -58.45110955,
    latitude: -34.58419804,
    name: "ROSETI 524",
    district: "Chacarita"
  },
  {
    longitude: -58.46133745,
    latitude: -34.58179657,
    name: "ROSETI 1353",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46267335,
    latitude: -34.58175667,
    name: "ROSETI 1457",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4653963,
    latitude: -34.58167686,
    name: "ROSETI 1645",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46773315,
    latitude: -34.58160723,
    name: "ROSETI 1827",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47153714,
    latitude: -34.58153088,
    name: "ROSETI 2147",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.48795106,
    latitude: -34.67026652,
    name: "RUCCI, JOSE IGNACIO 3280",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48568813,
    latitude: -34.67218581,
    name: "RUCCI, JOSE IGNACIO 3466",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48333109,
    latitude: -34.67426405,
    name: "RUCCI, JOSE IGNACIO 3707",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47696802,
    latitude: -34.67949462,
    name: "RUCCI, JOSE IGNACIO 4245",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47536739,
    latitude: -34.68073465,
    name: "RUCCI, JOSE IGNACIO 4411",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47419856,
    latitude: -34.68164044,
    name: "RUCCI, JOSE IGNACIO 4525",
    district: "Villa Lugano"
  },
  {
    longitude: -58.40728805,
    latitude: -34.58067631,
    name: "RUGGIERI, SILVIO L. 2906",
    district: "Palermo"
  },
  {
    longitude: -58.46518882,
    latitude: -34.54134335,
    name: "RUIZ HUIDOBRO 1751",
    district: "Nuñez"
  },
  {
    longitude: -58.46825516,
    latitude: -34.54298366,
    name: "RUIZ HUIDOBRO 2094",
    district: "Nuñez"
  },
  {
    longitude: -58.41626193,
    latitude: -34.64477492,
    name: "SAENZ AV. 461",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.41661623,
    latitude: -34.65549181,
    name: "SAENZ AV. 1225",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.44760808,
    latitude: -34.54866441,
    name: "SAENZ VALIENTE, JUAN PABLO 910",
    district: "Belgrano"
  },
  {
    longitude: -58.51342882,
    latitude: -34.66379463,
    name: "SALADILLO 2270",
    district: "Mataderos"
  },
  {
    longitude: -58.50649207,
    latitude: -34.66905287,
    name: "SALADILLO 2778",
    district: "Mataderos"
  },
  {
    longitude: -58.50573711,
    latitude: -34.66962409,
    name: "SALADILLO 2846",
    district: "Mataderos"
  },
  {
    longitude: -58.50407195,
    latitude: -34.67088205,
    name: "SALADILLO 3024",
    district: "Mataderos"
  },
  {
    longitude: -58.49904324,
    latitude: -34.67479417,
    name: "SALADILLO 3479",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48099735,
    latitude: -34.688394,
    name: "SALADILLO 4991",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47869176,
    latitude: -34.69013267,
    name: "SALADILLO 5183",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47668937,
    latitude: -34.69165397,
    name: "SALADILLO 5341",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47269554,
    latitude: -34.69467884,
    name: "SALADILLO 5693",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47028056,
    latitude: -34.69645445,
    name: "SALADILLO 5881",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.4694879,
    latitude: -34.69705424,
    name: "SALADILLO 5975",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.43045434,
    latitude: -34.63209638,
    name: "SALAS 345",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.41973382,
    latitude: -34.6106899,
    name: "SALGUERO, JERONIMO 29",
    district: "Almagro"
  },
  {
    longitude: -58.36662105,
    latitude: -34.64449001,
    name: "SALVADORES, CNEL. 1189",
    district: "Boca"
  },
  {
    longitude: -58.43332477,
    latitude: -34.64441802,
    name: "SALVIGNY 1567",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.37602167,
    latitude: -34.65516779,
    name: "SAN ANTONIO 1113",
    district: "Barracas"
  },
  {
    longitude: -58.46537329,
    latitude: -34.60356138,
    name: "SAN BLAS 1643",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46835651,
    latitude: -34.60484243,
    name: "SAN BLAS 1859",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47143093,
    latitude: -34.60615826,
    name: "SAN BLAS 2085",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47254981,
    latitude: -34.60675365,
    name: "SAN BLAS 2177",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47470561,
    latitude: -34.60781581,
    name: "SAN BLAS 2363",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47805277,
    latitude: -34.60959585,
    name: "SAN BLAS 2633",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.48077825,
    latitude: -34.61103306,
    name: "SAN BLAS 2851",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48326305,
    latitude: -34.61233957,
    name: "SAN BLAS 3045",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48586207,
    latitude: -34.61368692,
    name: "SAN BLAS 3237",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48828303,
    latitude: -34.61499317,
    name: "SAN BLAS 3455",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.49142525,
    latitude: -34.61742038,
    name: "SAN BLAS 3785",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.494708,
    latitude: -34.62017512,
    name: "SAN BLAS 4133",
    district: "Floresta"
  },
  {
    longitude: -58.49545039,
    latitude: -34.62078929,
    name: "SAN BLAS 4217",
    district: "Floresta"
  },
  {
    longitude: -58.49960878,
    latitude: -34.62330803,
    name: "SAN BLAS 4593",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50333339,
    latitude: -34.62561487,
    name: "SAN BLAS 4855",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50512867,
    latitude: -34.62721473,
    name: "SAN BLAS 5007",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50781373,
    latitude: -34.62963472,
    name: "SAN BLAS 5275",
    district: "Villa Luro"
  },
  {
    longitude: -58.51063888,
    latitude: -34.63214962,
    name: "SAN BLAS 5545",
    district: "Villa Luro"
  },
  {
    longitude: -58.4010775,
    latitude: -34.623729,
    name: "SAN JUAN AV. 2560",
    district: "San Cristobal"
  },
  {
    longitude: -58.40781212,
    latitude: -34.62456017,
    name: "SAN JUAN AV. 3038",
    district: "San Cristobal"
  },
  {
    longitude: -58.41168476,
    latitude: -34.62500426,
    name: "SAN JUAN AV. 3278",
    district: "San Cristobal"
  },
  {
    longitude: -58.40256991,
    latitude: -34.60011248,
    name: "SAN LUIS 2510",
    district: "Balvanera"
  },
  {
    longitude: -58.40384099,
    latitude: -34.59996983,
    name: "SAN LUIS 2660",
    district: "Balvanera"
  },
  {
    longitude: -58.4067995,
    latitude: -34.59966314,
    name: "SAN LUIS 2948",
    district: "Balvanera"
  },
  {
    longitude: -58.4100791,
    latitude: -34.59947233,
    name: "SAN LUIS 3178",
    district: "Balvanera"
  },
  {
    longitude: -58.4801651,
    latitude: -34.5991598,
    name: "SAN MARTIN AV. 4140",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48234484,
    latitude: -34.59828968,
    name: "SAN MARTIN AV. 4404",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48804099,
    latitude: -34.59750157,
    name: "SAN MARTIN AV. 4966",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49985875,
    latitude: -34.5959327,
    name: "SAN MARTIN AV. 5908",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50503678,
    latitude: -34.59404752,
    name: "SAN MARTIN AV. 6390",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50868719,
    latitude: -34.59262425,
    name: "SAN MARTIN AV. 6710",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51292001,
    latitude: -34.59119904,
    name: "SAN MARTIN AV. 7020",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51504652,
    latitude: -34.59056211,
    name: "SAN MARTIN AV. 7178",
    district: "Villa Devoto"
  },
  {
    longitude: -58.44078128,
    latitude: -34.65927686,
    name: "SAN PEDRITO 2881",
    district: "Villa Soldati"
  },
  {
    longitude: -58.44032947,
    latitude: -34.65963705,
    name: "SAN PEDRITO 2909",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43871268,
    latitude: -34.66090454,
    name: "SAN PEDRITO 3095",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43766175,
    latitude: -34.6617616,
    name: "SAN PEDRITO 3195",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4345766,
    latitude: -34.66573996,
    name: "SAN PEDRITO 3651",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43391562,
    latitude: -34.66686598,
    name: "SAN PEDRITO 3795",
    district: "Villa Soldati"
  },
  {
    longitude: -58.47274346,
    latitude: -34.64197038,
    name: "SAN PEDRO 3819",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48889266,
    latitude: -34.65614502,
    name: "SAN PEDRO 5396",
    district: "Mataderos"
  },
  {
    longitude: -58.49027836,
    latitude: -34.65730625,
    name: "SAN PEDRO 5562",
    district: "Mataderos"
  },
  {
    longitude: -58.4126974,
    latitude: -34.59468451,
    name: "SANCHEZ DE BUSTAMANTE 1346",
    district: "Recoleta"
  },
  {
    longitude: -58.40179953,
    latitude: -34.58259367,
    name: "SANCHEZ DE BUSTAMANTE 2664",
    district: "Palermo"
  },
  {
    longitude: -58.39145551,
    latitude: -34.59574548,
    name: "SANTA FE AV. 1675",
    district: "Recoleta"
  },
  {
    longitude: -58.40461942,
    latitude: -34.59350989,
    name: "SANTA FE AV. 2679",
    district: "Recoleta"
  },
  {
    longitude: -58.40758729,
    latitude: -34.59108959,
    name: "SANTA FE AV. 2975",
    district: "Recoleta"
  },
  {
    longitude: -58.41221398,
    latitude: -34.58773888,
    name: "SANTA FE AV. 3350",
    district: "Palermo"
  },
  {
    longitude: -58.41451212,
    latitude: -34.58621239,
    name: "SANTA FE AV. 3536",
    district: "Palermo"
  },
  {
    longitude: -58.41515504,
    latitude: -34.58557393,
    name: "SANTA FE AV. 3617",
    district: "Palermo"
  },
  {
    longitude: -58.42686042,
    latitude: -34.63404043,
    name: "SANTANDER 414",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42949003,
    latitude: -34.63447065,
    name: "SANTANDER 636",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43157625,
    latitude: -34.63481315,
    name: "SANTANDER 822",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43687858,
    latitude: -34.63558112,
    name: "SANTANDER 1195",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43985934,
    latitude: -34.63617732,
    name: "SANTANDER 1395",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44068852,
    latitude: -34.63634699,
    name: "SANTANDER 1437",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44376229,
    latitude: -34.63697756,
    name: "SANTANDER 1695",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44546942,
    latitude: -34.63734198,
    name: "SANTANDER 1805",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44784145,
    latitude: -34.63946966,
    name: "SANTANDER 2071",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44956707,
    latitude: -34.6410119,
    name: "SANTANDER 2247",
    district: "Flores"
  },
  {
    longitude: -58.45217614,
    latitude: -34.64324615,
    name: "SANTANDER 2495",
    district: "Flores"
  },
  {
    longitude: -58.45932009,
    latitude: -34.6485288,
    name: "SANTANDER 3167",
    district: "Flores"
  },
  {
    longitude: -58.47649095,
    latitude: -34.66504935,
    name: "SANTANDER 4922",
    district: "Villa Lugano"
  },
  {
    longitude: -58.38413604,
    latitude: -34.65323843,
    name: "SANTO DOMINGO 2676",
    district: "Barracas"
  },
  {
    longitude: -58.38476063,
    latitude: -34.65340653,
    name: "SANTO DOMINGO 2706",
    district: "Barracas"
  },
  {
    longitude: -58.48172651,
    latitude: -34.60164301,
    name: "SANTO TOME 2481",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48522339,
    latitude: -34.60368509,
    name: "SANTO TOME 2765",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48774018,
    latitude: -34.60515172,
    name: "SANTO TOME 2983",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49029323,
    latitude: -34.60663411,
    name: "SANTO TOME 3167",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49245849,
    latitude: -34.60788436,
    name: "SANTO TOME 3347",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.493309,
    latitude: -34.60837557,
    name: "SANTO TOME 3437",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.5003679,
    latitude: -34.61243136,
    name: "SANTO TOME 4091",
    district: "Monte Castro"
  },
  {
    longitude: -58.50173651,
    latitude: -34.61322495,
    name: "SANTO TOME 4215",
    district: "Monte Castro"
  },
  {
    longitude: -58.50443225,
    latitude: -34.6147725,
    name: "SANTO TOME 4451",
    district: "Monte Castro"
  },
  {
    longitude: -58.50708867,
    latitude: -34.61625774,
    name: "SANTO TOME 4655",
    district: "Monte Castro"
  },
  {
    longitude: -58.50954216,
    latitude: -34.61760384,
    name: "SANTO TOME 4873",
    district: "Monte Castro"
  },
  {
    longitude: -58.51161715,
    latitude: -34.61899439,
    name: "SANTO TOME 5053",
    district: "Monte Castro"
  },
  {
    longitude: -58.51416999,
    latitude: -34.62122707,
    name: "SANTO TOME 5243",
    district: "Monte Castro"
  },
  {
    longitude: -58.51722459,
    latitude: -34.62397804,
    name: "SANTO TOME 5545",
    district: "Monte Castro"
  },
  {
    longitude: -58.52124936,
    latitude: -34.62631916,
    name: "SANTO TOME 6015",
    district: "Versalles"
  },
  {
    longitude: -58.52487426,
    latitude: -34.62707779,
    name: "SANTO TOME 6369",
    district: "Versalles"
  },
  {
    longitude: -58.52678657,
    latitude: -34.62747839,
    name: "SANTO TOME 6553",
    district: "Versalles"
  },
  {
    longitude: -58.4881767,
    latitude: -34.63003696,
    name: "SARACHAGA 4263",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49012151,
    latitude: -34.6317225,
    name: "SARACHAGA 4495",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4911403,
    latitude: -34.63274583,
    name: "SARACHAGA 4639",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4937682,
    latitude: -34.63308126,
    name: "SARACHAGA 4871",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49711554,
    latitude: -34.63351006,
    name: "SARACHAGA 5093",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.4989767,
    latitude: -34.63374971,
    name: "SARACHAGA 5215",
    district: "Villa Luro"
  },
  {
    longitude: -58.50265026,
    latitude: -34.63422248,
    name: "SARACHAGA 5491",
    district: "Villa Luro"
  },
  {
    longitude: -58.42517205,
    latitude: -34.63696525,
    name: "SARAZA 452",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4276279,
    latitude: -34.63740471,
    name: "SARAZA 648",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42974721,
    latitude: -34.63778711,
    name: "SARAZA 826",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43211433,
    latitude: -34.6382089,
    name: "SARAZA 1004",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43666491,
    latitude: -34.63899448,
    name: "SARAZA 1358",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43962376,
    latitude: -34.63972726,
    name: "SARAZA 1546",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44216131,
    latitude: -34.64036672,
    name: "SARAZA 1732",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44463891,
    latitude: -34.64154337,
    name: "SARAZA 2042",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44590628,
    latitude: -34.64268049,
    name: "SARAZA 2170",
    district: "Flores"
  },
  {
    longitude: -58.44981323,
    latitude: -34.64617822,
    name: "SARAZA 2570",
    district: "Flores"
  },
  {
    longitude: -58.48047515,
    latitude: -34.67158453,
    name: "SARAZA 5591",
    district: "Villa Lugano"
  },
  {
    longitude: -58.48278566,
    latitude: -34.67370451,
    name: "SARAZA 5852",
    district: "Villa Lugano"
  },
  {
    longitude: -58.41723639,
    latitude: -34.57731313,
    name: "SARMIENTO AV. 3106",
    district: "Palermo"
  },
  {
    longitude: -58.48472674,
    latitude: -34.60154887,
    name: "SASTRE, MARCOS 2624",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4876582,
    latitude: -34.60325515,
    name: "SASTRE, MARCOS 2880",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.48975364,
    latitude: -34.60447558,
    name: "SASTRE, MARCOS 3040",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49262468,
    latitude: -34.60614377,
    name: "SASTRE, MARCOS 3268",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49421333,
    latitude: -34.60707122,
    name: "SASTRE, MARCOS 3428",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.4963412,
    latitude: -34.60829698,
    name: "SASTRE, MARCOS 3652",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49778944,
    latitude: -34.60917655,
    name: "SASTRE, MARCOS 3768",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50082033,
    latitude: -34.61101528,
    name: "SASTRE, MARCOS 4044",
    district: "Monte Castro"
  },
  {
    longitude: -58.50402875,
    latitude: -34.6129239,
    name: "SASTRE, MARCOS 4324",
    district: "Monte Castro"
  },
  {
    longitude: -58.50830062,
    latitude: -34.61548589,
    name: "SASTRE, MARCOS 4686",
    district: "Monte Castro"
  },
  {
    longitude: -58.5112293,
    latitude: -34.61727818,
    name: "SASTRE, MARCOS 4952",
    district: "Monte Castro"
  },
  {
    longitude: -58.51496162,
    latitude: -34.62024241,
    name: "SASTRE, MARCOS 5222",
    district: "Monte Castro"
  },
  {
    longitude: -58.51754873,
    latitude: -34.62248309,
    name: "SASTRE, MARCOS 5468",
    district: "Monte Castro"
  },
  {
    longitude: -58.51978081,
    latitude: -34.62446431,
    name: "SASTRE, MARCOS 5710",
    district: "Monte Castro"
  },
  {
    longitude: -58.5232825,
    latitude: -34.62554352,
    name: "SASTRE, MARCOS 6060",
    district: "Versalles"
  },
  {
    longitude: -58.47062868,
    latitude: -34.67421693,
    name: "SAYOS 5294",
    district: "Villa Lugano"
  },
  {
    longitude: -58.44153516,
    latitude: -34.60146399,
    name: "SCALABRINI ORTIZ, RAUL AV. 78",
    district: "Villa Crespo"
  },
  {
    longitude: -58.42645852,
    latitude: -34.59179898,
    name: "SCALABRINI ORTIZ, RAUL AV. 1446",
    district: "Palermo"
  },
  {
    longitude: -58.42452574,
    latitude: -34.5905109,
    name: "SCALABRINI ORTIZ, RAUL AV. 1648",
    district: "Palermo"
  },
  {
    longitude: -58.42290742,
    latitude: -34.58943525,
    name: "SCALABRINI ORTIZ, RAUL AV. 1838",
    district: "Palermo"
  },
  {
    longitude: -58.42088632,
    latitude: -34.58812218,
    name: "SCALABRINI ORTIZ, RAUL AV. 2050",
    district: "Palermo"
  },
  {
    longitude: -58.50864185,
    latitude: -34.64779487,
    name: "SCHMIDL, ULRICO 6107",
    district: "Liniers"
  },
  {
    longitude: -58.51217169,
    latitude: -34.65120937,
    name: "SCHMIDL, ULRICO 6503",
    district: "Mataderos"
  },
  {
    longitude: -58.51319188,
    latitude: -34.65219702,
    name: "SCHMIDL, ULRICO 6691",
    district: "Mataderos"
  },
  {
    longitude: -58.51523354,
    latitude: -34.65415423,
    name: "SCHMIDL, ULRICO 6991",
    district: "Mataderos"
  },
  {
    longitude: -58.51794129,
    latitude: -34.65646193,
    name: "SCHMIDL, ULRICO 7345",
    district: "Mataderos"
  },
  {
    longitude: -58.45850346,
    latitude: -34.6108967,
    name: "SEGUI, F. J., ALTE. 1295",
    district: "Caballito"
  },
  {
    longitude: -58.46226284,
    latitude: -34.60145592,
    name: "SEGUI, F. J., ALTE. 2145",
    district: "Paternal"
  },
  {
    longitude: -58.46122912,
    latitude: -34.59812716,
    name: "SEGUI, F. J., ALTE. 2467",
    district: "Paternal"
  },
  {
    longitude: -58.46081863,
    latitude: -34.59687283,
    name: "SEGUI, F. J., ALTE. 2587",
    district: "Paternal"
  },
  {
    longitude: -58.41019503,
    latitude: -34.57850804,
    name: "SEGUI, JUAN FRANCISCO 3675",
    district: "Palermo"
  },
  {
    longitude: -58.42042947,
    latitude: -34.57405016,
    name: "SEGUI, JUAN FRANCISCO 4522",
    district: "Palermo"
  },
  {
    longitude: -58.487192,
    latitude: -34.63017835,
    name: "SEGUROLA AV. 420",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49083353,
    latitude: -34.62728438,
    name: "SEGUROLA AV. 866",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49234974,
    latitude: -34.62607846,
    name: "SEGUROLA AV. 1088",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49344139,
    latitude: -34.62520796,
    name: "SEGUROLA AV. 1146",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49645634,
    latitude: -34.62281851,
    name: "SEGUROLA AV. 1434",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49873039,
    latitude: -34.62101554,
    name: "SEGUROLA AV. 1644",
    district: "Monte Castro"
  },
  {
    longitude: -58.50123076,
    latitude: -34.61903041,
    name: "SEGUROLA AV. 1898",
    district: "Monte Castro"
  },
  {
    longitude: -58.4402395,
    latitude: -34.59502511,
    name: "SERRANO 669",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43827501,
    latitude: -34.59384918,
    name: "SERRANO 849",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43629904,
    latitude: -34.59266744,
    name: "SERRANO 1029",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43253509,
    latitude: -34.59031648,
    name: "SERRANO 1367",
    district: "Palermo"
  },
  {
    longitude: -58.43087868,
    latitude: -34.58923649,
    name: "SERRANO 1519",
    district: "Palermo"
  },
  {
    longitude: -58.49487003,
    latitude: -34.59848723,
    name: "SIMBRON 3071",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49758928,
    latitude: -34.60010813,
    name: "SIMBRON 3281",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50302309,
    latitude: -34.60326352,
    name: "SIMBRON 3691",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50351897,
    latitude: -34.60351401,
    name: "SIMBRON 3721",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50656486,
    latitude: -34.60527464,
    name: "SIMBRON 3989",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50936635,
    latitude: -34.60700691,
    name: "SIMBRON 4245",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51234414,
    latitude: -34.60891393,
    name: "SIMBRON 4479",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51577206,
    latitude: -34.61116268,
    name: "SIMBRON 4749",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51876348,
    latitude: -34.61319485,
    name: "SIMBRON 5043",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52115305,
    latitude: -34.6155449,
    name: "SIMBRON 5245",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5247888,
    latitude: -34.61881988,
    name: "SIMBRON 5585",
    district: "Villa Real"
  },
  {
    longitude: -58.5280019,
    latitude: -34.62169577,
    name: "SIMBRON 5947",
    district: "Villa Real"
  },
  {
    longitude: -58.48678519,
    latitude: -34.58809853,
    name: "SOLANO LOPEZ, F., MARISCAL 2146",
    district: "Agronomia"
  },
  {
    longitude: -58.48847231,
    latitude: -34.58914233,
    name: "SOLANO LOPEZ, F., MARISCAL 2272",
    district: "Agronomia"
  },
  {
    longitude: -58.49750732,
    latitude: -34.59463355,
    name: "SOLANO LOPEZ, F., MARISCAL 3039",
    district: "Agronomia"
  },
  {
    longitude: -58.49906131,
    latitude: -34.59559771,
    name: "SOLANO LOPEZ, F., MARISCAL 3161",
    district: "Agronomia"
  },
  {
    longitude: -58.50021631,
    latitude: -34.59630319,
    name: "SOLANO LOPEZ, F., MARISCAL 3251",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50340012,
    latitude: -34.59827004,
    name: "SOLANO LOPEZ, F., MARISCAL 3491",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50558267,
    latitude: -34.59961923,
    name: "SOLANO LOPEZ, F., MARISCAL 3645",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50715414,
    latitude: -34.60059239,
    name: "SOLANO LOPEZ, F., MARISCAL 3773",
    district: "Villa Devoto"
  },
  {
    longitude: -58.43238968,
    latitude: -34.56869642,
    name: "SOLDADO DE LA INDEPENDENCIA 583",
    district: "Palermo"
  },
  {
    longitude: -58.43521242,
    latitude: -34.56706167,
    name: "SOLDADO DE LA INDEPENDENCIA 831",
    district: "Palermo"
  },
  {
    longitude: -58.43796515,
    latitude: -34.56544011,
    name: "SOLDADO DE LA INDEPENDENCIA 1081",
    district: "Palermo"
  },
  {
    longitude: -58.44002854,
    latitude: -34.56418521,
    name: "SOLDADO DE LA INDEPENDENCIA 1241",
    district: "Palermo"
  },
  {
    longitude: -58.41114812,
    latitude: -34.59656319,
    name: "SOLER 3250",
    district: "Recoleta"
  },
  {
    longitude: -58.41291578,
    latitude: -34.59530213,
    name: "SOLER 3422",
    district: "Recoleta"
  },
  {
    longitude: -58.41758804,
    latitude: -34.59164978,
    name: "SOLER 3985",
    district: "Palermo"
  },
  {
    longitude: -58.41933069,
    latitude: -34.59057018,
    name: "SOLER 4121",
    district: "Palermo"
  },
  {
    longitude: -58.4340991,
    latitude: -34.57961317,
    name: "SOLER 5755",
    district: "Palermo"
  },
  {
    longitude: -58.43535596,
    latitude: -34.57861592,
    name: "SOLER 5881",
    district: "Palermo"
  },
  {
    longitude: -58.43680621,
    latitude: -34.57746369,
    name: "SOLER 6017",
    district: "Palermo"
  },
  {
    longitude: -58.45058919,
    latitude: -34.54790016,
    name: "SOLIER, DANIEL DE, ALTE. 1020",
    district: "Belgrano"
  },
  {
    longitude: -58.43525976,
    latitude: -34.64363025,
    name: "SOMELLERA 1671",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43860827,
    latitude: -34.6443892,
    name: "SOMELLERA 1895",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.46955066,
    latitude: -34.66991448,
    name: "SOMELLERA 4896",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47328041,
    latitude: -34.67342046,
    name: "SOMELLERA 5394",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47390126,
    latitude: -34.67400721,
    name: "SOMELLERA 5442",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47473868,
    latitude: -34.67473637,
    name: "SOMELLERA 5520",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47861266,
    latitude: -34.6782196,
    name: "SOMELLERA 6011",
    district: "Villa Lugano"
  },
  {
    longitude: -58.5276314,
    latitude: -34.64059268,
    name: "SUAREZ, JOSE LEON 125",
    district: "Liniers"
  },
  {
    longitude: -58.52742993,
    latitude: -34.64356422,
    name: "SUAREZ, JOSE LEON 379",
    district: "Liniers"
  },
  {
    longitude: -58.5271318,
    latitude: -34.6479684,
    name: "SUAREZ, JOSE LEON 825",
    district: "Liniers"
  },
  {
    longitude: -58.50779011,
    latitude: -34.66668596,
    name: "SUAREZ, JOSE LEON 2609",
    district: "Mataderos"
  },
  {
    longitude: -58.50608756,
    latitude: -34.668254,
    name: "SUAREZ, JOSE LEON 2735",
    district: "Mataderos"
  },
  {
    longitude: -58.50383568,
    latitude: -34.67002524,
    name: "SUAREZ, JOSE LEON 2991",
    district: "Mataderos"
  },
  {
    longitude: -58.50047287,
    latitude: -34.67291954,
    name: "SUAREZ, JOSE LEON 3291",
    district: "Mataderos"
  },
  {
    longitude: -58.48177763,
    latitude: -34.68643781,
    name: "SUAREZ, JOSE LEON 4850",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47912516,
    latitude: -34.68844378,
    name: "SUAREZ, JOSE LEON 5072",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47747071,
    latitude: -34.68969472,
    name: "SUAREZ, JOSE LEON 5210",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47424298,
    latitude: -34.69213961,
    name: "SUAREZ, JOSE LEON 5490",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.47195698,
    latitude: -34.69386951,
    name: "SUAREZ, JOSE LEON 5676",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.46997323,
    latitude: -34.69537099,
    name: "SUAREZ, JOSE LEON 5840",
    district: "Villa Riachuelo"
  },
  {
    longitude: -58.49996768,
    latitude: -34.66705268,
    name: "SUAREZ, JUSTO ANTONIO 6819",
    district: "Mataderos"
  },
  {
    longitude: -58.5048809,
    latitude: -34.67110763,
    name: "SUAREZ, JUSTO ANTONIO 7471",
    district: "Mataderos"
  },
  {
    longitude: -58.4377562,
    latitude: -34.55359116,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 765",
    district: "Belgrano"
  },
  {
    longitude: -58.44129386,
    latitude: -34.55572344,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 1051",
    district: "Belgrano"
  },
  {
    longitude: -58.44217815,
    latitude: -34.55625468,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 1145",
    district: "Belgrano"
  },
  {
    longitude: -58.44347461,
    latitude: -34.55702406,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 1267",
    district: "Belgrano"
  },
  {
    longitude: -58.44552124,
    latitude: -34.55823621,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 1439",
    district: "Belgrano"
  },
  {
    longitude: -58.45349662,
    latitude: -34.56295166,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 2245",
    district: "Belgrano"
  },
  {
    longitude: -58.46626391,
    latitude: -34.57048394,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 3521",
    district: "Belgrano"
  },
  {
    longitude: -58.46754611,
    latitude: -34.57122149,
    name: "SUCRE, ANTONIO JOSE DE, MCAL. 3665",
    district: "Belgrano"
  },
  {
    longitude: -58.4570228,
    latitude: -34.60162477,
    name: "SUNCHALES 883",
    district: "Villa Crespo"
  },
  {
    longitude: -58.46192584,
    latitude: -34.5731219,
    name: "SUPERI 1515",
    district: "Belgrano"
  },
  {
    longitude: -58.46506288,
    latitude: -34.5695024,
    name: "SUPERI 1925",
    district: "Belgrano"
  },
  {
    longitude: -58.46608465,
    latitude: -34.56832221,
    name: "SUPERI 2055",
    district: "Belgrano"
  },
  {
    longitude: -58.46666186,
    latitude: -34.56765386,
    name: "SUPERI 2135",
    district: "Belgrano"
  },
  {
    longitude: -58.46747274,
    latitude: -34.56671134,
    name: "SUPERI 2221",
    district: "Belgrano"
  },
  {
    longitude: -58.46367887,
    latitude: -34.63572522,
    name: "TANDIL 2650",
    district: "Flores"
  },
  {
    longitude: -58.46625441,
    latitude: -34.63648785,
    name: "TANDIL 2840",
    district: "Flores"
  },
  {
    longitude: -58.46911691,
    latitude: -34.63733571,
    name: "TANDIL 3048",
    district: "Flores"
  },
  {
    longitude: -58.47203783,
    latitude: -34.63820917,
    name: "TANDIL 3308",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4857583,
    latitude: -34.64799704,
    name: "TANDIL 4575",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48763343,
    latitude: -34.64957323,
    name: "TANDIL 4741",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49386746,
    latitude: -34.65479026,
    name: "TANDIL 5491",
    district: "Mataderos"
  },
  {
    longitude: -58.50871313,
    latitude: -34.66722151,
    name: "TANDIL 7396",
    district: "Mataderos"
  },
  {
    longitude: -58.48856666,
    latitude: -34.6432704,
    name: "TAPALQUE 4560",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.49648727,
    latitude: -34.65012364,
    name: "TAPALQUE 5391",
    district: "Mataderos"
  },
  {
    longitude: -58.50223622,
    latitude: -34.65491726,
    name: "TAPALQUE 6013",
    district: "Mataderos"
  },
  {
    longitude: -58.50426749,
    latitude: -34.65661455,
    name: "TAPALQUE 6293",
    district: "Mataderos"
  },
  {
    longitude: -58.50527852,
    latitude: -34.65745564,
    name: "TAPALQUE 6419",
    district: "Mataderos"
  },
  {
    longitude: -58.50646374,
    latitude: -34.65844517,
    name: "TAPALQUE 6595",
    district: "Mataderos"
  },
  {
    longitude: -58.42884532,
    latitude: -34.6297991,
    name: "TEJEDOR 192",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43093802,
    latitude: -34.63008945,
    name: "TEJEDOR 350",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43428848,
    latitude: -34.63060428,
    name: "TEJEDOR 588",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43691323,
    latitude: -34.63097681,
    name: "TEJEDOR 810",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.49371479,
    latitude: -34.59362447,
    name: "TERRADA 3595",
    district: "Agronomia"
  },
  {
    longitude: -58.49546379,
    latitude: -34.59169107,
    name: "TERRADA 3847",
    district: "Agronomia"
  },
  {
    longitude: -58.49755283,
    latitude: -34.58937957,
    name: "TERRADA 4183",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49872445,
    latitude: -34.58808445,
    name: "TERRADA 4381",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50001219,
    latitude: -34.58665528,
    name: "TERRADA 4561",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50059593,
    latitude: -34.58601311,
    name: "TERRADA 4647",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50295442,
    latitude: -34.58341042,
    name: "TERRADA 4945",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.50431497,
    latitude: -34.58191191,
    name: "TERRADA 5163",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.47321712,
    latitude: -34.60230882,
    name: "TERRERO 2595",
    district: "Paternal"
  },
  {
    longitude: -58.47769339,
    latitude: -34.60195662,
    name: "TERRERO 3077",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.44016069,
    latitude: -34.59352262,
    name: "THAMES 778",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43560519,
    latitude: -34.59092721,
    name: "THAMES 1188",
    district: "Villa Crespo"
  },
  {
    longitude: -58.4347667,
    latitude: -34.5904121,
    name: "THAMES 1268",
    district: "Palermo"
  },
  {
    longitude: -58.43259331,
    latitude: -34.58897032,
    name: "THAMES 1462",
    district: "Palermo"
  },
  {
    longitude: -58.43088148,
    latitude: -34.58783062,
    name: "THAMES 1624",
    district: "Palermo"
  },
  {
    longitude: -58.42859534,
    latitude: -34.58631692,
    name: "THAMES 1862",
    district: "Palermo"
  },
  {
    longitude: -58.42670332,
    latitude: -34.58505482,
    name: "THAMES 2062",
    district: "Palermo"
  },
  {
    longitude: -58.42426065,
    latitude: -34.58315683,
    name: "THAMES 2290",
    district: "Palermo"
  },
  {
    longitude: -58.42241487,
    latitude: -34.58167616,
    name: "THAMES 2452",
    district: "Palermo"
  },
  {
    longitude: -58.4269335,
    latitude: -34.64293243,
    name: "TILCARA 2271",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42668358,
    latitude: -34.64391084,
    name: "TILCARA 2341",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.41989035,
    latitude: -34.65096533,
    name: "TILCARA AV. 3045",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.49284633,
    latitude: -34.59889144,
    name: "TINOGASTA 2976",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.495489,
    latitude: -34.60046466,
    name: "TINOGASTA 3174",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50169738,
    latitude: -34.60415644,
    name: "TINOGASTA 3750",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50453118,
    latitude: -34.60583305,
    name: "TINOGASTA 3976",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50712967,
    latitude: -34.60737531,
    name: "TINOGASTA 4252",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50922692,
    latitude: -34.60863049,
    name: "TINOGASTA 4426",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51147683,
    latitude: -34.61000398,
    name: "TINOGASTA 4594",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51342763,
    latitude: -34.61119598,
    name: "TINOGASTA 4726",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51452701,
    latitude: -34.61186638,
    name: "TINOGASTA 4810",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51914537,
    latitude: -34.61537278,
    name: "TINOGASTA 5154",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52179944,
    latitude: -34.6178,
    name: "TINOGASTA 5374",
    district: "Villa Real"
  },
  {
    longitude: -58.52702927,
    latitude: -34.62249847,
    name: "TINOGASTA 5944",
    district: "Villa Real"
  },
  {
    longitude: -58.52770395,
    latitude: -34.62310838,
    name: "TINOGASTA 6006",
    district: "Villa Real"
  },
  {
    longitude: -58.5196991,
    latitude: -34.6459243,
    name: "TONELERO 6544",
    district: "Liniers"
  },
  {
    longitude: -58.4245051,
    latitude: -34.61652743,
    name: "TREINTA Y TRES ORIENTALES 249",
    district: "Almagro"
  },
  {
    longitude: -58.42422753,
    latitude: -34.62012815,
    name: "TREINTA Y TRES ORIENTALES 587",
    district: "Almagro"
  },
  {
    longitude: -58.42339229,
    latitude: -34.62403627,
    name: "TREINTA Y TRES ORIENTALES 853",
    district: "Boedo"
  },
  {
    longitude: -58.42248011,
    latitude: -34.62820503,
    name: "TREINTA Y TRES ORIENTALES 1141",
    district: "Boedo"
  },
  {
    longitude: -58.42171165,
    latitude: -34.63178781,
    name: "TREINTA Y TRES ORIENTALES 1489",
    district: "Boedo"
  },
  {
    longitude: -58.42080472,
    latitude: -34.63623006,
    name: "TREINTA Y TRES ORIENTALES 1931",
    district: "Boedo"
  },
  {
    longitude: -58.46692995,
    latitude: -34.60084236,
    name: "TRELLES, MANUEL R. AV. 2414",
    district: "Paternal"
  },
  {
    longitude: -58.46654561,
    latitude: -34.59956353,
    name: "TRELLES, MANUEL R. AV. 2528",
    district: "Paternal"
  },
  {
    longitude: -58.46619557,
    latitude: -34.59837575,
    name: "TRELLES, MANUEL R. AV. 2642",
    district: "Paternal"
  },
  {
    longitude: -58.45641046,
    latitude: -34.60688276,
    name: "TRES ARROYOS 1187",
    district: "Caballito"
  },
  {
    longitude: -58.45942141,
    latitude: -34.60829441,
    name: "TRES ARROYOS 1441",
    district: "Caballito"
  },
  {
    longitude: -58.46370707,
    latitude: -34.61056086,
    name: "TRES ARROYOS 1835",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46722007,
    latitude: -34.61241257,
    name: "TRES ARROYOS 2105",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46873265,
    latitude: -34.61321598,
    name: "TRES ARROYOS 2251",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47112343,
    latitude: -34.6144817,
    name: "TRES ARROYOS 2461",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47849943,
    latitude: -34.61837993,
    name: "TRES ARROYOS 3039",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48114444,
    latitude: -34.61976924,
    name: "TRES ARROYOS 3255",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48357389,
    latitude: -34.62135359,
    name: "TRES ARROYOS 3495",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.48411277,
    latitude: -34.62181331,
    name: "TRES ARROYOS 3573",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.46242848,
    latitude: -34.58503612,
    name: "TRIUNVIRATO AV. 2823",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46448353,
    latitude: -34.58462505,
    name: "TRIUNVIRATO AV. 2973",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46820454,
    latitude: -34.58341358,
    name: "TRIUNVIRATO AV. 3277",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47120917,
    latitude: -34.5824372,
    name: "TRIUNVIRATO AV. 3515",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.47526553,
    latitude: -34.58031098,
    name: "TRIUNVIRATO AV. 3850",
    district: "Parque Chas"
  },
  {
    longitude: -58.47280817,
    latitude: -34.59038595,
    name: "TRONADOR 55",
    district: "Paternal"
  },
  {
    longitude: -58.46620266,
    latitude: -34.58333401,
    name: "TRONADOR 845",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46683996,
    latitude: -34.57759002,
    name: "TRONADOR 1471",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.46869841,
    latitude: -34.57536514,
    name: "TRONADOR 1685",
    district: "Villa Ortuzar"
  },
  {
    longitude: -58.4059726,
    latitude: -34.60172254,
    name: "TUCUMAN 2805",
    district: "Balvanera"
  },
  {
    longitude: -58.40792822,
    latitude: -34.60103608,
    name: "TUCUMAN 3011",
    district: "Balvanera"
  },
  {
    longitude: -58.41070874,
    latitude: -34.60051516,
    name: "TUCUMAN 3195",
    district: "Balvanera"
  },
  {
    longitude: -58.41437345,
    latitude: -34.59970748,
    name: "TUCUMAN 3457",
    district: "Almagro"
  },
  {
    longitude: -58.41664859,
    latitude: -34.59906644,
    name: "TUCUMAN 3637",
    district: "Almagro"
  },
  {
    longitude: -58.42000546,
    latitude: -34.59816067,
    name: "TUCUMAN 3891",
    district: "Almagro"
  },
  {
    longitude: -58.45270579,
    latitude: -34.54707183,
    name: "UDAONDO, GUILLERMO AV. 1281",
    district: "Nuñez"
  },
  {
    longitude: -58.45440542,
    latitude: -34.55242768,
    name: "UGARTE, MANUEL 1667",
    district: "Belgrano"
  },
  {
    longitude: -58.45626358,
    latitude: -34.55344762,
    name: "UGARTE, MANUEL 1837",
    district: "Belgrano"
  },
  {
    longitude: -58.46949558,
    latitude: -34.6768502,
    name: "UNANUE 5409",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47822921,
    latitude: -34.68427607,
    name: "UNANUE 6405",
    district: "Villa Lugano"
  },
  {
    longitude: -58.43875189,
    latitude: -34.5918449,
    name: "URIARTE 958",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43704008,
    latitude: -34.59074446,
    name: "URIARTE 1118",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43474384,
    latitude: -34.58915797,
    name: "URIARTE 1356",
    district: "Palermo"
  },
  {
    longitude: -58.43274157,
    latitude: -34.58783554,
    name: "URIARTE 1534",
    district: "Palermo"
  },
  {
    longitude: -58.42832355,
    latitude: -34.58489038,
    name: "URIARTE 1954",
    district: "Palermo"
  },
  {
    longitude: -58.42651621,
    latitude: -34.58375195,
    name: "URIARTE 2157",
    district: "Palermo"
  },
  {
    longitude: -58.42420789,
    latitude: -34.58192244,
    name: "URIARTE 2363",
    district: "Palermo"
  },
  {
    longitude: -58.40768674,
    latitude: -34.63677156,
    name: "URQUIZA, GRAL. 2243",
    district: "Parque Patricios"
  },
  {
    longitude: -58.46832344,
    latitude: -34.56599423,
    name: "URTUBEY CLODOMIRO CDRO. 2308",
    district: "Belgrano"
  },
  {
    longitude: -58.38832017,
    latitude: -34.6360248,
    name: "USPALlatitudeA 1795",
    district: "Barracas"
  },
  {
    longitude: -58.39625811,
    latitude: -34.63781898,
    name: "USPALlatitudeA 2473",
    district: "Parque Patricios"
  },
  {
    longitude: -58.36262421,
    latitude: -34.63810143,
    name: "VALLE IBERLUCEA DEL, DR. 1113",
    district: "Boca"
  },
  {
    longitude: -58.37410186,
    latitude: -34.63619918,
    name: "VALLE, ARISTOBULO DEL 1610",
    district: "Barracas"
  },
  {
    longitude: -58.50623302,
    latitude: -34.59123287,
    name: "VALLEJOS 3310",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51531708,
    latitude: -34.59683573,
    name: "VALLEJOS 4054",
    district: "Villa Devoto"
  },
  {
    longitude: -58.5189233,
    latitude: -34.59906398,
    name: "VALLEJOS 4350",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52127959,
    latitude: -34.60052117,
    name: "VALLEJOS 4538",
    district: "Villa Devoto"
  },
  {
    longitude: -58.44827167,
    latitude: -34.61417479,
    name: "VALLESE, FELIPE 989",
    district: "Caballito"
  },
  {
    longitude: -58.456413,
    latitude: -34.61701128,
    name: "VALLESE, FELIPE 1567",
    district: "Caballito"
  },
  {
    longitude: -58.45926776,
    latitude: -34.61813998,
    name: "VALLESE, FELIPE 1827",
    district: "Flores"
  },
  {
    longitude: -58.4623375,
    latitude: -34.61966179,
    name: "VALLESE, FELIPE 2055",
    district: "Flores"
  },
  {
    longitude: -58.46402115,
    latitude: -34.62023466,
    name: "VALLESE, FELIPE 2211",
    district: "Flores"
  },
  {
    longitude: -58.46536848,
    latitude: -34.62070422,
    name: "VALLESE, FELIPE 2335",
    district: "Flores"
  },
  {
    longitude: -58.46785757,
    latitude: -34.62157819,
    name: "VALLESE, FELIPE 2525",
    district: "Flores"
  },
  {
    longitude: -58.47115521,
    latitude: -34.62256949,
    name: "VALLESE, FELIPE 2765",
    district: "Flores"
  },
  {
    longitude: -58.43639226,
    latitude: -34.65750911,
    name: "VARELA AV. 2991",
    district: "Villa Soldati"
  },
  {
    longitude: -58.4350808,
    latitude: -34.65882015,
    name: "VARELA AV. 3139",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43412797,
    latitude: -34.65977477,
    name: "VARELA AV. 3217",
    district: "Villa Soldati"
  },
  {
    longitude: -58.43296358,
    latitude: -34.66094262,
    name: "VARELA AV. 3405",
    district: "Villa Soldati"
  },
  {
    longitude: -58.49669617,
    latitude: -34.59817652,
    name: "VARELA, JOSE PEDRO 3152",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.49961912,
    latitude: -34.59991708,
    name: "VARELA, JOSE PEDRO 3352",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50074235,
    latitude: -34.60058405,
    name: "VARELA, JOSE PEDRO 3450",
    district: "Villa Del Parque"
  },
  {
    longitude: -58.50595701,
    latitude: -34.6036659,
    name: "VARELA, JOSE PEDRO 3844",
    district: "Villa Devoto"
  },
  {
    longitude: -58.50915731,
    latitude: -34.60564822,
    name: "VARELA, JOSE PEDRO 4164",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51076375,
    latitude: -34.60664995,
    name: "VARELA, JOSE PEDRO 4322",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51358998,
    latitude: -34.60846,
    name: "VARELA, JOSE PEDRO 4528",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51528941,
    latitude: -34.60954955,
    name: "VARELA, JOSE PEDRO 4650",
    district: "Villa Devoto"
  },
  {
    longitude: -58.51871249,
    latitude: -34.61174535,
    name: "VARELA, JOSE PEDRO 4926",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52072393,
    latitude: -34.61344035,
    name: "VARELA, JOSE PEDRO 5122",
    district: "Villa Devoto"
  },
  {
    longitude: -58.52236348,
    latitude: -34.61489806,
    name: "VARELA, JOSE PEDRO 5256",
    district: "Villa Devoto"
  },
  {
    longitude: -58.42558,
    latitude: -34.65363886,
    name: "VEDIA, AGUSTIN DE 3174",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.42269685,
    latitude: -34.65571783,
    name: "VEDIA, AGUSTIN DE 3518",
    district: "Nueva Pompeya"
  },
  {
    longitude: -58.43921928,
    latitude: -34.58690057,
    name: "VEGA, NICETO, CNEL. AV. 5596",
    district: "Palermo"
  },
  {
    longitude: -58.44209415,
    latitude: -34.58490784,
    name: "VEGA, NICETO, CNEL. AV. 5858",
    district: "Palermo"
  },
  {
    longitude: -58.44422806,
    latitude: -34.58340979,
    name: "VEGA, NICETO, CNEL. AV. 6070",
    district: "Palermo"
  },
  {
    longitude: -58.3901763,
    latitude: -34.63496874,
    name: "VELEZ SARSFIELD AV. 68",
    district: "Barracas"
  },
  {
    longitude: -58.38999478,
    latitude: -34.6373618,
    name: "VELEZ SARSFIELD AV. 262",
    district: "Barracas"
  },
  {
    longitude: -58.38923521,
    latitude: -34.64702871,
    name: "VELEZ SARSFIELD AV. 1108",
    district: "Barracas"
  },
  {
    longitude: -58.38910709,
    latitude: -34.6499664,
    name: "VELEZ SARSFIELD AV. 1320",
    district: "Barracas"
  },
  {
    longitude: -58.38873932,
    latitude: -34.65323122,
    name: "VELEZ SARSFIELD AV. 1560",
    district: "Barracas"
  },
  {
    longitude: -58.38846896,
    latitude: -34.65663666,
    name: "VELEZ SARSFIELD AV. 1772",
    district: "Barracas"
  },
  {
    longitude: -58.48850719,
    latitude: -34.59678146,
    name: "VENECIA 3150",
    district: "Agronomia"
  },
  {
    longitude: -58.43460078,
    latitude: -34.60213962,
    name: "VERA 107",
    district: "Villa Crespo"
  },
  {
    longitude: -58.43568407,
    latitude: -34.60107308,
    name: "VERA 255",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44387779,
    latitude: -34.59252272,
    name: "VERA 1240",
    district: "Villa Crespo"
  },
  {
    longitude: -58.42595542,
    latitude: -34.63236242,
    name: "VERNET AV. 21",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42909296,
    latitude: -34.63289176,
    name: "VERNET AV. 275",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45486076,
    latitude: -34.60900846,
    name: "VIALE, LUIS 1183",
    district: "Caballito"
  },
  {
    longitude: -58.46285193,
    latitude: -34.61291085,
    name: "VIALE, LUIS 1895",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46529158,
    latitude: -34.61430743,
    name: "VIALE, LUIS 2085",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.4672436,
    latitude: -34.61528296,
    name: "VIALE, LUIS 2245",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.46977392,
    latitude: -34.61662093,
    name: "VIALE, LUIS 2495",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47144331,
    latitude: -34.61750327,
    name: "VIALE, LUIS 2619",
    district: "Villa Gral. Mitre"
  },
  {
    longitude: -58.47443229,
    latitude: -34.61909161,
    name: "VIALE, LUIS 2855",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47618095,
    latitude: -34.62003796,
    name: "VIALE, LUIS 2995",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.47827621,
    latitude: -34.62113596,
    name: "VIALE, LUIS 3159",
    district: "Villa Santa Rita"
  },
  {
    longitude: -58.39396729,
    latitude: -34.60089477,
    name: "VIAMONTE 1880",
    district: "Balvanera"
  },
  {
    longitude: -58.39663624,
    latitude: -34.60102488,
    name: "VIAMONTE 2068",
    district: "Balvanera"
  },
  {
    longitude: -58.39953691,
    latitude: -34.60114312,
    name: "VIAMONTE 2280",
    district: "Balvanera"
  },
  {
    longitude: -58.40198671,
    latitude: -34.60111889,
    name: "VIAMONTE 2478",
    district: "Balvanera"
  },
  {
    longitude: -58.40402489,
    latitude: -34.60095765,
    name: "VIAMONTE 2644",
    district: "Balvanera"
  },
  {
    longitude: -58.40629775,
    latitude: -34.60077745,
    name: "VIAMONTE 2866",
    district: "Balvanera"
  },
  {
    longitude: -58.47905543,
    latitude: -34.58054303,
    name: "VICTORICA, BENJAMIN, GENERAL, AV. 2484",
    district: "Parque Chas"
  },
  {
    longitude: -58.4794443,
    latitude: -34.58441879,
    name: "VICTORICA, BENJAMIN, GENERAL, AV. 2777",
    district: "Parque Chas"
  },
  {
    longitude: -58.48012741,
    latitude: -34.58755133,
    name: "VICTORICA, BENJAMIN, GENERAL, AV. 3038",
    district: "Parque Chas"
  },
  {
    longitude: -58.52223906,
    latitude: -34.63259471,
    name: "VIENA 6466",
    district: "Versalles"
  },
  {
    longitude: -58.52490614,
    latitude: -34.63308393,
    name: "VIENA 6641",
    district: "Versalles"
  },
  {
    longitude: -58.46316636,
    latitude: -34.54235493,
    name: "VILELA 1633",
    district: "Nuñez"
  },
  {
    longitude: -58.46363573,
    latitude: -34.54264222,
    name: "VILELA 1705",
    district: "Nuñez"
  },
  {
    longitude: -58.35781171,
    latitude: -34.63071732,
    name: "VILLAFAÑE, WENCESLAO 181",
    district: "Boca"
  },
  {
    longitude: -58.36264509,
    latitude: -34.63269926,
    name: "VILLAFAÑE, WENCESLAO 519",
    district: "Boca"
  },
  {
    longitude: -58.37270548,
    latitude: -34.63486133,
    name: "VILLAFAÑE, WENCESLAO 1457",
    district: "Barracas"
  },
  {
    longitude: -58.43883118,
    latitude: -34.56851554,
    name: "VILLANUEVA 961",
    district: "Palermo"
  },
  {
    longitude: -58.44306045,
    latitude: -34.56505169,
    name: "VILLANUEVA 1350",
    district: "Palermo"
  },
  {
    longitude: -58.37826145,
    latitude: -34.65398365,
    name: "VILLARINO 2345",
    district: "Barracas"
  },
  {
    longitude: -58.44629638,
    latitude: -34.5914112,
    name: "VILLARROEL 1451",
    district: "Chacarita"
  },
  {
    longitude: -58.44590581,
    latitude: -34.60521465,
    name: "VIRASORO, VALENTIN 1345",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44741096,
    latitude: -34.60353238,
    name: "VIRASORO, VALENTIN 1571",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44949913,
    latitude: -34.60128528,
    name: "VIRASORO, VALENTIN 1791",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45067894,
    latitude: -34.60002359,
    name: "VIRASORO, VALENTIN 1953",
    district: "Villa Crespo"
  },
  {
    longitude: -58.45258172,
    latitude: -34.56495599,
    name: "VUELTA DE OBLIGADO 1725",
    district: "Belgrano"
  },
  {
    longitude: -58.45717753,
    latitude: -34.55965483,
    name: "VUELTA DE OBLIGADO 2285",
    district: "Belgrano"
  },
  {
    longitude: -58.45907505,
    latitude: -34.55744529,
    name: "VUELTA DE OBLIGADO 2523",
    district: "Belgrano"
  },
  {
    longitude: -58.46014714,
    latitude: -34.55620503,
    name: "VUELTA DE OBLIGADO 2655",
    district: "Belgrano"
  },
  {
    longitude: -58.46517093,
    latitude: -34.55088954,
    name: "VUELTA DE OBLIGADO 3283",
    district: "Nuñez"
  },
  {
    longitude: -58.46685268,
    latitude: -34.54859163,
    name: "VUELTA DE OBLIGADO 3587",
    district: "Nuñez"
  },
  {
    longitude: -58.46971693,
    latitude: -34.54486428,
    name: "VUELTA DE OBLIGADO 4092",
    district: "Nuñez"
  },
  {
    longitude: -58.47012177,
    latitude: -34.54413224,
    name: "VUELTA DE OBLIGADO 4177",
    district: "Nuñez"
  },
  {
    longitude: -58.47300152,
    latitude: -34.54025003,
    name: "VUELTA DE OBLIGADO 4695",
    district: "Nuñez"
  },
  {
    longitude: -58.43999187,
    latitude: -34.6033354,
    name: "WARNES AV. 184",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44202907,
    latitude: -34.60249064,
    name: "WARNES AV. 344",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44306646,
    latitude: -34.60206238,
    name: "WARNES AV. 452",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44714491,
    latitude: -34.60062451,
    name: "WARNES AV. 750",
    district: "Villa Crespo"
  },
  {
    longitude: -58.44976809,
    latitude: -34.5997514,
    name: "WARNES AV. 912",
    district: "Villa Crespo"
  },
  {
    longitude: -58.46140999,
    latitude: -34.59663696,
    name: "WARNES AV. 1828",
    district: "Paternal"
  },
  {
    longitude: -58.47730563,
    latitude: -34.59715399,
    name: "WARNES AV. 2748",
    district: "Paternal"
  },
  {
    longitude: -58.46766067,
    latitude: -34.57166018,
    name: "WASHINGTON 1869",
    district: "Belgrano"
  },
  {
    longitude: -58.46809329,
    latitude: -34.57115321,
    name: "WASHINGTON 1931",
    district: "Belgrano"
  },
  {
    longitude: -58.47081768,
    latitude: -34.56797163,
    name: "WASHINGTON 2285",
    district: "Belgrano"
  },
  {
    longitude: -58.49132336,
    latitude: -34.64417519,
    name: "WHITE 716",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48789747,
    latitude: -34.6468719,
    name: "WHITE 1010",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.48111231,
    latitude: -34.65231876,
    name: "WHITE 1641",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47681428,
    latitude: -34.65557286,
    name: "WHITE 1990",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47591747,
    latitude: -34.65629324,
    name: "WHITE 2038",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.42161117,
    latitude: -34.61695091,
    name: "YAPEYU 413",
    district: "Almagro"
  },
  {
    longitude: -58.42102663,
    latitude: -34.62069423,
    name: "YAPEYU 747",
    district: "Almagro"
  },
  {
    longitude: -58.42809962,
    latitude: -34.61344973,
    name: "YATAY 87",
    district: "Almagro"
  },
  {
    longitude: -58.45569556,
    latitude: -34.62492494,
    name: "YERBAL 1773",
    district: "Flores"
  },
  {
    longitude: -58.45883615,
    latitude: -34.62610818,
    name: "YERBAL 2045",
    district: "Flores"
  },
  {
    longitude: -58.46114614,
    latitude: -34.62696695,
    name: "YERBAL 2291",
    district: "Flores"
  },
  {
    longitude: -58.46235487,
    latitude: -34.62734218,
    name: "YERBAL 2343",
    district: "Flores"
  },
  {
    longitude: -58.4682254,
    latitude: -34.62889322,
    name: "YERBAL 2755",
    district: "Flores"
  },
  {
    longitude: -58.46982995,
    latitude: -34.62930005,
    name: "YERBAL 2873",
    district: "Flores"
  },
  {
    longitude: -58.47347546,
    latitude: -34.63023826,
    name: "YERBAL 3149",
    district: "Flores"
  },
  {
    longitude: -58.49252912,
    latitude: -34.63534532,
    name: "YERBAL 4705",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.49453143,
    latitude: -34.63578963,
    name: "YERBAL 4855",
    district: "Velez Sarsfield"
  },
  {
    longitude: -58.50030026,
    latitude: -34.6365644,
    name: "YERBAL 5245",
    district: "Villa Luro"
  },
  {
    longitude: -58.50239175,
    latitude: -34.63683609,
    name: "YERBAL 5411",
    district: "Villa Luro"
  },
  {
    longitude: -58.50636008,
    latitude: -34.63739379,
    name: "YERBAL 5709",
    district: "Villa Luro"
  },
  {
    longitude: -58.50882167,
    latitude: -34.63781919,
    name: "YERBAL 5893",
    district: "Villa Luro"
  },
  {
    longitude: -58.51308844,
    latitude: -34.63836569,
    name: "YERBAL 6195",
    district: "Liniers"
  },
  {
    longitude: -58.51423818,
    latitude: -34.6384102,
    name: "YERBAL 6291",
    district: "Liniers"
  },
  {
    longitude: -58.46617023,
    latitude: -34.59433601,
    name: "YERUA 4907",
    district: "Paternal"
  },
  {
    longitude: -58.39274609,
    latitude: -34.6104388,
    name: "YRIGOYEN, HIPOLITO 1864",
    district: "Balvanera"
  },
  {
    longitude: -58.39551632,
    latitude: -34.61059389,
    name: "YRIGOYEN, HIPOLITO 2054",
    district: "Balvanera"
  },
  {
    longitude: -58.39819684,
    latitude: -34.61077835,
    name: "YRIGOYEN, HIPOLITO 2230",
    district: "Balvanera"
  },
  {
    longitude: -58.40094613,
    latitude: -34.61098579,
    name: "YRIGOYEN, HIPOLITO 2440",
    district: "Balvanera"
  },
  {
    longitude: -58.40402628,
    latitude: -34.61118887,
    name: "YRIGOYEN, HIPOLITO 2670",
    district: "Balvanera"
  },
  {
    longitude: -58.406471,
    latitude: -34.61134812,
    name: "YRIGOYEN, HIPOLITO 2836",
    district: "Balvanera"
  },
  {
    longitude: -58.40916315,
    latitude: -34.61149436,
    name: "YRIGOYEN, HIPOLITO 3026",
    district: "Balvanera"
  },
  {
    longitude: -58.41198681,
    latitude: -34.61204977,
    name: "YRIGOYEN, HIPOLITO 3220",
    district: "Balvanera"
  },
  {
    longitude: -58.44515465,
    latitude: -34.56512426,
    name: "ZABALA 1960",
    district: "Palermo"
  },
  {
    longitude: -58.44598533,
    latitude: -34.56567559,
    name: "ZABALA 2056",
    district: "Palermo"
  },
  {
    longitude: -58.44707827,
    latitude: -34.56631915,
    name: "ZABALA 2174",
    district: "Palermo"
  },
  {
    longitude: -58.452545,
    latitude: -34.57229546,
    name: "ZABALA 2891",
    district: "Colegiales"
  },
  {
    longitude: -58.48523523,
    latitude: -34.59533239,
    name: "ZAMUDIO 3254",
    district: "Agronomia"
  },
  {
    longitude: -58.48983602,
    latitude: -34.59010845,
    name: "ZAMUDIO 3691",
    district: "Agronomia"
  },
  {
    longitude: -58.49043439,
    latitude: -34.58944079,
    name: "ZAMUDIO 3787",
    district: "Agronomia"
  },
  {
    longitude: -58.49088425,
    latitude: -34.5889421,
    name: "ZAMUDIO 3837",
    district: "Agronomia"
  },
  {
    longitude: -58.49303763,
    latitude: -34.58656821,
    name: "ZAMUDIO 4195",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49411562,
    latitude: -34.58537292,
    name: "ZAMUDIO 4359",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49519181,
    latitude: -34.58418563,
    name: "ZAMUDIO 4503",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49721314,
    latitude: -34.58208181,
    name: "ZAMUDIO 4788",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.49757102,
    latitude: -34.58168884,
    name: "ZAMUDIO 4830",
    district: "Villa Pueyrredon"
  },
  {
    longitude: -58.42636732,
    latitude: -34.6384842,
    name: "ZAÑARTU 573",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4284566,
    latitude: -34.63880921,
    name: "ZAÑARTU 741",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43117698,
    latitude: -34.63930707,
    name: "ZAÑARTU 965",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43498098,
    latitude: -34.63969892,
    name: "ZAÑARTU 1265",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43837992,
    latitude: -34.6404759,
    name: "ZAÑARTU 1491",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44039656,
    latitude: -34.64099018,
    name: "ZAÑARTU 1621",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44560553,
    latitude: -34.57726055,
    name: "ZAPIOLA 398",
    district: "Colegiales"
  },
  {
    longitude: -58.44724608,
    latitude: -34.57657342,
    name: "ZAPIOLA 582",
    district: "Colegiales"
  },
  {
    longitude: -58.4475626,
    latitude: -34.57643898,
    name: "ZAPIOLA 606",
    district: "Colegiales"
  },
  {
    longitude: -58.45102996,
    latitude: -34.57475487,
    name: "ZAPIOLA 932",
    district: "Colegiales"
  },
  {
    longitude: -58.45794926,
    latitude: -34.57101396,
    name: "ZAPIOLA 1586",
    district: "Colegiales"
  },
  {
    longitude: -58.45973205,
    latitude: -34.57023601,
    name: "ZAPIOLA 1686",
    district: "Belgrano"
  },
  {
    longitude: -58.40197029,
    latitude: -34.64462164,
    name: "ZAVALETA 670",
    district: "Parque Patricios"
  },
  {
    longitude: -58.49477221,
    latitude: -34.64181348,
    name: "ZELADA 4841",
    district: "Villa Luro"
  },
  {
    longitude: -58.49778112,
    latitude: -34.64223053,
    name: "ZELADA 5067",
    district: "Villa Luro"
  },
  {
    longitude: -58.50414643,
    latitude: -34.64744735,
    name: "ZELADA 5845",
    district: "Mataderos"
  },
  {
    longitude: -58.50898463,
    latitude: -34.65189956,
    name: "ZELADA 6391",
    district: "Mataderos"
  },
  {
    longitude: -58.50968643,
    latitude: -34.65256608,
    name: "ZELADA 6493",
    district: "Mataderos"
  },
  {
    longitude: -58.51162871,
    latitude: -34.65440267,
    name: "ZELADA 6791",
    district: "Mataderos"
  },
  {
    longitude: -58.51523423,
    latitude: -34.65788892,
    name: "ZELADA 7295",
    district: "Mataderos"
  },
  {
    longitude: -58.4247145,
    latitude: -34.63927492,
    name: "ZELARRAYAN 565",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42716248,
    latitude: -34.63968553,
    name: "ZELARRAYAN 745",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.42946708,
    latitude: -34.64007808,
    name: "ZELARRAYAN 943",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43318434,
    latitude: -34.64086568,
    name: "ZELARRAYAN 1280",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43594609,
    latitude: -34.64141776,
    name: "ZELARRAYAN 1460",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43845267,
    latitude: -34.64184028,
    name: "ZELARRAYAN 1615",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44108853,
    latitude: -34.64235391,
    name: "ZELARRAYAN 1805",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.46951852,
    latitude: -34.66589794,
    name: "ZELARRAYAN 4572",
    district: "Villa Lugano"
  },
  {
    longitude: -58.47112181,
    latitude: -34.65241974,
    name: "ZINNY 1676",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.46991769,
    latitude: -34.65337354,
    name: "ZINNY 1750",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.42772725,
    latitude: -34.62846354,
    name: "ZUVIRIA 95",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43013723,
    latitude: -34.62881392,
    name: "ZUVIRIA 255",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.4331578,
    latitude: -34.62925509,
    name: "ZUVIRIA 489",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.43620098,
    latitude: -34.62968623,
    name: "ZUVIRIA 759",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44005959,
    latitude: -34.63075111,
    name: "ZUVIRIA 983",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.44971259,
    latitude: -34.63773948,
    name: "ZUVIRIA 2038",
    district: "Parque Chacabuco"
  },
  {
    longitude: -58.45180497,
    latitude: -34.63943906,
    name: "ZUVIRIA 2252",
    district: "Flores"
  },
  {
    longitude: -58.45597425,
    latitude: -34.64299892,
    name: "ZUVIRIA 2680",
    district: "Flores"
  },
  {
    longitude: -58.45796795,
    latitude: -34.64447211,
    name: "ZUVIRIA 2840",
    district: "Flores"
  },
  {
    longitude: -58.46008216,
    latitude: -34.64602797,
    name: "ZUVIRIA 3042",
    district: "Flores"
  },
  {
    longitude: -58.46224331,
    latitude: -34.64766767,
    name: "ZUVIRIA 3254",
    district: "Flores"
  },
  {
    longitude: -58.47145992,
    latitude: -34.65617075,
    name: "ZUVIRIA 4136",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.47522555,
    latitude: -34.6595148,
    name: "ZUVIRIA 4449",
    district: "Parque Avellaneda"
  },
  {
    longitude: -58.4867242,
    latitude: -34.66956495,
    name: "ZUVIRIA 5786",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49237346,
    latitude: -34.67485211,
    name: "ZUVIRIA 6570",
    district: "Villa Lugano"
  },
  {
    longitude: -58.49543707,
    latitude: -34.67758754,
    name: "ZUVIRIA 6930",
    district: "Villa Lugano"
  }
];

export default bells;
