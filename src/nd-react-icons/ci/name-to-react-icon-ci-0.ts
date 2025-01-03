import type {IconType} from "react-icons";

import {
    CiAirportSign1,
    CiAlarmOff,
    CiAlarmOn,
    CiAlignBottom,
    CiAlignCenterH,
    CiAlignCenterV,
    CiAlignLeft,
    CiAlignRight,
    CiAlignTop,
    CiApple,
    CiAt,
    CiAvocado,
    CiBacon,
    CiBadgeDollar,
    CiBag1,
    CiBandage,
    CiBank,
    CiBarcode,
    CiBaseball,
    CiBasketball,
    CiBatteryCharging,
    CiBatteryEmpty,
    CiBatteryFull,
    CiBeaker1,
    CiBeerMugFull,
    CiBellOff,
    CiBellOn,
    CiBezier,
    CiBitcoin,
    CiBluetooth,
    CiBookmarkCheck,
    CiBookmarkMinus,
    CiBookmarkPlus,
    CiBookmarkRemove,
    CiBookmark,
    CiBowlNoodles,
    CiBoxList,
    CiBoxes,
    CiBrightnessDown,
    CiBrightnessUp,
    CiBullhorn,
    CiBurger,
    CiCalculator1,
    CiCalculator2,
    CiCalendarDate,
    CiCalendar,
    CiCamera,
    CiChat1,
    CiChat2,
    CiCircleAlert,
    CiCircleCheck,
    CiCircleChevDown,
    CiCircleChevLeft,
    CiCircleChevRight,
    CiCircleChevUp,
    CiCircleInfo,
    CiCircleList,
    CiCircleMinus,
    CiCircleMore,
    CiCirclePlus,
    CiCircleQuestion,
    CiCircleRemove,
    CiClock1,
    CiClock2,
    CiCloudDrizzle,
    CiCloudMoon,
    CiCloudOff,
    CiCloudOn,
    CiCloudRainbow,
    CiCloudSun,
    CiCloud,
    CiCoffeeBean,
    CiCoffeeCup,
    CiCoinInsert,
    CiCoins1,
    CiCompass1,
    CiCreditCard1,
    CiCreditCard2,
    CiCreditCardOff,
    CiCrop,
    CiDark,
    CiDatabase,
    CiDeliveryTruck,
    CiDesktopMouse1,
    CiDesktopMouse2,
    CiDesktop,
    CiDiscount1,
    CiDollar,
    CiDroplet,
    CiDumbbell,
    CiEdit,
    CiEraser,
    CiExport,
    CiFaceFrown,
    CiFaceMeh,
    CiFaceSmile,
    CiFacebook,
    CiFileOff,
    CiFileOn,
    CiFilter,
    CiFlag1,
    CiFloppyDisk,
    CiFolderOff,
    CiFolderOn,
    CiFootball,
    CiForkAndKnife,
    CiFries,
    CiGift,
    CiGlass,
    CiGlobe,
    CiGps,
    CiGrid2H,
    CiGrid2V,
    CiGrid31,
    CiGrid32,
    CiGrid41,
    CiGrid42,
    CiHardDrive,
    CiHashtag,
    CiHeadphones,
    CiHeart,
    CiHome,
    CiHospital1,
    CiHotdog,
    CiIceCream,
    CiImageOff,
    CiImageOn,
    CiImport,
    CiInboxIn,
    CiInboxOut,
    CiIndent,
    CiInstagram,
    CiKeyboard,
    CiLaptop,
    CiLemon,
    CiLight,
    CiLineHeight,
    CiLink,
    CiLinkedin,
    CiLocationArrow1,
    CiLocationOff,
    CiLocationOn,
    CiLock,
    CiLogin,
    CiLogout,
    CiLollipop,
    CiMail,
    CiMapPin,
    CiMap,
    CiMaximize1,
    CiMaximize2,
    CiMedal,
    CiMedicalCase,
    CiMedicalClipboard,
    CiMedicalCross,
    CiMedicalMask,
    CiMemoPad,
    CiMenuBurger,
    CiMenuFries,
    CiMenuKebab,
    CiMicrochip,
    CiMicrophoneOff,
    CiMicrophoneOn,
    CiMinimize1,
    CiMinimize2,
    CiMobile1,
    CiMobile2,
    CiMobile3,
    CiMobile4,
    CiMoneyBill,
    CiMoneyCheck1,
    CiMonitor,
    CiMountain1,
    CiMug1,
    CiMusicNote1,
    CiNoWaitingSign,
    CiPalette,
    CiPaperplane,
    CiParking1,
    CiPassport1,
    CiPause1,
    CiPen,
    CiPenpot,
    CiPercent,
    CiPhone,
    CiPickerEmpty,
    CiPickerHalf,
    CiPill,
    CiPillsBottle1,
    CiPizza,
    CiPlane,
    CiPlay1,
    CiPlug1,
    CiPower,
    CiRainbow,
    CiRead,
    CiReceipt,
    CiRedo,
    CiRepeat,
    CiRollingSuitcase,
    CiRoute,
    CiRouter,
    CiRuler,
    CiSatellite1,
    CiSaveDown1,
    CiSaveDown2,
    CiSaveUp1,
    CiSaveUp2,
    CiSearch,
    CiServer,
    CiSettings,
    CiShare1,
    CiShare2,
    CiShirt,
    CiShop,
    CiShoppingBasket,
    CiShoppingCart,
    CiShoppingTag,
    CiShuffle,
    CiSignpostDuo1,
    CiSignpostL1,
    CiSignpostR1,
    CiSliderHorizontal,
    CiSliderVertical,
    CiSpeaker,
    CiSquareAlert,
    CiSquareCheck,
    CiSquareChevDown,
    CiSquareChevLeft,
    CiSquareChevRight,
    CiSquareChevUp,
    CiSquareInfo,
    CiSquareMinus,
    CiSquareMore,
    CiSquarePlus,
    CiSquareQuestion,
    CiSquareRemove,
    CiStar,
    CiStethoscope,
    CiStickyNote,
    CiStop1,
    CiStopSign1,
    CiStopwatch,
    CiStreamOff,
    CiStreamOn,
    CiSun,
    CiTablets1,
    CiTempHigh,
    CiTextAlignCenter,
    CiTextAlignJustify,
    CiTextAlignLeft,
    CiTextAlignRight,
    CiText,
    CiTimer,
    CiTrash,
    CiTrophy,
    CiTurnL1,
    CiTurnR1,
    CiTwitter,
    CiUmbrella,
    CiUndo,
    CiUnlock,
    CiUnread,
    CiUsb,
    CiUser,
    CiVault,
    CiVial,
    CiVideoOff,
    CiVideoOn,
    CiViewBoard,
    CiViewColumn,
    CiViewList,
    CiViewTable,
    CiViewTimeline,
    CiVirus,
    CiVoicemail,
    CiVolumeHigh,
    CiVolumeMute,
    CiVolume,
    CiWallet,
    CiWarning,
    CiWavePulse1,
    CiWheat,
    CiWifiOff,
    CiWifiOn,
    CiYoutube,
    CiZoomIn,
    CiZoomOut,
} from "react-icons/ci"

export function nameToReactIcon_ci_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "ci:CiAirportSign1":
            return CiAirportSign1;
        case "ci:CiAlarmOff":
            return CiAlarmOff;
        case "ci:CiAlarmOn":
            return CiAlarmOn;
        case "ci:CiAlignBottom":
            return CiAlignBottom;
        case "ci:CiAlignCenterH":
            return CiAlignCenterH;
        case "ci:CiAlignCenterV":
            return CiAlignCenterV;
        case "ci:CiAlignLeft":
            return CiAlignLeft;
        case "ci:CiAlignRight":
            return CiAlignRight;
        case "ci:CiAlignTop":
            return CiAlignTop;
        case "ci:CiApple":
            return CiApple;
        case "ci:CiAt":
            return CiAt;
        case "ci:CiAvocado":
            return CiAvocado;
        case "ci:CiBacon":
            return CiBacon;
        case "ci:CiBadgeDollar":
            return CiBadgeDollar;
        case "ci:CiBag1":
            return CiBag1;
        case "ci:CiBandage":
            return CiBandage;
        case "ci:CiBank":
            return CiBank;
        case "ci:CiBarcode":
            return CiBarcode;
        case "ci:CiBaseball":
            return CiBaseball;
        case "ci:CiBasketball":
            return CiBasketball;
        case "ci:CiBatteryCharging":
            return CiBatteryCharging;
        case "ci:CiBatteryEmpty":
            return CiBatteryEmpty;
        case "ci:CiBatteryFull":
            return CiBatteryFull;
        case "ci:CiBeaker1":
            return CiBeaker1;
        case "ci:CiBeerMugFull":
            return CiBeerMugFull;
        case "ci:CiBellOff":
            return CiBellOff;
        case "ci:CiBellOn":
            return CiBellOn;
        case "ci:CiBezier":
            return CiBezier;
        case "ci:CiBitcoin":
            return CiBitcoin;
        case "ci:CiBluetooth":
            return CiBluetooth;
        case "ci:CiBookmarkCheck":
            return CiBookmarkCheck;
        case "ci:CiBookmarkMinus":
            return CiBookmarkMinus;
        case "ci:CiBookmarkPlus":
            return CiBookmarkPlus;
        case "ci:CiBookmarkRemove":
            return CiBookmarkRemove;
        case "ci:CiBookmark":
            return CiBookmark;
        case "ci:CiBowlNoodles":
            return CiBowlNoodles;
        case "ci:CiBoxList":
            return CiBoxList;
        case "ci:CiBoxes":
            return CiBoxes;
        case "ci:CiBrightnessDown":
            return CiBrightnessDown;
        case "ci:CiBrightnessUp":
            return CiBrightnessUp;
        case "ci:CiBullhorn":
            return CiBullhorn;
        case "ci:CiBurger":
            return CiBurger;
        case "ci:CiCalculator1":
            return CiCalculator1;
        case "ci:CiCalculator2":
            return CiCalculator2;
        case "ci:CiCalendarDate":
            return CiCalendarDate;
        case "ci:CiCalendar":
            return CiCalendar;
        case "ci:CiCamera":
            return CiCamera;
        case "ci:CiChat1":
            return CiChat1;
        case "ci:CiChat2":
            return CiChat2;
        case "ci:CiCircleAlert":
            return CiCircleAlert;
        case "ci:CiCircleCheck":
            return CiCircleCheck;
        case "ci:CiCircleChevDown":
            return CiCircleChevDown;
        case "ci:CiCircleChevLeft":
            return CiCircleChevLeft;
        case "ci:CiCircleChevRight":
            return CiCircleChevRight;
        case "ci:CiCircleChevUp":
            return CiCircleChevUp;
        case "ci:CiCircleInfo":
            return CiCircleInfo;
        case "ci:CiCircleList":
            return CiCircleList;
        case "ci:CiCircleMinus":
            return CiCircleMinus;
        case "ci:CiCircleMore":
            return CiCircleMore;
        case "ci:CiCirclePlus":
            return CiCirclePlus;
        case "ci:CiCircleQuestion":
            return CiCircleQuestion;
        case "ci:CiCircleRemove":
            return CiCircleRemove;
        case "ci:CiClock1":
            return CiClock1;
        case "ci:CiClock2":
            return CiClock2;
        case "ci:CiCloudDrizzle":
            return CiCloudDrizzle;
        case "ci:CiCloudMoon":
            return CiCloudMoon;
        case "ci:CiCloudOff":
            return CiCloudOff;
        case "ci:CiCloudOn":
            return CiCloudOn;
        case "ci:CiCloudRainbow":
            return CiCloudRainbow;
        case "ci:CiCloudSun":
            return CiCloudSun;
        case "ci:CiCloud":
            return CiCloud;
        case "ci:CiCoffeeBean":
            return CiCoffeeBean;
        case "ci:CiCoffeeCup":
            return CiCoffeeCup;
        case "ci:CiCoinInsert":
            return CiCoinInsert;
        case "ci:CiCoins1":
            return CiCoins1;
        case "ci:CiCompass1":
            return CiCompass1;
        case "ci:CiCreditCard1":
            return CiCreditCard1;
        case "ci:CiCreditCard2":
            return CiCreditCard2;
        case "ci:CiCreditCardOff":
            return CiCreditCardOff;
        case "ci:CiCrop":
            return CiCrop;
        case "ci:CiDark":
            return CiDark;
        case "ci:CiDatabase":
            return CiDatabase;
        case "ci:CiDeliveryTruck":
            return CiDeliveryTruck;
        case "ci:CiDesktopMouse1":
            return CiDesktopMouse1;
        case "ci:CiDesktopMouse2":
            return CiDesktopMouse2;
        case "ci:CiDesktop":
            return CiDesktop;
        case "ci:CiDiscount1":
            return CiDiscount1;
        case "ci:CiDollar":
            return CiDollar;
        case "ci:CiDroplet":
            return CiDroplet;
        case "ci:CiDumbbell":
            return CiDumbbell;
        case "ci:CiEdit":
            return CiEdit;
        case "ci:CiEraser":
            return CiEraser;
        case "ci:CiExport":
            return CiExport;
        case "ci:CiFaceFrown":
            return CiFaceFrown;
        case "ci:CiFaceMeh":
            return CiFaceMeh;
        case "ci:CiFaceSmile":
            return CiFaceSmile;
        case "ci:CiFacebook":
            return CiFacebook;
        case "ci:CiFileOff":
            return CiFileOff;
        case "ci:CiFileOn":
            return CiFileOn;
        case "ci:CiFilter":
            return CiFilter;
        case "ci:CiFlag1":
            return CiFlag1;
        case "ci:CiFloppyDisk":
            return CiFloppyDisk;
        case "ci:CiFolderOff":
            return CiFolderOff;
        case "ci:CiFolderOn":
            return CiFolderOn;
        case "ci:CiFootball":
            return CiFootball;
        case "ci:CiForkAndKnife":
            return CiForkAndKnife;
        case "ci:CiFries":
            return CiFries;
        case "ci:CiGift":
            return CiGift;
        case "ci:CiGlass":
            return CiGlass;
        case "ci:CiGlobe":
            return CiGlobe;
        case "ci:CiGps":
            return CiGps;
        case "ci:CiGrid2H":
            return CiGrid2H;
        case "ci:CiGrid2V":
            return CiGrid2V;
        case "ci:CiGrid31":
            return CiGrid31;
        case "ci:CiGrid32":
            return CiGrid32;
        case "ci:CiGrid41":
            return CiGrid41;
        case "ci:CiGrid42":
            return CiGrid42;
        case "ci:CiHardDrive":
            return CiHardDrive;
        case "ci:CiHashtag":
            return CiHashtag;
        case "ci:CiHeadphones":
            return CiHeadphones;
        case "ci:CiHeart":
            return CiHeart;
        case "ci:CiHome":
            return CiHome;
        case "ci:CiHospital1":
            return CiHospital1;
        case "ci:CiHotdog":
            return CiHotdog;
        case "ci:CiIceCream":
            return CiIceCream;
        case "ci:CiImageOff":
            return CiImageOff;
        case "ci:CiImageOn":
            return CiImageOn;
        case "ci:CiImport":
            return CiImport;
        case "ci:CiInboxIn":
            return CiInboxIn;
        case "ci:CiInboxOut":
            return CiInboxOut;
        case "ci:CiIndent":
            return CiIndent;
        case "ci:CiInstagram":
            return CiInstagram;
        case "ci:CiKeyboard":
            return CiKeyboard;
        case "ci:CiLaptop":
            return CiLaptop;
        case "ci:CiLemon":
            return CiLemon;
        case "ci:CiLight":
            return CiLight;
        case "ci:CiLineHeight":
            return CiLineHeight;
        case "ci:CiLink":
            return CiLink;
        case "ci:CiLinkedin":
            return CiLinkedin;
        case "ci:CiLocationArrow1":
            return CiLocationArrow1;
        case "ci:CiLocationOff":
            return CiLocationOff;
        case "ci:CiLocationOn":
            return CiLocationOn;
        case "ci:CiLock":
            return CiLock;
        case "ci:CiLogin":
            return CiLogin;
        case "ci:CiLogout":
            return CiLogout;
        case "ci:CiLollipop":
            return CiLollipop;
        case "ci:CiMail":
            return CiMail;
        case "ci:CiMapPin":
            return CiMapPin;
        case "ci:CiMap":
            return CiMap;
        case "ci:CiMaximize1":
            return CiMaximize1;
        case "ci:CiMaximize2":
            return CiMaximize2;
        case "ci:CiMedal":
            return CiMedal;
        case "ci:CiMedicalCase":
            return CiMedicalCase;
        case "ci:CiMedicalClipboard":
            return CiMedicalClipboard;
        case "ci:CiMedicalCross":
            return CiMedicalCross;
        case "ci:CiMedicalMask":
            return CiMedicalMask;
        case "ci:CiMemoPad":
            return CiMemoPad;
        case "ci:CiMenuBurger":
            return CiMenuBurger;
        case "ci:CiMenuFries":
            return CiMenuFries;
        case "ci:CiMenuKebab":
            return CiMenuKebab;
        case "ci:CiMicrochip":
            return CiMicrochip;
        case "ci:CiMicrophoneOff":
            return CiMicrophoneOff;
        case "ci:CiMicrophoneOn":
            return CiMicrophoneOn;
        case "ci:CiMinimize1":
            return CiMinimize1;
        case "ci:CiMinimize2":
            return CiMinimize2;
        case "ci:CiMobile1":
            return CiMobile1;
        case "ci:CiMobile2":
            return CiMobile2;
        case "ci:CiMobile3":
            return CiMobile3;
        case "ci:CiMobile4":
            return CiMobile4;
        case "ci:CiMoneyBill":
            return CiMoneyBill;
        case "ci:CiMoneyCheck1":
            return CiMoneyCheck1;
        case "ci:CiMonitor":
            return CiMonitor;
        case "ci:CiMountain1":
            return CiMountain1;
        case "ci:CiMug1":
            return CiMug1;
        case "ci:CiMusicNote1":
            return CiMusicNote1;
        case "ci:CiNoWaitingSign":
            return CiNoWaitingSign;
        case "ci:CiPalette":
            return CiPalette;
        case "ci:CiPaperplane":
            return CiPaperplane;
        case "ci:CiParking1":
            return CiParking1;
        case "ci:CiPassport1":
            return CiPassport1;
        case "ci:CiPause1":
            return CiPause1;
        case "ci:CiPen":
            return CiPen;
        case "ci:CiPenpot":
            return CiPenpot;
        case "ci:CiPercent":
            return CiPercent;
        case "ci:CiPhone":
            return CiPhone;
        case "ci:CiPickerEmpty":
            return CiPickerEmpty;
        case "ci:CiPickerHalf":
            return CiPickerHalf;
        case "ci:CiPill":
            return CiPill;
        case "ci:CiPillsBottle1":
            return CiPillsBottle1;
        case "ci:CiPizza":
            return CiPizza;
        case "ci:CiPlane":
            return CiPlane;
        case "ci:CiPlay1":
            return CiPlay1;
        case "ci:CiPlug1":
            return CiPlug1;
        case "ci:CiPower":
            return CiPower;
        case "ci:CiRainbow":
            return CiRainbow;
        case "ci:CiRead":
            return CiRead;
        case "ci:CiReceipt":
            return CiReceipt;
        case "ci:CiRedo":
            return CiRedo;
        case "ci:CiRepeat":
            return CiRepeat;
        case "ci:CiRollingSuitcase":
            return CiRollingSuitcase;
        case "ci:CiRoute":
            return CiRoute;
        case "ci:CiRouter":
            return CiRouter;
        case "ci:CiRuler":
            return CiRuler;
        case "ci:CiSatellite1":
            return CiSatellite1;
        case "ci:CiSaveDown1":
            return CiSaveDown1;
        case "ci:CiSaveDown2":
            return CiSaveDown2;
        case "ci:CiSaveUp1":
            return CiSaveUp1;
        case "ci:CiSaveUp2":
            return CiSaveUp2;
        case "ci:CiSearch":
            return CiSearch;
        case "ci:CiServer":
            return CiServer;
        case "ci:CiSettings":
            return CiSettings;
        case "ci:CiShare1":
            return CiShare1;
        case "ci:CiShare2":
            return CiShare2;
        case "ci:CiShirt":
            return CiShirt;
        case "ci:CiShop":
            return CiShop;
        case "ci:CiShoppingBasket":
            return CiShoppingBasket;
        case "ci:CiShoppingCart":
            return CiShoppingCart;
        case "ci:CiShoppingTag":
            return CiShoppingTag;
        case "ci:CiShuffle":
            return CiShuffle;
        case "ci:CiSignpostDuo1":
            return CiSignpostDuo1;
        case "ci:CiSignpostL1":
            return CiSignpostL1;
        case "ci:CiSignpostR1":
            return CiSignpostR1;
        case "ci:CiSliderHorizontal":
            return CiSliderHorizontal;
        case "ci:CiSliderVertical":
            return CiSliderVertical;
        case "ci:CiSpeaker":
            return CiSpeaker;
        case "ci:CiSquareAlert":
            return CiSquareAlert;
        case "ci:CiSquareCheck":
            return CiSquareCheck;
        case "ci:CiSquareChevDown":
            return CiSquareChevDown;
        case "ci:CiSquareChevLeft":
            return CiSquareChevLeft;
        case "ci:CiSquareChevRight":
            return CiSquareChevRight;
        case "ci:CiSquareChevUp":
            return CiSquareChevUp;
        case "ci:CiSquareInfo":
            return CiSquareInfo;
        case "ci:CiSquareMinus":
            return CiSquareMinus;
        case "ci:CiSquareMore":
            return CiSquareMore;
        case "ci:CiSquarePlus":
            return CiSquarePlus;
        case "ci:CiSquareQuestion":
            return CiSquareQuestion;
        case "ci:CiSquareRemove":
            return CiSquareRemove;
        case "ci:CiStar":
            return CiStar;
        case "ci:CiStethoscope":
            return CiStethoscope;
        case "ci:CiStickyNote":
            return CiStickyNote;
        case "ci:CiStop1":
            return CiStop1;
        case "ci:CiStopSign1":
            return CiStopSign1;
        case "ci:CiStopwatch":
            return CiStopwatch;
        case "ci:CiStreamOff":
            return CiStreamOff;
        case "ci:CiStreamOn":
            return CiStreamOn;
        case "ci:CiSun":
            return CiSun;
        case "ci:CiTablets1":
            return CiTablets1;
        case "ci:CiTempHigh":
            return CiTempHigh;
        case "ci:CiTextAlignCenter":
            return CiTextAlignCenter;
        case "ci:CiTextAlignJustify":
            return CiTextAlignJustify;
        case "ci:CiTextAlignLeft":
            return CiTextAlignLeft;
        case "ci:CiTextAlignRight":
            return CiTextAlignRight;
        case "ci:CiText":
            return CiText;
        case "ci:CiTimer":
            return CiTimer;
        case "ci:CiTrash":
            return CiTrash;
        case "ci:CiTrophy":
            return CiTrophy;
        case "ci:CiTurnL1":
            return CiTurnL1;
        case "ci:CiTurnR1":
            return CiTurnR1;
        case "ci:CiTwitter":
            return CiTwitter;
        case "ci:CiUmbrella":
            return CiUmbrella;
        case "ci:CiUndo":
            return CiUndo;
        case "ci:CiUnlock":
            return CiUnlock;
        case "ci:CiUnread":
            return CiUnread;
        case "ci:CiUsb":
            return CiUsb;
        case "ci:CiUser":
            return CiUser;
        case "ci:CiVault":
            return CiVault;
        case "ci:CiVial":
            return CiVial;
        case "ci:CiVideoOff":
            return CiVideoOff;
        case "ci:CiVideoOn":
            return CiVideoOn;
        case "ci:CiViewBoard":
            return CiViewBoard;
        case "ci:CiViewColumn":
            return CiViewColumn;
        case "ci:CiViewList":
            return CiViewList;
        case "ci:CiViewTable":
            return CiViewTable;
        case "ci:CiViewTimeline":
            return CiViewTimeline;
        case "ci:CiVirus":
            return CiVirus;
        case "ci:CiVoicemail":
            return CiVoicemail;
        case "ci:CiVolumeHigh":
            return CiVolumeHigh;
        case "ci:CiVolumeMute":
            return CiVolumeMute;
        case "ci:CiVolume":
            return CiVolume;
        case "ci:CiWallet":
            return CiWallet;
        case "ci:CiWarning":
            return CiWarning;
        case "ci:CiWavePulse1":
            return CiWavePulse1;
        case "ci:CiWheat":
            return CiWheat;
        case "ci:CiWifiOff":
            return CiWifiOff;
        case "ci:CiWifiOn":
            return CiWifiOn;
        case "ci:CiYoutube":
            return CiYoutube;
        case "ci:CiZoomIn":
            return CiZoomIn;
        case "ci:CiZoomOut":
            return CiZoomOut;
    }
}
