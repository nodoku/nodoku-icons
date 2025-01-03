import type {IconType} from "react-icons";

import {
    IoAccessibilityOutline,
    IoAccessibilitySharp,
    IoAccessibility,
    IoAddCircleOutline,
    IoAddCircleSharp,
    IoAddCircle,
    IoAddOutline,
    IoAddSharp,
    IoAdd,
    IoAirplaneOutline,
    IoAirplaneSharp,
    IoAirplane,
    IoAlarmOutline,
    IoAlarmSharp,
    IoAlarm,
    IoAlbumsOutline,
    IoAlbumsSharp,
    IoAlbums,
    IoAlertCircleOutline,
    IoAlertCircleSharp,
    IoAlertCircle,
    IoAlertOutline,
    IoAlertSharp,
    IoAlert,
    IoAmericanFootballOutline,
    IoAmericanFootballSharp,
    IoAmericanFootball,
    IoAnalyticsOutline,
    IoAnalyticsSharp,
    IoAnalytics,
    IoApertureOutline,
    IoApertureSharp,
    IoAperture,
    IoAppsOutline,
    IoAppsSharp,
    IoApps,
    IoArchiveOutline,
    IoArchiveSharp,
    IoArchive,
    IoArrowBackCircleOutline,
    IoArrowBackCircleSharp,
    IoArrowBackCircle,
    IoArrowBackOutline,
    IoArrowBackSharp,
    IoArrowBack,
    IoArrowDownCircleOutline,
    IoArrowDownCircleSharp,
    IoArrowDownCircle,
    IoArrowDownOutline,
    IoArrowDownSharp,
    IoArrowDown,
    IoArrowForwardCircleOutline,
    IoArrowForwardCircleSharp,
    IoArrowForwardCircle,
    IoArrowForwardOutline,
    IoArrowForwardSharp,
    IoArrowForward,
    IoArrowRedoCircleOutline,
    IoArrowRedoCircleSharp,
    IoArrowRedoCircle,
    IoArrowRedoOutline,
    IoArrowRedoSharp,
    IoArrowRedo,
    IoArrowUndoCircleOutline,
    IoArrowUndoCircleSharp,
    IoArrowUndoCircle,
    IoArrowUndoOutline,
    IoArrowUndoSharp,
    IoArrowUndo,
    IoArrowUpCircleOutline,
    IoArrowUpCircleSharp,
    IoArrowUpCircle,
    IoArrowUpOutline,
    IoArrowUpSharp,
    IoArrowUp,
    IoAtCircleOutline,
    IoAtCircleSharp,
    IoAtCircle,
    IoAtOutline,
    IoAtSharp,
    IoAt,
    IoAttachOutline,
    IoAttachSharp,
    IoAttach,
    IoBackspaceOutline,
    IoBackspaceSharp,
    IoBackspace,
    IoBagAddOutline,
    IoBagAddSharp,
    IoBagAdd,
    IoBagCheckOutline,
    IoBagCheckSharp,
    IoBagCheck,
    IoBagHandleOutline,
    IoBagHandleSharp,
    IoBagHandle,
    IoBagOutline,
    IoBagRemoveOutline,
    IoBagRemoveSharp,
    IoBagRemove,
    IoBagSharp,
    IoBag,
    IoBalloonOutline,
    IoBalloonSharp,
    IoBalloon,
    IoBanOutline,
    IoBanSharp,
    IoBan,
    IoBandageOutline,
    IoBandageSharp,
    IoBandage,
    IoBarChartOutline,
    IoBarChartSharp,
    IoBarChart,
    IoBarbellOutline,
    IoBarbellSharp,
    IoBarbell,
    IoBarcodeOutline,
    IoBarcodeSharp,
    IoBarcode,
    IoBaseballOutline,
    IoBaseballSharp,
    IoBaseball,
    IoBasketOutline,
    IoBasketSharp,
    IoBasket,
    IoBasketballOutline,
    IoBasketballSharp,
    IoBasketball,
    IoBatteryChargingOutline,
    IoBatteryChargingSharp,
    IoBatteryCharging,
    IoBatteryDeadOutline,
    IoBatteryDeadSharp,
    IoBatteryDead,
    IoBatteryFullOutline,
    IoBatteryFullSharp,
    IoBatteryFull,
    IoBatteryHalfOutline,
    IoBatteryHalfSharp,
    IoBatteryHalf,
    IoBeakerOutline,
    IoBeakerSharp,
    IoBeaker,
    IoBedOutline,
    IoBedSharp,
    IoBed,
    IoBeerOutline,
    IoBeerSharp,
    IoBeer,
    IoBicycleOutline,
    IoBicycleSharp,
    IoBicycle,
    IoBluetoothOutline,
    IoBluetoothSharp,
    IoBluetooth,
    IoBoatOutline,
    IoBoatSharp,
    IoBoat,
    IoBodyOutline,
    IoBodySharp,
    IoBody,
    IoBonfireOutline,
    IoBonfireSharp,
    IoBonfire,
    IoBookOutline,
    IoBookSharp,
    IoBook,
    IoBookmarkOutline,
    IoBookmarkSharp,
    IoBookmark,
    IoBookmarksOutline,
    IoBookmarksSharp,
    IoBookmarks,
    IoBowlingBallOutline,
    IoBowlingBallSharp,
    IoBowlingBall,
    IoBriefcaseOutline,
    IoBriefcaseSharp,
    IoBriefcase,
    IoBrowsersOutline,
    IoBrowsersSharp,
    IoBrowsers,
    IoBrushOutline,
    IoBrushSharp,
    IoBrush,
    IoBugOutline,
    IoBugSharp,
    IoBug,
    IoBuildOutline,
    IoBuildSharp,
    IoBuild,
    IoBulbOutline,
    IoBulbSharp,
    IoBulb,
    IoBusOutline,
    IoBusSharp,
    IoBus,
    IoBusinessOutline,
    IoBusinessSharp,
    IoBusiness,
    IoCafeOutline,
    IoCafeSharp,
    IoCafe,
    IoCalculatorOutline,
    IoCalculatorSharp,
    IoCalculator,
    IoCalendarClearOutline,
    IoCalendarClearSharp,
    IoCalendarClear,
    IoCalendarNumberOutline,
    IoCalendarNumberSharp,
    IoCalendarNumber,
    IoCalendarOutline,
    IoCalendarSharp,
    IoCalendar,
    IoCallOutline,
    IoCallSharp,
    IoCall,
    IoCameraOutline,
    IoCameraReverseOutline,
    IoCameraReverseSharp,
    IoCameraReverse,
    IoCameraSharp,
    IoCamera,
    IoCarOutline,
    IoCarSharp,
    IoCarSportOutline,
    IoCarSportSharp,
    IoCarSport,
    IoCar,
    IoCardOutline,
    IoCardSharp,
    IoCard,
    IoCaretBackCircleOutline,
    IoCaretBackCircleSharp,
    IoCaretBackCircle,
    IoCaretBackOutline,
    IoCaretBackSharp,
    IoCaretBack,
    IoCaretDownCircleOutline,
    IoCaretDownCircleSharp,
    IoCaretDownCircle,
    IoCaretDownOutline,
    IoCaretDownSharp,
    IoCaretDown,
    IoCaretForwardCircleOutline,
    IoCaretForwardCircleSharp,
    IoCaretForwardCircle,
    IoCaretForwardOutline,
    IoCaretForwardSharp,
    IoCaretForward,
    IoCaretUpCircleOutline,
    IoCaretUpCircleSharp,
    IoCaretUpCircle,
    IoCaretUpOutline,
    IoCaretUpSharp,
    IoCaretUp,
    IoCartOutline,
    IoCartSharp,
    IoCart,
    IoCashOutline,
    IoCashSharp,
    IoCash,
    IoCellularOutline,
    IoCellularSharp,
    IoCellular,
    IoChatboxEllipsesOutline,
    IoChatboxEllipsesSharp,
    IoChatboxEllipses,
    IoChatboxOutline,
    IoChatboxSharp,
    IoChatbox,
    IoChatbubbleEllipsesOutline,
    IoChatbubbleEllipsesSharp,
    IoChatbubbleEllipses,
    IoChatbubbleOutline,
    IoChatbubbleSharp,
    IoChatbubble,
    IoChatbubblesOutline,
    IoChatbubblesSharp,
    IoChatbubbles,
    IoCheckboxOutline,
    IoCheckboxSharp,
    IoCheckbox,
    IoCheckmarkCircleOutline,
    IoCheckmarkCircleSharp,
    IoCheckmarkCircle,
    IoCheckmarkDoneCircleOutline,
    IoCheckmarkDoneCircleSharp,
    IoCheckmarkDoneCircle,
    IoCheckmarkDoneOutline,
    IoCheckmarkDoneSharp,
    IoCheckmarkDone,
    IoCheckmarkOutline,
    IoCheckmarkSharp,
    IoCheckmark,
    IoChevronBackCircleOutline,
    IoChevronBackCircleSharp,
    IoChevronBackCircle,
    IoChevronBackOutline,
    IoChevronBackSharp,
    IoChevronBack,
    IoChevronDownCircleOutline,
    IoChevronDownCircleSharp,
    IoChevronDownCircle,
    IoChevronDownOutline,
    IoChevronDownSharp,
    IoChevronDown,
    IoChevronForwardCircleOutline,
    IoChevronForwardCircleSharp,
    IoChevronForwardCircle,
    IoChevronForwardOutline,
    IoChevronForwardSharp,
    IoChevronForward,
    IoChevronUpCircleOutline,
    IoChevronUpCircleSharp,
    IoChevronUpCircle,
    IoChevronUpOutline,
    IoChevronUpSharp,
    IoChevronUp,
    IoClipboardOutline,
    IoClipboardSharp,
    IoClipboard,
    IoCloseCircleOutline,
    IoCloseCircleSharp,
    IoCloseCircle,
    IoCloseOutline,
    IoCloseSharp,
    IoClose,
    IoCloudCircleOutline,
    IoCloudCircleSharp,
    IoCloudCircle,
    IoCloudDoneOutline,
    IoCloudDoneSharp,
    IoCloudDone,
    IoCloudDownloadOutline,
    IoCloudDownloadSharp,
    IoCloudDownload,
    IoCloudOfflineOutline,
    IoCloudOfflineSharp,
    IoCloudOffline,
    IoCloudOutline,
    IoCloudSharp,
    IoCloudUploadOutline,
    IoCloudUploadSharp,
    IoCloudUpload,
    IoCloud,
    IoCloudyNightOutline,
    IoCloudyNightSharp,
    IoCloudyNight,
    IoCloudyOutline,
    IoCloudySharp,
    IoCloudy,
    IoCodeDownloadOutline,
    IoCodeDownloadSharp,
    IoCodeDownload,
    IoCodeOutline,
    IoCodeSharp,
    IoCodeSlashOutline,
    IoCodeSlashSharp,
    IoCodeSlash,
    IoCodeWorkingOutline,
    IoCodeWorkingSharp,
    IoCodeWorking,
    IoCode,
    IoCogOutline,
    IoCogSharp,
    IoCog,
    IoColorFillOutline,
    IoColorFillSharp,
    IoColorFill,
    IoColorFilterOutline,
    IoColorFilterSharp,
    IoColorFilter,
    IoColorPaletteOutline,
    IoColorPaletteSharp,
    IoColorPalette,
    IoColorWandOutline,
    IoColorWandSharp,
    IoColorWand,
    IoCompassOutline,
    IoCompassSharp,
    IoCompass,
    IoConstructOutline,
    IoConstructSharp,
    IoConstruct,
    IoContractOutline,
    IoContractSharp,
    IoContract,
    IoContrastOutline,
    IoContrastSharp,
    IoContrast,
    IoCopyOutline,
    IoCopySharp,
    IoCopy,
    IoCreateOutline,
    IoCreateSharp,
    IoCreate,
    IoCropOutline,
    IoCropSharp,
    IoCrop,
    IoCubeOutline,
    IoCubeSharp,
    IoCube,
    IoCutOutline,
    IoCutSharp,
    IoCut,
    IoDesktopOutline,
    IoDesktopSharp,
    IoDesktop,
    IoDiamondOutline,
    IoDiamondSharp,
    IoDiamond,
    IoDiceOutline,
    IoDiceSharp,
    IoDice,
    IoDiscOutline,
    IoDiscSharp,
    IoDisc,
    IoDocumentAttachOutline,
    IoDocumentAttachSharp,
    IoDocumentAttach,
    IoDocumentLockOutline,
    IoDocumentLockSharp,
    IoDocumentLock,
    IoDocumentOutline,
    IoDocumentSharp,
    IoDocumentTextOutline,
    IoDocumentTextSharp,
    IoDocumentText,
    IoDocument,
    IoDocumentsOutline,
    IoDocumentsSharp,
    IoDocuments,
    IoDownloadOutline,
    IoDownloadSharp,
    IoDownload,
    IoDuplicateOutline,
    IoDuplicateSharp,
    IoDuplicate,
    IoEarOutline,
    IoEarSharp,
    IoEar,
    IoEarthOutline,
    IoEarthSharp,
    IoEarth,
    IoEaselOutline,
    IoEaselSharp,
    IoEasel,
    IoEggOutline,
    IoEggSharp,
    IoEgg,
    IoEllipseOutline,
    IoEllipseSharp,
    IoEllipse,
    IoEllipsisHorizontalCircleOutline,
    IoEllipsisHorizontalCircleSharp,
    IoEllipsisHorizontalCircle,
    IoEllipsisHorizontalOutline,
    IoEllipsisHorizontalSharp,
    IoEllipsisHorizontal,
    IoEllipsisVerticalCircleOutline,
    IoEllipsisVerticalCircleSharp,
    IoEllipsisVerticalCircle,
    IoEllipsisVerticalOutline,
    IoEllipsisVerticalSharp,
    IoEllipsisVertical,
    IoEnterOutline,
    IoEnterSharp,
    IoEnter,
    IoExitOutline,
    IoExitSharp,
    IoExit,
    IoExpandOutline,
    IoExpandSharp,
    IoExpand,
    IoExtensionPuzzleOutline,
    IoExtensionPuzzleSharp,
    IoExtensionPuzzle,
    IoEyeOffOutline,
    IoEyeOffSharp,
    IoEyeOff,
    IoEyeOutline,
    IoEyeSharp,
    IoEye,
    IoEyedropOutline,
    IoEyedropSharp,
    IoEyedrop,
    IoFastFoodOutline,
    IoFastFoodSharp,
    IoFastFood,
    IoFemaleOutline,
    IoFemaleSharp,
    IoFemale,
    IoFileTrayFullOutline,
    IoFileTrayFullSharp,
    IoFileTrayFull,
    IoFileTrayOutline,
    IoFileTraySharp,
    IoFileTrayStackedOutline,
    IoFileTrayStackedSharp,
    IoFileTrayStacked,
    IoFileTray,
    IoFilmOutline,
    IoFilmSharp,
    IoFilm,
    IoFilterCircleOutline,
    IoFilterCircleSharp,
    IoFilterCircle,
    IoFilterOutline,
    IoFilterSharp,
    IoFilter,
    IoFingerPrintOutline,
    IoFingerPrintSharp,
    IoFingerPrint,
    IoFishOutline,
    IoFishSharp,
    IoFish,
    IoFitnessOutline,
    IoFitnessSharp,
    IoFitness,
    IoFlagOutline,
    IoFlagSharp,
    IoFlag,
    IoFlameOutline,
    IoFlameSharp,
    IoFlame,
    IoFlashOffOutline,
    IoFlashOffSharp,
    IoFlashOff,
    IoFlashOutline,
    IoFlashSharp,
    IoFlash,
    IoFlashlightOutline,
    IoFlashlightSharp,
    IoFlashlight,
    IoFlaskOutline,
    IoFlaskSharp,
    IoFlask,
    IoFlowerOutline,
    IoFlowerSharp,
    IoFlower,
    IoFolderOpenOutline,
    IoFolderOpenSharp,
    IoFolderOpen,
    IoFolderOutline,
    IoFolderSharp,
    IoFolder,
    IoFootballOutline,
    IoFootballSharp,
    IoFootball,
    IoFootstepsOutline,
    IoFootstepsSharp,
    IoFootsteps,
    IoFunnelOutline,
    IoFunnelSharp,
    IoFunnel,
    IoGameControllerOutline,
    IoGameControllerSharp,
    IoGameController,
    IoGiftOutline,
    IoGiftSharp,
    IoGift,
    IoGitBranchOutline,
    IoGitBranchSharp,
    IoGitBranch,
    IoGitCommitOutline,
    IoGitCommitSharp,
    IoGitCommit,
    IoGitCompareOutline,
    IoGitCompareSharp,
    IoGitCompare,
    IoGitMergeOutline,
    IoGitMergeSharp,
    IoGitMerge,
    IoGitNetworkOutline,
    IoGitNetworkSharp,
    IoGitNetwork,
    IoGitPullRequestOutline,
    IoGitPullRequestSharp,
    IoGitPullRequest,
    IoGlassesOutline,
    IoGlassesSharp,
    IoGlasses,
    IoGlobeOutline,
    IoGlobeSharp,
    IoGlobe,
    IoGolfOutline,
    IoGolfSharp,
    IoGolf,
    IoGridOutline,
    IoGridSharp,
    IoGrid,
    IoHammerOutline,
    IoHammerSharp,
    IoHammer,
    IoHandLeftOutline,
    IoHandLeftSharp,
    IoHandLeft,
    IoHandRightOutline,
    IoHandRightSharp,
    IoHandRight,
    IoHappyOutline,
    IoHappySharp,
    IoHappy,
    IoHardwareChipOutline,
    IoHardwareChipSharp,
    IoHardwareChip,
    IoHeadsetOutline,
    IoHeadsetSharp,
    IoHeadset,
    IoHeartCircleOutline,
    IoHeartCircleSharp,
    IoHeartCircle,
    IoHeartDislikeCircleOutline,
    IoHeartDislikeCircleSharp,
    IoHeartDislikeCircle,
    IoHeartDislikeOutline,
    IoHeartDislikeSharp,
    IoHeartDislike,
    IoHeartHalfOutline,
    IoHeartHalfSharp,
    IoHeartHalf,
    IoHeartOutline,
    IoHeartSharp,
    IoHeart,
    IoHelpBuoyOutline,
    IoHelpBuoySharp,
    IoHelpBuoy,
    IoHelpCircleOutline,
    IoHelpCircleSharp,
    IoHelpCircle,
    IoHelpOutline,
    IoHelpSharp,
    IoHelp,
    IoHomeOutline,
    IoHomeSharp,
    IoHome,
    IoHourglassOutline,
    IoHourglassSharp,
    IoHourglass,
    IoIceCreamOutline,
    IoIceCreamSharp,
    IoIceCream,
    IoIdCardOutline,
    IoIdCardSharp,
    IoIdCard,
    IoImageOutline,
    IoImageSharp,
    IoImage,
    IoImagesOutline,
    IoImagesSharp,
    IoImages,
    IoInfiniteOutline,
    IoInfiniteSharp,
    IoInfinite,
    IoInformationCircleOutline,
    IoInformationCircleSharp,
    IoInformationCircle,
    IoInformationOutline,
    IoInformationSharp,
    IoInformation,
    IoInvertModeOutline,
    IoInvertModeSharp,
    IoInvertMode,
    IoJournalOutline,
    IoJournalSharp,
    IoJournal,
    IoKeyOutline,
    IoKeySharp,
    IoKey,
    IoKeypadOutline,
    IoKeypadSharp,
    IoKeypad,
    IoLanguageOutline,
    IoLanguageSharp,
    IoLanguage,
    IoLaptopOutline,
    IoLaptopSharp,
    IoLaptop,
    IoLayersOutline,
    IoLayersSharp,
    IoLayers,
    IoLeafOutline,
    IoLeafSharp,
    IoLeaf,
    IoLibraryOutline,
    IoLibrarySharp,
    IoLibrary,
    IoLinkOutline,
    IoLinkSharp,
    IoLink,
    IoListCircleOutline,
    IoListCircleSharp,
    IoListCircle,
    IoListOutline,
    IoListSharp,
    IoList,
    IoLocateOutline,
    IoLocateSharp,
    IoLocate,
    IoLocationOutline,
    IoLocationSharp,
    IoLocation,
    IoLockClosedOutline,
    IoLockClosedSharp,
    IoLockClosed,
    IoLockOpenOutline,
    IoLockOpenSharp,
    IoLockOpen,
    IoLogInOutline,
    IoLogInSharp,
    IoLogIn,
    IoLogOutOutline,
    IoLogOutSharp,
    IoLogOut,
    IoLogoAlipay,
    IoLogoAmazon,
    IoLogoAmplify,
    IoLogoAndroid,
    IoLogoAngular,
    IoLogoAppleAppstore,
    IoLogoAppleAr,
    IoLogoApple,
    IoLogoBehance,
    IoLogoBitbucket,
    IoLogoBitcoin,
    IoLogoBuffer,
    IoLogoCapacitor,
    IoLogoChrome,
    IoLogoClosedCaptioning,
    IoLogoCodepen,
    IoLogoCss3,
    IoLogoDesignernews,
    IoLogoDeviantart,
    IoLogoDiscord,
    IoLogoDocker,
    IoLogoDribbble,
    IoLogoDropbox,
    IoLogoEdge,
    IoLogoElectron,
    IoLogoEuro,
    IoLogoFacebook,
    IoLogoFigma,
    IoLogoFirebase,
    IoLogoFirefox,
    IoLogoFlickr,
    IoLogoFoursquare,
    IoLogoGithub,
    IoLogoGitlab,
    IoLogoGooglePlaystore,
    IoLogoGoogle,
    IoLogoHackernews,
    IoLogoHtml5,
    IoLogoInstagram,
    IoLogoIonic,
    IoLogoIonitron,
    IoLogoJavascript,
    IoLogoLaravel,
    IoLogoLinkedin,
    IoLogoMarkdown,
    IoLogoMastodon,
    IoLogoMedium,
    IoLogoMicrosoft,
    IoLogoNoSmoking,
    IoLogoNodejs,
    IoLogoNpm,
    IoLogoOctocat,
    IoLogoPaypal,
    IoLogoPinterest,
    IoLogoPlaystation,
    IoLogoPwa,
    IoLogoPython,
    IoLogoReact,
    IoLogoReddit,
    IoLogoRss,
    IoLogoSass,
    IoLogoSkype,
    IoLogoSlack,
    IoLogoSnapchat,
    IoLogoSoundcloud,
    IoLogoStackoverflow,
    IoLogoSteam,
    IoLogoStencil,
    IoLogoTableau,
    IoLogoTiktok,
    IoLogoTumblr,
    IoLogoTux,
    IoLogoTwitch,
    IoLogoTwitter,
    IoLogoUsd,
    IoLogoVenmo,
    IoLogoVercel,
    IoLogoVimeo,
    IoLogoVk,
    IoLogoVue,
    IoLogoWebComponent,
    IoLogoWechat,
    IoLogoWhatsapp,
    IoLogoWindows,
    IoLogoWordpress,
    IoLogoXbox,
    IoLogoXing,
    IoLogoYahoo,
    IoLogoYen,
    IoLogoYoutube,
    IoMagnetOutline,
    IoMagnetSharp,
    IoMagnet,
    IoMailOpenOutline,
    IoMailOpenSharp,
    IoMailOpen,
    IoMailOutline,
    IoMailSharp,
    IoMailUnreadOutline,
    IoMailUnreadSharp,
    IoMailUnread,
    IoMail,
    IoMaleFemaleOutline,
    IoMaleFemaleSharp,
    IoMaleFemale,
    IoMaleOutline,
    IoMaleSharp,
    IoMale,
    IoManOutline,
    IoManSharp,
    IoMan,
    IoMapOutline,
    IoMapSharp,
    IoMap,
    IoMedalOutline,
    IoMedalSharp,
    IoMedal,
    IoMedicalOutline,
    IoMedicalSharp,
    IoMedical,
    IoMedkitOutline,
    IoMedkitSharp,
    IoMedkit,
    IoMegaphoneOutline,
    IoMegaphoneSharp,
    IoMegaphone,
    IoMenuOutline,
    IoMenuSharp,
    IoMenu,
    IoMicCircleOutline,
    IoMicCircleSharp,
    IoMicCircle,
    IoMicOffCircleOutline,
    IoMicOffCircleSharp,
    IoMicOffCircle,
    IoMicOffOutline,
    IoMicOffSharp,
    IoMicOff,
    IoMicOutline,
    IoMicSharp,
    IoMic,
    IoMoonOutline,
    IoMoonSharp,
    IoMoon,
    IoMoveOutline,
    IoMoveSharp,
    IoMove,
    IoMusicalNoteOutline,
    IoMusicalNoteSharp,
    IoMusicalNote,
    IoMusicalNotesOutline,
    IoMusicalNotesSharp,
    IoMusicalNotes,
    IoNavigateCircleOutline,
    IoNavigateCircleSharp,
    IoNavigateCircle,
    IoNavigateOutline,
    IoNavigateSharp,
    IoNavigate,
    IoNewspaperOutline,
    IoNewspaperSharp,
    IoNewspaper,
    IoNotificationsCircleOutline,
    IoNotificationsCircleSharp,
    IoNotificationsCircle,
    IoNotificationsOffCircleOutline,
    IoNotificationsOffCircleSharp,
    IoNotificationsOffCircle,
    IoNotificationsOffOutline,
    IoNotificationsOffSharp,
    IoNotificationsOff,
    IoNotificationsOutline,
    IoNotificationsSharp,
    IoNotifications,
    IoNuclearOutline,
    IoNuclearSharp,
    IoNuclear,
    IoNutritionOutline,
    IoNutritionSharp,
    IoNutrition,
    IoOpenOutline,
    IoOpenSharp,
    IoOpen,
    IoOptionsOutline,
    IoOptionsSharp,
    IoOptions,
    IoPaperPlaneOutline,
    IoPaperPlaneSharp,
    IoPaperPlane,
    IoPartlySunnyOutline,
    IoPartlySunnySharp,
    IoPartlySunny,
    IoPauseCircleOutline,
    IoPauseCircleSharp,
    IoPauseCircle,
    IoPauseOutline,
    IoPauseSharp,
    IoPause,
    IoPawOutline,
    IoPawSharp,
    IoPaw,
    IoPencilOutline,
    IoPencilSharp,
    IoPencil,
    IoPeopleCircleOutline,
    IoPeopleCircleSharp,
    IoPeopleCircle,
    IoPeopleOutline,
    IoPeopleSharp,
    IoPeople,
    IoPersonAddOutline,
    IoPersonAddSharp,
    IoPersonAdd,
    IoPersonCircleOutline,
    IoPersonCircleSharp,
    IoPersonCircle,
    IoPersonOutline,
    IoPersonRemoveOutline,
    IoPersonRemoveSharp,
    IoPersonRemove,
    IoPersonSharp,
    IoPerson,
    IoPhoneLandscapeOutline,
    IoPhoneLandscapeSharp,
    IoPhoneLandscape,
    IoPhonePortraitOutline,
    IoPhonePortraitSharp,
    IoPhonePortrait,
    IoPieChartOutline,
    IoPieChartSharp,
    IoPieChart,
    IoPinOutline,
    IoPinSharp,
    IoPin,
    IoPintOutline,
    IoPintSharp,
    IoPint,
    IoPizzaOutline,
    IoPizzaSharp,
    IoPizza,
    IoPlanetOutline,
    IoPlanetSharp,
    IoPlanet,
    IoPlayBackCircleOutline,
    IoPlayBackCircleSharp,
    IoPlayBackCircle,
    IoPlayBackOutline,
    IoPlayBackSharp,
    IoPlayBack,
    IoPlayCircleOutline,
    IoPlayCircleSharp,
    IoPlayCircle,
    IoPlayForwardCircleOutline,
    IoPlayForwardCircleSharp,
    IoPlayForwardCircle,
    IoPlayForwardOutline,
    IoPlayForwardSharp,
    IoPlayForward,
    IoPlayOutline,
    IoPlaySharp,
    IoPlaySkipBackCircleOutline,
    IoPlaySkipBackCircleSharp,
    IoPlaySkipBackCircle,
    IoPlaySkipBackOutline,
    IoPlaySkipBackSharp,
    IoPlaySkipBack,
    IoPlaySkipForwardCircleOutline,
    IoPlaySkipForwardCircleSharp,
    IoPlaySkipForwardCircle,
    IoPlaySkipForwardOutline,
    IoPlaySkipForwardSharp,
    IoPlaySkipForward,
    IoPlay,
    IoPodiumOutline,
    IoPodiumSharp,
    IoPodium,
    IoPowerOutline,
    IoPowerSharp,
    IoPower,
    IoPricetagOutline,
    IoPricetagSharp,
    IoPricetag,
    IoPricetagsOutline,
} from "react-icons/io5"

export function nameToReactIcon_io5_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "io5:IoAccessibilityOutline":
            return IoAccessibilityOutline;
        case "io5:IoAccessibilitySharp":
            return IoAccessibilitySharp;
        case "io5:IoAccessibility":
            return IoAccessibility;
        case "io5:IoAddCircleOutline":
            return IoAddCircleOutline;
        case "io5:IoAddCircleSharp":
            return IoAddCircleSharp;
        case "io5:IoAddCircle":
            return IoAddCircle;
        case "io5:IoAddOutline":
            return IoAddOutline;
        case "io5:IoAddSharp":
            return IoAddSharp;
        case "io5:IoAdd":
            return IoAdd;
        case "io5:IoAirplaneOutline":
            return IoAirplaneOutline;
        case "io5:IoAirplaneSharp":
            return IoAirplaneSharp;
        case "io5:IoAirplane":
            return IoAirplane;
        case "io5:IoAlarmOutline":
            return IoAlarmOutline;
        case "io5:IoAlarmSharp":
            return IoAlarmSharp;
        case "io5:IoAlarm":
            return IoAlarm;
        case "io5:IoAlbumsOutline":
            return IoAlbumsOutline;
        case "io5:IoAlbumsSharp":
            return IoAlbumsSharp;
        case "io5:IoAlbums":
            return IoAlbums;
        case "io5:IoAlertCircleOutline":
            return IoAlertCircleOutline;
        case "io5:IoAlertCircleSharp":
            return IoAlertCircleSharp;
        case "io5:IoAlertCircle":
            return IoAlertCircle;
        case "io5:IoAlertOutline":
            return IoAlertOutline;
        case "io5:IoAlertSharp":
            return IoAlertSharp;
        case "io5:IoAlert":
            return IoAlert;
        case "io5:IoAmericanFootballOutline":
            return IoAmericanFootballOutline;
        case "io5:IoAmericanFootballSharp":
            return IoAmericanFootballSharp;
        case "io5:IoAmericanFootball":
            return IoAmericanFootball;
        case "io5:IoAnalyticsOutline":
            return IoAnalyticsOutline;
        case "io5:IoAnalyticsSharp":
            return IoAnalyticsSharp;
        case "io5:IoAnalytics":
            return IoAnalytics;
        case "io5:IoApertureOutline":
            return IoApertureOutline;
        case "io5:IoApertureSharp":
            return IoApertureSharp;
        case "io5:IoAperture":
            return IoAperture;
        case "io5:IoAppsOutline":
            return IoAppsOutline;
        case "io5:IoAppsSharp":
            return IoAppsSharp;
        case "io5:IoApps":
            return IoApps;
        case "io5:IoArchiveOutline":
            return IoArchiveOutline;
        case "io5:IoArchiveSharp":
            return IoArchiveSharp;
        case "io5:IoArchive":
            return IoArchive;
        case "io5:IoArrowBackCircleOutline":
            return IoArrowBackCircleOutline;
        case "io5:IoArrowBackCircleSharp":
            return IoArrowBackCircleSharp;
        case "io5:IoArrowBackCircle":
            return IoArrowBackCircle;
        case "io5:IoArrowBackOutline":
            return IoArrowBackOutline;
        case "io5:IoArrowBackSharp":
            return IoArrowBackSharp;
        case "io5:IoArrowBack":
            return IoArrowBack;
        case "io5:IoArrowDownCircleOutline":
            return IoArrowDownCircleOutline;
        case "io5:IoArrowDownCircleSharp":
            return IoArrowDownCircleSharp;
        case "io5:IoArrowDownCircle":
            return IoArrowDownCircle;
        case "io5:IoArrowDownOutline":
            return IoArrowDownOutline;
        case "io5:IoArrowDownSharp":
            return IoArrowDownSharp;
        case "io5:IoArrowDown":
            return IoArrowDown;
        case "io5:IoArrowForwardCircleOutline":
            return IoArrowForwardCircleOutline;
        case "io5:IoArrowForwardCircleSharp":
            return IoArrowForwardCircleSharp;
        case "io5:IoArrowForwardCircle":
            return IoArrowForwardCircle;
        case "io5:IoArrowForwardOutline":
            return IoArrowForwardOutline;
        case "io5:IoArrowForwardSharp":
            return IoArrowForwardSharp;
        case "io5:IoArrowForward":
            return IoArrowForward;
        case "io5:IoArrowRedoCircleOutline":
            return IoArrowRedoCircleOutline;
        case "io5:IoArrowRedoCircleSharp":
            return IoArrowRedoCircleSharp;
        case "io5:IoArrowRedoCircle":
            return IoArrowRedoCircle;
        case "io5:IoArrowRedoOutline":
            return IoArrowRedoOutline;
        case "io5:IoArrowRedoSharp":
            return IoArrowRedoSharp;
        case "io5:IoArrowRedo":
            return IoArrowRedo;
        case "io5:IoArrowUndoCircleOutline":
            return IoArrowUndoCircleOutline;
        case "io5:IoArrowUndoCircleSharp":
            return IoArrowUndoCircleSharp;
        case "io5:IoArrowUndoCircle":
            return IoArrowUndoCircle;
        case "io5:IoArrowUndoOutline":
            return IoArrowUndoOutline;
        case "io5:IoArrowUndoSharp":
            return IoArrowUndoSharp;
        case "io5:IoArrowUndo":
            return IoArrowUndo;
        case "io5:IoArrowUpCircleOutline":
            return IoArrowUpCircleOutline;
        case "io5:IoArrowUpCircleSharp":
            return IoArrowUpCircleSharp;
        case "io5:IoArrowUpCircle":
            return IoArrowUpCircle;
        case "io5:IoArrowUpOutline":
            return IoArrowUpOutline;
        case "io5:IoArrowUpSharp":
            return IoArrowUpSharp;
        case "io5:IoArrowUp":
            return IoArrowUp;
        case "io5:IoAtCircleOutline":
            return IoAtCircleOutline;
        case "io5:IoAtCircleSharp":
            return IoAtCircleSharp;
        case "io5:IoAtCircle":
            return IoAtCircle;
        case "io5:IoAtOutline":
            return IoAtOutline;
        case "io5:IoAtSharp":
            return IoAtSharp;
        case "io5:IoAt":
            return IoAt;
        case "io5:IoAttachOutline":
            return IoAttachOutline;
        case "io5:IoAttachSharp":
            return IoAttachSharp;
        case "io5:IoAttach":
            return IoAttach;
        case "io5:IoBackspaceOutline":
            return IoBackspaceOutline;
        case "io5:IoBackspaceSharp":
            return IoBackspaceSharp;
        case "io5:IoBackspace":
            return IoBackspace;
        case "io5:IoBagAddOutline":
            return IoBagAddOutline;
        case "io5:IoBagAddSharp":
            return IoBagAddSharp;
        case "io5:IoBagAdd":
            return IoBagAdd;
        case "io5:IoBagCheckOutline":
            return IoBagCheckOutline;
        case "io5:IoBagCheckSharp":
            return IoBagCheckSharp;
        case "io5:IoBagCheck":
            return IoBagCheck;
        case "io5:IoBagHandleOutline":
            return IoBagHandleOutline;
        case "io5:IoBagHandleSharp":
            return IoBagHandleSharp;
        case "io5:IoBagHandle":
            return IoBagHandle;
        case "io5:IoBagOutline":
            return IoBagOutline;
        case "io5:IoBagRemoveOutline":
            return IoBagRemoveOutline;
        case "io5:IoBagRemoveSharp":
            return IoBagRemoveSharp;
        case "io5:IoBagRemove":
            return IoBagRemove;
        case "io5:IoBagSharp":
            return IoBagSharp;
        case "io5:IoBag":
            return IoBag;
        case "io5:IoBalloonOutline":
            return IoBalloonOutline;
        case "io5:IoBalloonSharp":
            return IoBalloonSharp;
        case "io5:IoBalloon":
            return IoBalloon;
        case "io5:IoBanOutline":
            return IoBanOutline;
        case "io5:IoBanSharp":
            return IoBanSharp;
        case "io5:IoBan":
            return IoBan;
        case "io5:IoBandageOutline":
            return IoBandageOutline;
        case "io5:IoBandageSharp":
            return IoBandageSharp;
        case "io5:IoBandage":
            return IoBandage;
        case "io5:IoBarChartOutline":
            return IoBarChartOutline;
        case "io5:IoBarChartSharp":
            return IoBarChartSharp;
        case "io5:IoBarChart":
            return IoBarChart;
        case "io5:IoBarbellOutline":
            return IoBarbellOutline;
        case "io5:IoBarbellSharp":
            return IoBarbellSharp;
        case "io5:IoBarbell":
            return IoBarbell;
        case "io5:IoBarcodeOutline":
            return IoBarcodeOutline;
        case "io5:IoBarcodeSharp":
            return IoBarcodeSharp;
        case "io5:IoBarcode":
            return IoBarcode;
        case "io5:IoBaseballOutline":
            return IoBaseballOutline;
        case "io5:IoBaseballSharp":
            return IoBaseballSharp;
        case "io5:IoBaseball":
            return IoBaseball;
        case "io5:IoBasketOutline":
            return IoBasketOutline;
        case "io5:IoBasketSharp":
            return IoBasketSharp;
        case "io5:IoBasket":
            return IoBasket;
        case "io5:IoBasketballOutline":
            return IoBasketballOutline;
        case "io5:IoBasketballSharp":
            return IoBasketballSharp;
        case "io5:IoBasketball":
            return IoBasketball;
        case "io5:IoBatteryChargingOutline":
            return IoBatteryChargingOutline;
        case "io5:IoBatteryChargingSharp":
            return IoBatteryChargingSharp;
        case "io5:IoBatteryCharging":
            return IoBatteryCharging;
        case "io5:IoBatteryDeadOutline":
            return IoBatteryDeadOutline;
        case "io5:IoBatteryDeadSharp":
            return IoBatteryDeadSharp;
        case "io5:IoBatteryDead":
            return IoBatteryDead;
        case "io5:IoBatteryFullOutline":
            return IoBatteryFullOutline;
        case "io5:IoBatteryFullSharp":
            return IoBatteryFullSharp;
        case "io5:IoBatteryFull":
            return IoBatteryFull;
        case "io5:IoBatteryHalfOutline":
            return IoBatteryHalfOutline;
        case "io5:IoBatteryHalfSharp":
            return IoBatteryHalfSharp;
        case "io5:IoBatteryHalf":
            return IoBatteryHalf;
        case "io5:IoBeakerOutline":
            return IoBeakerOutline;
        case "io5:IoBeakerSharp":
            return IoBeakerSharp;
        case "io5:IoBeaker":
            return IoBeaker;
        case "io5:IoBedOutline":
            return IoBedOutline;
        case "io5:IoBedSharp":
            return IoBedSharp;
        case "io5:IoBed":
            return IoBed;
        case "io5:IoBeerOutline":
            return IoBeerOutline;
        case "io5:IoBeerSharp":
            return IoBeerSharp;
        case "io5:IoBeer":
            return IoBeer;
        case "io5:IoBicycleOutline":
            return IoBicycleOutline;
        case "io5:IoBicycleSharp":
            return IoBicycleSharp;
        case "io5:IoBicycle":
            return IoBicycle;
        case "io5:IoBluetoothOutline":
            return IoBluetoothOutline;
        case "io5:IoBluetoothSharp":
            return IoBluetoothSharp;
        case "io5:IoBluetooth":
            return IoBluetooth;
        case "io5:IoBoatOutline":
            return IoBoatOutline;
        case "io5:IoBoatSharp":
            return IoBoatSharp;
        case "io5:IoBoat":
            return IoBoat;
        case "io5:IoBodyOutline":
            return IoBodyOutline;
        case "io5:IoBodySharp":
            return IoBodySharp;
        case "io5:IoBody":
            return IoBody;
        case "io5:IoBonfireOutline":
            return IoBonfireOutline;
        case "io5:IoBonfireSharp":
            return IoBonfireSharp;
        case "io5:IoBonfire":
            return IoBonfire;
        case "io5:IoBookOutline":
            return IoBookOutline;
        case "io5:IoBookSharp":
            return IoBookSharp;
        case "io5:IoBook":
            return IoBook;
        case "io5:IoBookmarkOutline":
            return IoBookmarkOutline;
        case "io5:IoBookmarkSharp":
            return IoBookmarkSharp;
        case "io5:IoBookmark":
            return IoBookmark;
        case "io5:IoBookmarksOutline":
            return IoBookmarksOutline;
        case "io5:IoBookmarksSharp":
            return IoBookmarksSharp;
        case "io5:IoBookmarks":
            return IoBookmarks;
        case "io5:IoBowlingBallOutline":
            return IoBowlingBallOutline;
        case "io5:IoBowlingBallSharp":
            return IoBowlingBallSharp;
        case "io5:IoBowlingBall":
            return IoBowlingBall;
        case "io5:IoBriefcaseOutline":
            return IoBriefcaseOutline;
        case "io5:IoBriefcaseSharp":
            return IoBriefcaseSharp;
        case "io5:IoBriefcase":
            return IoBriefcase;
        case "io5:IoBrowsersOutline":
            return IoBrowsersOutline;
        case "io5:IoBrowsersSharp":
            return IoBrowsersSharp;
        case "io5:IoBrowsers":
            return IoBrowsers;
        case "io5:IoBrushOutline":
            return IoBrushOutline;
        case "io5:IoBrushSharp":
            return IoBrushSharp;
        case "io5:IoBrush":
            return IoBrush;
        case "io5:IoBugOutline":
            return IoBugOutline;
        case "io5:IoBugSharp":
            return IoBugSharp;
        case "io5:IoBug":
            return IoBug;
        case "io5:IoBuildOutline":
            return IoBuildOutline;
        case "io5:IoBuildSharp":
            return IoBuildSharp;
        case "io5:IoBuild":
            return IoBuild;
        case "io5:IoBulbOutline":
            return IoBulbOutline;
        case "io5:IoBulbSharp":
            return IoBulbSharp;
        case "io5:IoBulb":
            return IoBulb;
        case "io5:IoBusOutline":
            return IoBusOutline;
        case "io5:IoBusSharp":
            return IoBusSharp;
        case "io5:IoBus":
            return IoBus;
        case "io5:IoBusinessOutline":
            return IoBusinessOutline;
        case "io5:IoBusinessSharp":
            return IoBusinessSharp;
        case "io5:IoBusiness":
            return IoBusiness;
        case "io5:IoCafeOutline":
            return IoCafeOutline;
        case "io5:IoCafeSharp":
            return IoCafeSharp;
        case "io5:IoCafe":
            return IoCafe;
        case "io5:IoCalculatorOutline":
            return IoCalculatorOutline;
        case "io5:IoCalculatorSharp":
            return IoCalculatorSharp;
        case "io5:IoCalculator":
            return IoCalculator;
        case "io5:IoCalendarClearOutline":
            return IoCalendarClearOutline;
        case "io5:IoCalendarClearSharp":
            return IoCalendarClearSharp;
        case "io5:IoCalendarClear":
            return IoCalendarClear;
        case "io5:IoCalendarNumberOutline":
            return IoCalendarNumberOutline;
        case "io5:IoCalendarNumberSharp":
            return IoCalendarNumberSharp;
        case "io5:IoCalendarNumber":
            return IoCalendarNumber;
        case "io5:IoCalendarOutline":
            return IoCalendarOutline;
        case "io5:IoCalendarSharp":
            return IoCalendarSharp;
        case "io5:IoCalendar":
            return IoCalendar;
        case "io5:IoCallOutline":
            return IoCallOutline;
        case "io5:IoCallSharp":
            return IoCallSharp;
        case "io5:IoCall":
            return IoCall;
        case "io5:IoCameraOutline":
            return IoCameraOutline;
        case "io5:IoCameraReverseOutline":
            return IoCameraReverseOutline;
        case "io5:IoCameraReverseSharp":
            return IoCameraReverseSharp;
        case "io5:IoCameraReverse":
            return IoCameraReverse;
        case "io5:IoCameraSharp":
            return IoCameraSharp;
        case "io5:IoCamera":
            return IoCamera;
        case "io5:IoCarOutline":
            return IoCarOutline;
        case "io5:IoCarSharp":
            return IoCarSharp;
        case "io5:IoCarSportOutline":
            return IoCarSportOutline;
        case "io5:IoCarSportSharp":
            return IoCarSportSharp;
        case "io5:IoCarSport":
            return IoCarSport;
        case "io5:IoCar":
            return IoCar;
        case "io5:IoCardOutline":
            return IoCardOutline;
        case "io5:IoCardSharp":
            return IoCardSharp;
        case "io5:IoCard":
            return IoCard;
        case "io5:IoCaretBackCircleOutline":
            return IoCaretBackCircleOutline;
        case "io5:IoCaretBackCircleSharp":
            return IoCaretBackCircleSharp;
        case "io5:IoCaretBackCircle":
            return IoCaretBackCircle;
        case "io5:IoCaretBackOutline":
            return IoCaretBackOutline;
        case "io5:IoCaretBackSharp":
            return IoCaretBackSharp;
        case "io5:IoCaretBack":
            return IoCaretBack;
        case "io5:IoCaretDownCircleOutline":
            return IoCaretDownCircleOutline;
        case "io5:IoCaretDownCircleSharp":
            return IoCaretDownCircleSharp;
        case "io5:IoCaretDownCircle":
            return IoCaretDownCircle;
        case "io5:IoCaretDownOutline":
            return IoCaretDownOutline;
        case "io5:IoCaretDownSharp":
            return IoCaretDownSharp;
        case "io5:IoCaretDown":
            return IoCaretDown;
        case "io5:IoCaretForwardCircleOutline":
            return IoCaretForwardCircleOutline;
        case "io5:IoCaretForwardCircleSharp":
            return IoCaretForwardCircleSharp;
        case "io5:IoCaretForwardCircle":
            return IoCaretForwardCircle;
        case "io5:IoCaretForwardOutline":
            return IoCaretForwardOutline;
        case "io5:IoCaretForwardSharp":
            return IoCaretForwardSharp;
        case "io5:IoCaretForward":
            return IoCaretForward;
        case "io5:IoCaretUpCircleOutline":
            return IoCaretUpCircleOutline;
        case "io5:IoCaretUpCircleSharp":
            return IoCaretUpCircleSharp;
        case "io5:IoCaretUpCircle":
            return IoCaretUpCircle;
        case "io5:IoCaretUpOutline":
            return IoCaretUpOutline;
        case "io5:IoCaretUpSharp":
            return IoCaretUpSharp;
        case "io5:IoCaretUp":
            return IoCaretUp;
        case "io5:IoCartOutline":
            return IoCartOutline;
        case "io5:IoCartSharp":
            return IoCartSharp;
        case "io5:IoCart":
            return IoCart;
        case "io5:IoCashOutline":
            return IoCashOutline;
        case "io5:IoCashSharp":
            return IoCashSharp;
        case "io5:IoCash":
            return IoCash;
        case "io5:IoCellularOutline":
            return IoCellularOutline;
        case "io5:IoCellularSharp":
            return IoCellularSharp;
        case "io5:IoCellular":
            return IoCellular;
        case "io5:IoChatboxEllipsesOutline":
            return IoChatboxEllipsesOutline;
        case "io5:IoChatboxEllipsesSharp":
            return IoChatboxEllipsesSharp;
        case "io5:IoChatboxEllipses":
            return IoChatboxEllipses;
        case "io5:IoChatboxOutline":
            return IoChatboxOutline;
        case "io5:IoChatboxSharp":
            return IoChatboxSharp;
        case "io5:IoChatbox":
            return IoChatbox;
        case "io5:IoChatbubbleEllipsesOutline":
            return IoChatbubbleEllipsesOutline;
        case "io5:IoChatbubbleEllipsesSharp":
            return IoChatbubbleEllipsesSharp;
        case "io5:IoChatbubbleEllipses":
            return IoChatbubbleEllipses;
        case "io5:IoChatbubbleOutline":
            return IoChatbubbleOutline;
        case "io5:IoChatbubbleSharp":
            return IoChatbubbleSharp;
        case "io5:IoChatbubble":
            return IoChatbubble;
        case "io5:IoChatbubblesOutline":
            return IoChatbubblesOutline;
        case "io5:IoChatbubblesSharp":
            return IoChatbubblesSharp;
        case "io5:IoChatbubbles":
            return IoChatbubbles;
        case "io5:IoCheckboxOutline":
            return IoCheckboxOutline;
        case "io5:IoCheckboxSharp":
            return IoCheckboxSharp;
        case "io5:IoCheckbox":
            return IoCheckbox;
        case "io5:IoCheckmarkCircleOutline":
            return IoCheckmarkCircleOutline;
        case "io5:IoCheckmarkCircleSharp":
            return IoCheckmarkCircleSharp;
        case "io5:IoCheckmarkCircle":
            return IoCheckmarkCircle;
        case "io5:IoCheckmarkDoneCircleOutline":
            return IoCheckmarkDoneCircleOutline;
        case "io5:IoCheckmarkDoneCircleSharp":
            return IoCheckmarkDoneCircleSharp;
        case "io5:IoCheckmarkDoneCircle":
            return IoCheckmarkDoneCircle;
        case "io5:IoCheckmarkDoneOutline":
            return IoCheckmarkDoneOutline;
        case "io5:IoCheckmarkDoneSharp":
            return IoCheckmarkDoneSharp;
        case "io5:IoCheckmarkDone":
            return IoCheckmarkDone;
        case "io5:IoCheckmarkOutline":
            return IoCheckmarkOutline;
        case "io5:IoCheckmarkSharp":
            return IoCheckmarkSharp;
        case "io5:IoCheckmark":
            return IoCheckmark;
        case "io5:IoChevronBackCircleOutline":
            return IoChevronBackCircleOutline;
        case "io5:IoChevronBackCircleSharp":
            return IoChevronBackCircleSharp;
        case "io5:IoChevronBackCircle":
            return IoChevronBackCircle;
        case "io5:IoChevronBackOutline":
            return IoChevronBackOutline;
        case "io5:IoChevronBackSharp":
            return IoChevronBackSharp;
        case "io5:IoChevronBack":
            return IoChevronBack;
        case "io5:IoChevronDownCircleOutline":
            return IoChevronDownCircleOutline;
        case "io5:IoChevronDownCircleSharp":
            return IoChevronDownCircleSharp;
        case "io5:IoChevronDownCircle":
            return IoChevronDownCircle;
        case "io5:IoChevronDownOutline":
            return IoChevronDownOutline;
        case "io5:IoChevronDownSharp":
            return IoChevronDownSharp;
        case "io5:IoChevronDown":
            return IoChevronDown;
        case "io5:IoChevronForwardCircleOutline":
            return IoChevronForwardCircleOutline;
        case "io5:IoChevronForwardCircleSharp":
            return IoChevronForwardCircleSharp;
        case "io5:IoChevronForwardCircle":
            return IoChevronForwardCircle;
        case "io5:IoChevronForwardOutline":
            return IoChevronForwardOutline;
        case "io5:IoChevronForwardSharp":
            return IoChevronForwardSharp;
        case "io5:IoChevronForward":
            return IoChevronForward;
        case "io5:IoChevronUpCircleOutline":
            return IoChevronUpCircleOutline;
        case "io5:IoChevronUpCircleSharp":
            return IoChevronUpCircleSharp;
        case "io5:IoChevronUpCircle":
            return IoChevronUpCircle;
        case "io5:IoChevronUpOutline":
            return IoChevronUpOutline;
        case "io5:IoChevronUpSharp":
            return IoChevronUpSharp;
        case "io5:IoChevronUp":
            return IoChevronUp;
        case "io5:IoClipboardOutline":
            return IoClipboardOutline;
        case "io5:IoClipboardSharp":
            return IoClipboardSharp;
        case "io5:IoClipboard":
            return IoClipboard;
        case "io5:IoCloseCircleOutline":
            return IoCloseCircleOutline;
        case "io5:IoCloseCircleSharp":
            return IoCloseCircleSharp;
        case "io5:IoCloseCircle":
            return IoCloseCircle;
        case "io5:IoCloseOutline":
            return IoCloseOutline;
        case "io5:IoCloseSharp":
            return IoCloseSharp;
        case "io5:IoClose":
            return IoClose;
        case "io5:IoCloudCircleOutline":
            return IoCloudCircleOutline;
        case "io5:IoCloudCircleSharp":
            return IoCloudCircleSharp;
        case "io5:IoCloudCircle":
            return IoCloudCircle;
        case "io5:IoCloudDoneOutline":
            return IoCloudDoneOutline;
        case "io5:IoCloudDoneSharp":
            return IoCloudDoneSharp;
        case "io5:IoCloudDone":
            return IoCloudDone;
        case "io5:IoCloudDownloadOutline":
            return IoCloudDownloadOutline;
        case "io5:IoCloudDownloadSharp":
            return IoCloudDownloadSharp;
        case "io5:IoCloudDownload":
            return IoCloudDownload;
        case "io5:IoCloudOfflineOutline":
            return IoCloudOfflineOutline;
        case "io5:IoCloudOfflineSharp":
            return IoCloudOfflineSharp;
        case "io5:IoCloudOffline":
            return IoCloudOffline;
        case "io5:IoCloudOutline":
            return IoCloudOutline;
        case "io5:IoCloudSharp":
            return IoCloudSharp;
        case "io5:IoCloudUploadOutline":
            return IoCloudUploadOutline;
        case "io5:IoCloudUploadSharp":
            return IoCloudUploadSharp;
        case "io5:IoCloudUpload":
            return IoCloudUpload;
        case "io5:IoCloud":
            return IoCloud;
        case "io5:IoCloudyNightOutline":
            return IoCloudyNightOutline;
        case "io5:IoCloudyNightSharp":
            return IoCloudyNightSharp;
        case "io5:IoCloudyNight":
            return IoCloudyNight;
        case "io5:IoCloudyOutline":
            return IoCloudyOutline;
        case "io5:IoCloudySharp":
            return IoCloudySharp;
        case "io5:IoCloudy":
            return IoCloudy;
        case "io5:IoCodeDownloadOutline":
            return IoCodeDownloadOutline;
        case "io5:IoCodeDownloadSharp":
            return IoCodeDownloadSharp;
        case "io5:IoCodeDownload":
            return IoCodeDownload;
        case "io5:IoCodeOutline":
            return IoCodeOutline;
        case "io5:IoCodeSharp":
            return IoCodeSharp;
        case "io5:IoCodeSlashOutline":
            return IoCodeSlashOutline;
        case "io5:IoCodeSlashSharp":
            return IoCodeSlashSharp;
        case "io5:IoCodeSlash":
            return IoCodeSlash;
        case "io5:IoCodeWorkingOutline":
            return IoCodeWorkingOutline;
        case "io5:IoCodeWorkingSharp":
            return IoCodeWorkingSharp;
        case "io5:IoCodeWorking":
            return IoCodeWorking;
        case "io5:IoCode":
            return IoCode;
        case "io5:IoCogOutline":
            return IoCogOutline;
        case "io5:IoCogSharp":
            return IoCogSharp;
        case "io5:IoCog":
            return IoCog;
        case "io5:IoColorFillOutline":
            return IoColorFillOutline;
        case "io5:IoColorFillSharp":
            return IoColorFillSharp;
        case "io5:IoColorFill":
            return IoColorFill;
        case "io5:IoColorFilterOutline":
            return IoColorFilterOutline;
        case "io5:IoColorFilterSharp":
            return IoColorFilterSharp;
        case "io5:IoColorFilter":
            return IoColorFilter;
        case "io5:IoColorPaletteOutline":
            return IoColorPaletteOutline;
        case "io5:IoColorPaletteSharp":
            return IoColorPaletteSharp;
        case "io5:IoColorPalette":
            return IoColorPalette;
        case "io5:IoColorWandOutline":
            return IoColorWandOutline;
        case "io5:IoColorWandSharp":
            return IoColorWandSharp;
        case "io5:IoColorWand":
            return IoColorWand;
        case "io5:IoCompassOutline":
            return IoCompassOutline;
        case "io5:IoCompassSharp":
            return IoCompassSharp;
        case "io5:IoCompass":
            return IoCompass;
        case "io5:IoConstructOutline":
            return IoConstructOutline;
        case "io5:IoConstructSharp":
            return IoConstructSharp;
        case "io5:IoConstruct":
            return IoConstruct;
        case "io5:IoContractOutline":
            return IoContractOutline;
        case "io5:IoContractSharp":
            return IoContractSharp;
        case "io5:IoContract":
            return IoContract;
        case "io5:IoContrastOutline":
            return IoContrastOutline;
        case "io5:IoContrastSharp":
            return IoContrastSharp;
        case "io5:IoContrast":
            return IoContrast;
        case "io5:IoCopyOutline":
            return IoCopyOutline;
        case "io5:IoCopySharp":
            return IoCopySharp;
        case "io5:IoCopy":
            return IoCopy;
        case "io5:IoCreateOutline":
            return IoCreateOutline;
        case "io5:IoCreateSharp":
            return IoCreateSharp;
        case "io5:IoCreate":
            return IoCreate;
        case "io5:IoCropOutline":
            return IoCropOutline;
        case "io5:IoCropSharp":
            return IoCropSharp;
        case "io5:IoCrop":
            return IoCrop;
        case "io5:IoCubeOutline":
            return IoCubeOutline;
        case "io5:IoCubeSharp":
            return IoCubeSharp;
        case "io5:IoCube":
            return IoCube;
        case "io5:IoCutOutline":
            return IoCutOutline;
        case "io5:IoCutSharp":
            return IoCutSharp;
        case "io5:IoCut":
            return IoCut;
        case "io5:IoDesktopOutline":
            return IoDesktopOutline;
        case "io5:IoDesktopSharp":
            return IoDesktopSharp;
        case "io5:IoDesktop":
            return IoDesktop;
        case "io5:IoDiamondOutline":
            return IoDiamondOutline;
        case "io5:IoDiamondSharp":
            return IoDiamondSharp;
        case "io5:IoDiamond":
            return IoDiamond;
        case "io5:IoDiceOutline":
            return IoDiceOutline;
        case "io5:IoDiceSharp":
            return IoDiceSharp;
        case "io5:IoDice":
            return IoDice;
        case "io5:IoDiscOutline":
            return IoDiscOutline;
        case "io5:IoDiscSharp":
            return IoDiscSharp;
        case "io5:IoDisc":
            return IoDisc;
        case "io5:IoDocumentAttachOutline":
            return IoDocumentAttachOutline;
        case "io5:IoDocumentAttachSharp":
            return IoDocumentAttachSharp;
        case "io5:IoDocumentAttach":
            return IoDocumentAttach;
        case "io5:IoDocumentLockOutline":
            return IoDocumentLockOutline;
        case "io5:IoDocumentLockSharp":
            return IoDocumentLockSharp;
        case "io5:IoDocumentLock":
            return IoDocumentLock;
        case "io5:IoDocumentOutline":
            return IoDocumentOutline;
        case "io5:IoDocumentSharp":
            return IoDocumentSharp;
        case "io5:IoDocumentTextOutline":
            return IoDocumentTextOutline;
        case "io5:IoDocumentTextSharp":
            return IoDocumentTextSharp;
        case "io5:IoDocumentText":
            return IoDocumentText;
        case "io5:IoDocument":
            return IoDocument;
        case "io5:IoDocumentsOutline":
            return IoDocumentsOutline;
        case "io5:IoDocumentsSharp":
            return IoDocumentsSharp;
        case "io5:IoDocuments":
            return IoDocuments;
        case "io5:IoDownloadOutline":
            return IoDownloadOutline;
        case "io5:IoDownloadSharp":
            return IoDownloadSharp;
        case "io5:IoDownload":
            return IoDownload;
        case "io5:IoDuplicateOutline":
            return IoDuplicateOutline;
        case "io5:IoDuplicateSharp":
            return IoDuplicateSharp;
        case "io5:IoDuplicate":
            return IoDuplicate;
        case "io5:IoEarOutline":
            return IoEarOutline;
        case "io5:IoEarSharp":
            return IoEarSharp;
        case "io5:IoEar":
            return IoEar;
        case "io5:IoEarthOutline":
            return IoEarthOutline;
        case "io5:IoEarthSharp":
            return IoEarthSharp;
        case "io5:IoEarth":
            return IoEarth;
        case "io5:IoEaselOutline":
            return IoEaselOutline;
        case "io5:IoEaselSharp":
            return IoEaselSharp;
        case "io5:IoEasel":
            return IoEasel;
        case "io5:IoEggOutline":
            return IoEggOutline;
        case "io5:IoEggSharp":
            return IoEggSharp;
        case "io5:IoEgg":
            return IoEgg;
        case "io5:IoEllipseOutline":
            return IoEllipseOutline;
        case "io5:IoEllipseSharp":
            return IoEllipseSharp;
        case "io5:IoEllipse":
            return IoEllipse;
        case "io5:IoEllipsisHorizontalCircleOutline":
            return IoEllipsisHorizontalCircleOutline;
        case "io5:IoEllipsisHorizontalCircleSharp":
            return IoEllipsisHorizontalCircleSharp;
        case "io5:IoEllipsisHorizontalCircle":
            return IoEllipsisHorizontalCircle;
        case "io5:IoEllipsisHorizontalOutline":
            return IoEllipsisHorizontalOutline;
        case "io5:IoEllipsisHorizontalSharp":
            return IoEllipsisHorizontalSharp;
        case "io5:IoEllipsisHorizontal":
            return IoEllipsisHorizontal;
        case "io5:IoEllipsisVerticalCircleOutline":
            return IoEllipsisVerticalCircleOutline;
        case "io5:IoEllipsisVerticalCircleSharp":
            return IoEllipsisVerticalCircleSharp;
        case "io5:IoEllipsisVerticalCircle":
            return IoEllipsisVerticalCircle;
        case "io5:IoEllipsisVerticalOutline":
            return IoEllipsisVerticalOutline;
        case "io5:IoEllipsisVerticalSharp":
            return IoEllipsisVerticalSharp;
        case "io5:IoEllipsisVertical":
            return IoEllipsisVertical;
        case "io5:IoEnterOutline":
            return IoEnterOutline;
        case "io5:IoEnterSharp":
            return IoEnterSharp;
        case "io5:IoEnter":
            return IoEnter;
        case "io5:IoExitOutline":
            return IoExitOutline;
        case "io5:IoExitSharp":
            return IoExitSharp;
        case "io5:IoExit":
            return IoExit;
        case "io5:IoExpandOutline":
            return IoExpandOutline;
        case "io5:IoExpandSharp":
            return IoExpandSharp;
        case "io5:IoExpand":
            return IoExpand;
        case "io5:IoExtensionPuzzleOutline":
            return IoExtensionPuzzleOutline;
        case "io5:IoExtensionPuzzleSharp":
            return IoExtensionPuzzleSharp;
        case "io5:IoExtensionPuzzle":
            return IoExtensionPuzzle;
        case "io5:IoEyeOffOutline":
            return IoEyeOffOutline;
        case "io5:IoEyeOffSharp":
            return IoEyeOffSharp;
        case "io5:IoEyeOff":
            return IoEyeOff;
        case "io5:IoEyeOutline":
            return IoEyeOutline;
        case "io5:IoEyeSharp":
            return IoEyeSharp;
        case "io5:IoEye":
            return IoEye;
        case "io5:IoEyedropOutline":
            return IoEyedropOutline;
        case "io5:IoEyedropSharp":
            return IoEyedropSharp;
        case "io5:IoEyedrop":
            return IoEyedrop;
        case "io5:IoFastFoodOutline":
            return IoFastFoodOutline;
        case "io5:IoFastFoodSharp":
            return IoFastFoodSharp;
        case "io5:IoFastFood":
            return IoFastFood;
        case "io5:IoFemaleOutline":
            return IoFemaleOutline;
        case "io5:IoFemaleSharp":
            return IoFemaleSharp;
        case "io5:IoFemale":
            return IoFemale;
        case "io5:IoFileTrayFullOutline":
            return IoFileTrayFullOutline;
        case "io5:IoFileTrayFullSharp":
            return IoFileTrayFullSharp;
        case "io5:IoFileTrayFull":
            return IoFileTrayFull;
        case "io5:IoFileTrayOutline":
            return IoFileTrayOutline;
        case "io5:IoFileTraySharp":
            return IoFileTraySharp;
        case "io5:IoFileTrayStackedOutline":
            return IoFileTrayStackedOutline;
        case "io5:IoFileTrayStackedSharp":
            return IoFileTrayStackedSharp;
        case "io5:IoFileTrayStacked":
            return IoFileTrayStacked;
        case "io5:IoFileTray":
            return IoFileTray;
        case "io5:IoFilmOutline":
            return IoFilmOutline;
        case "io5:IoFilmSharp":
            return IoFilmSharp;
        case "io5:IoFilm":
            return IoFilm;
        case "io5:IoFilterCircleOutline":
            return IoFilterCircleOutline;
        case "io5:IoFilterCircleSharp":
            return IoFilterCircleSharp;
        case "io5:IoFilterCircle":
            return IoFilterCircle;
        case "io5:IoFilterOutline":
            return IoFilterOutline;
        case "io5:IoFilterSharp":
            return IoFilterSharp;
        case "io5:IoFilter":
            return IoFilter;
        case "io5:IoFingerPrintOutline":
            return IoFingerPrintOutline;
        case "io5:IoFingerPrintSharp":
            return IoFingerPrintSharp;
        case "io5:IoFingerPrint":
            return IoFingerPrint;
        case "io5:IoFishOutline":
            return IoFishOutline;
        case "io5:IoFishSharp":
            return IoFishSharp;
        case "io5:IoFish":
            return IoFish;
        case "io5:IoFitnessOutline":
            return IoFitnessOutline;
        case "io5:IoFitnessSharp":
            return IoFitnessSharp;
        case "io5:IoFitness":
            return IoFitness;
        case "io5:IoFlagOutline":
            return IoFlagOutline;
        case "io5:IoFlagSharp":
            return IoFlagSharp;
        case "io5:IoFlag":
            return IoFlag;
        case "io5:IoFlameOutline":
            return IoFlameOutline;
        case "io5:IoFlameSharp":
            return IoFlameSharp;
        case "io5:IoFlame":
            return IoFlame;
        case "io5:IoFlashOffOutline":
            return IoFlashOffOutline;
        case "io5:IoFlashOffSharp":
            return IoFlashOffSharp;
        case "io5:IoFlashOff":
            return IoFlashOff;
        case "io5:IoFlashOutline":
            return IoFlashOutline;
        case "io5:IoFlashSharp":
            return IoFlashSharp;
        case "io5:IoFlash":
            return IoFlash;
        case "io5:IoFlashlightOutline":
            return IoFlashlightOutline;
        case "io5:IoFlashlightSharp":
            return IoFlashlightSharp;
        case "io5:IoFlashlight":
            return IoFlashlight;
        case "io5:IoFlaskOutline":
            return IoFlaskOutline;
        case "io5:IoFlaskSharp":
            return IoFlaskSharp;
        case "io5:IoFlask":
            return IoFlask;
        case "io5:IoFlowerOutline":
            return IoFlowerOutline;
        case "io5:IoFlowerSharp":
            return IoFlowerSharp;
        case "io5:IoFlower":
            return IoFlower;
        case "io5:IoFolderOpenOutline":
            return IoFolderOpenOutline;
        case "io5:IoFolderOpenSharp":
            return IoFolderOpenSharp;
        case "io5:IoFolderOpen":
            return IoFolderOpen;
        case "io5:IoFolderOutline":
            return IoFolderOutline;
        case "io5:IoFolderSharp":
            return IoFolderSharp;
        case "io5:IoFolder":
            return IoFolder;
        case "io5:IoFootballOutline":
            return IoFootballOutline;
        case "io5:IoFootballSharp":
            return IoFootballSharp;
        case "io5:IoFootball":
            return IoFootball;
        case "io5:IoFootstepsOutline":
            return IoFootstepsOutline;
        case "io5:IoFootstepsSharp":
            return IoFootstepsSharp;
        case "io5:IoFootsteps":
            return IoFootsteps;
        case "io5:IoFunnelOutline":
            return IoFunnelOutline;
        case "io5:IoFunnelSharp":
            return IoFunnelSharp;
        case "io5:IoFunnel":
            return IoFunnel;
        case "io5:IoGameControllerOutline":
            return IoGameControllerOutline;
        case "io5:IoGameControllerSharp":
            return IoGameControllerSharp;
        case "io5:IoGameController":
            return IoGameController;
        case "io5:IoGiftOutline":
            return IoGiftOutline;
        case "io5:IoGiftSharp":
            return IoGiftSharp;
        case "io5:IoGift":
            return IoGift;
        case "io5:IoGitBranchOutline":
            return IoGitBranchOutline;
        case "io5:IoGitBranchSharp":
            return IoGitBranchSharp;
        case "io5:IoGitBranch":
            return IoGitBranch;
        case "io5:IoGitCommitOutline":
            return IoGitCommitOutline;
        case "io5:IoGitCommitSharp":
            return IoGitCommitSharp;
        case "io5:IoGitCommit":
            return IoGitCommit;
        case "io5:IoGitCompareOutline":
            return IoGitCompareOutline;
        case "io5:IoGitCompareSharp":
            return IoGitCompareSharp;
        case "io5:IoGitCompare":
            return IoGitCompare;
        case "io5:IoGitMergeOutline":
            return IoGitMergeOutline;
        case "io5:IoGitMergeSharp":
            return IoGitMergeSharp;
        case "io5:IoGitMerge":
            return IoGitMerge;
        case "io5:IoGitNetworkOutline":
            return IoGitNetworkOutline;
        case "io5:IoGitNetworkSharp":
            return IoGitNetworkSharp;
        case "io5:IoGitNetwork":
            return IoGitNetwork;
        case "io5:IoGitPullRequestOutline":
            return IoGitPullRequestOutline;
        case "io5:IoGitPullRequestSharp":
            return IoGitPullRequestSharp;
        case "io5:IoGitPullRequest":
            return IoGitPullRequest;
        case "io5:IoGlassesOutline":
            return IoGlassesOutline;
        case "io5:IoGlassesSharp":
            return IoGlassesSharp;
        case "io5:IoGlasses":
            return IoGlasses;
        case "io5:IoGlobeOutline":
            return IoGlobeOutline;
        case "io5:IoGlobeSharp":
            return IoGlobeSharp;
        case "io5:IoGlobe":
            return IoGlobe;
        case "io5:IoGolfOutline":
            return IoGolfOutline;
        case "io5:IoGolfSharp":
            return IoGolfSharp;
        case "io5:IoGolf":
            return IoGolf;
        case "io5:IoGridOutline":
            return IoGridOutline;
        case "io5:IoGridSharp":
            return IoGridSharp;
        case "io5:IoGrid":
            return IoGrid;
        case "io5:IoHammerOutline":
            return IoHammerOutline;
        case "io5:IoHammerSharp":
            return IoHammerSharp;
        case "io5:IoHammer":
            return IoHammer;
        case "io5:IoHandLeftOutline":
            return IoHandLeftOutline;
        case "io5:IoHandLeftSharp":
            return IoHandLeftSharp;
        case "io5:IoHandLeft":
            return IoHandLeft;
        case "io5:IoHandRightOutline":
            return IoHandRightOutline;
        case "io5:IoHandRightSharp":
            return IoHandRightSharp;
        case "io5:IoHandRight":
            return IoHandRight;
        case "io5:IoHappyOutline":
            return IoHappyOutline;
        case "io5:IoHappySharp":
            return IoHappySharp;
        case "io5:IoHappy":
            return IoHappy;
        case "io5:IoHardwareChipOutline":
            return IoHardwareChipOutline;
        case "io5:IoHardwareChipSharp":
            return IoHardwareChipSharp;
        case "io5:IoHardwareChip":
            return IoHardwareChip;
        case "io5:IoHeadsetOutline":
            return IoHeadsetOutline;
        case "io5:IoHeadsetSharp":
            return IoHeadsetSharp;
        case "io5:IoHeadset":
            return IoHeadset;
        case "io5:IoHeartCircleOutline":
            return IoHeartCircleOutline;
        case "io5:IoHeartCircleSharp":
            return IoHeartCircleSharp;
        case "io5:IoHeartCircle":
            return IoHeartCircle;
        case "io5:IoHeartDislikeCircleOutline":
            return IoHeartDislikeCircleOutline;
        case "io5:IoHeartDislikeCircleSharp":
            return IoHeartDislikeCircleSharp;
        case "io5:IoHeartDislikeCircle":
            return IoHeartDislikeCircle;
        case "io5:IoHeartDislikeOutline":
            return IoHeartDislikeOutline;
        case "io5:IoHeartDislikeSharp":
            return IoHeartDislikeSharp;
        case "io5:IoHeartDislike":
            return IoHeartDislike;
        case "io5:IoHeartHalfOutline":
            return IoHeartHalfOutline;
        case "io5:IoHeartHalfSharp":
            return IoHeartHalfSharp;
        case "io5:IoHeartHalf":
            return IoHeartHalf;
        case "io5:IoHeartOutline":
            return IoHeartOutline;
        case "io5:IoHeartSharp":
            return IoHeartSharp;
        case "io5:IoHeart":
            return IoHeart;
        case "io5:IoHelpBuoyOutline":
            return IoHelpBuoyOutline;
        case "io5:IoHelpBuoySharp":
            return IoHelpBuoySharp;
        case "io5:IoHelpBuoy":
            return IoHelpBuoy;
        case "io5:IoHelpCircleOutline":
            return IoHelpCircleOutline;
        case "io5:IoHelpCircleSharp":
            return IoHelpCircleSharp;
        case "io5:IoHelpCircle":
            return IoHelpCircle;
        case "io5:IoHelpOutline":
            return IoHelpOutline;
        case "io5:IoHelpSharp":
            return IoHelpSharp;
        case "io5:IoHelp":
            return IoHelp;
        case "io5:IoHomeOutline":
            return IoHomeOutline;
        case "io5:IoHomeSharp":
            return IoHomeSharp;
        case "io5:IoHome":
            return IoHome;
        case "io5:IoHourglassOutline":
            return IoHourglassOutline;
        case "io5:IoHourglassSharp":
            return IoHourglassSharp;
        case "io5:IoHourglass":
            return IoHourglass;
        case "io5:IoIceCreamOutline":
            return IoIceCreamOutline;
        case "io5:IoIceCreamSharp":
            return IoIceCreamSharp;
        case "io5:IoIceCream":
            return IoIceCream;
        case "io5:IoIdCardOutline":
            return IoIdCardOutline;
        case "io5:IoIdCardSharp":
            return IoIdCardSharp;
        case "io5:IoIdCard":
            return IoIdCard;
        case "io5:IoImageOutline":
            return IoImageOutline;
        case "io5:IoImageSharp":
            return IoImageSharp;
        case "io5:IoImage":
            return IoImage;
        case "io5:IoImagesOutline":
            return IoImagesOutline;
        case "io5:IoImagesSharp":
            return IoImagesSharp;
        case "io5:IoImages":
            return IoImages;
        case "io5:IoInfiniteOutline":
            return IoInfiniteOutline;
        case "io5:IoInfiniteSharp":
            return IoInfiniteSharp;
        case "io5:IoInfinite":
            return IoInfinite;
        case "io5:IoInformationCircleOutline":
            return IoInformationCircleOutline;
        case "io5:IoInformationCircleSharp":
            return IoInformationCircleSharp;
        case "io5:IoInformationCircle":
            return IoInformationCircle;
        case "io5:IoInformationOutline":
            return IoInformationOutline;
        case "io5:IoInformationSharp":
            return IoInformationSharp;
        case "io5:IoInformation":
            return IoInformation;
        case "io5:IoInvertModeOutline":
            return IoInvertModeOutline;
        case "io5:IoInvertModeSharp":
            return IoInvertModeSharp;
        case "io5:IoInvertMode":
            return IoInvertMode;
        case "io5:IoJournalOutline":
            return IoJournalOutline;
        case "io5:IoJournalSharp":
            return IoJournalSharp;
        case "io5:IoJournal":
            return IoJournal;
        case "io5:IoKeyOutline":
            return IoKeyOutline;
        case "io5:IoKeySharp":
            return IoKeySharp;
        case "io5:IoKey":
            return IoKey;
        case "io5:IoKeypadOutline":
            return IoKeypadOutline;
        case "io5:IoKeypadSharp":
            return IoKeypadSharp;
        case "io5:IoKeypad":
            return IoKeypad;
        case "io5:IoLanguageOutline":
            return IoLanguageOutline;
        case "io5:IoLanguageSharp":
            return IoLanguageSharp;
        case "io5:IoLanguage":
            return IoLanguage;
        case "io5:IoLaptopOutline":
            return IoLaptopOutline;
        case "io5:IoLaptopSharp":
            return IoLaptopSharp;
        case "io5:IoLaptop":
            return IoLaptop;
        case "io5:IoLayersOutline":
            return IoLayersOutline;
        case "io5:IoLayersSharp":
            return IoLayersSharp;
        case "io5:IoLayers":
            return IoLayers;
        case "io5:IoLeafOutline":
            return IoLeafOutline;
        case "io5:IoLeafSharp":
            return IoLeafSharp;
        case "io5:IoLeaf":
            return IoLeaf;
        case "io5:IoLibraryOutline":
            return IoLibraryOutline;
        case "io5:IoLibrarySharp":
            return IoLibrarySharp;
        case "io5:IoLibrary":
            return IoLibrary;
        case "io5:IoLinkOutline":
            return IoLinkOutline;
        case "io5:IoLinkSharp":
            return IoLinkSharp;
        case "io5:IoLink":
            return IoLink;
        case "io5:IoListCircleOutline":
            return IoListCircleOutline;
        case "io5:IoListCircleSharp":
            return IoListCircleSharp;
        case "io5:IoListCircle":
            return IoListCircle;
        case "io5:IoListOutline":
            return IoListOutline;
        case "io5:IoListSharp":
            return IoListSharp;
        case "io5:IoList":
            return IoList;
        case "io5:IoLocateOutline":
            return IoLocateOutline;
        case "io5:IoLocateSharp":
            return IoLocateSharp;
        case "io5:IoLocate":
            return IoLocate;
        case "io5:IoLocationOutline":
            return IoLocationOutline;
        case "io5:IoLocationSharp":
            return IoLocationSharp;
        case "io5:IoLocation":
            return IoLocation;
        case "io5:IoLockClosedOutline":
            return IoLockClosedOutline;
        case "io5:IoLockClosedSharp":
            return IoLockClosedSharp;
        case "io5:IoLockClosed":
            return IoLockClosed;
        case "io5:IoLockOpenOutline":
            return IoLockOpenOutline;
        case "io5:IoLockOpenSharp":
            return IoLockOpenSharp;
        case "io5:IoLockOpen":
            return IoLockOpen;
        case "io5:IoLogInOutline":
            return IoLogInOutline;
        case "io5:IoLogInSharp":
            return IoLogInSharp;
        case "io5:IoLogIn":
            return IoLogIn;
        case "io5:IoLogOutOutline":
            return IoLogOutOutline;
        case "io5:IoLogOutSharp":
            return IoLogOutSharp;
        case "io5:IoLogOut":
            return IoLogOut;
        case "io5:IoLogoAlipay":
            return IoLogoAlipay;
        case "io5:IoLogoAmazon":
            return IoLogoAmazon;
        case "io5:IoLogoAmplify":
            return IoLogoAmplify;
        case "io5:IoLogoAndroid":
            return IoLogoAndroid;
        case "io5:IoLogoAngular":
            return IoLogoAngular;
        case "io5:IoLogoAppleAppstore":
            return IoLogoAppleAppstore;
        case "io5:IoLogoAppleAr":
            return IoLogoAppleAr;
        case "io5:IoLogoApple":
            return IoLogoApple;
        case "io5:IoLogoBehance":
            return IoLogoBehance;
        case "io5:IoLogoBitbucket":
            return IoLogoBitbucket;
        case "io5:IoLogoBitcoin":
            return IoLogoBitcoin;
        case "io5:IoLogoBuffer":
            return IoLogoBuffer;
        case "io5:IoLogoCapacitor":
            return IoLogoCapacitor;
        case "io5:IoLogoChrome":
            return IoLogoChrome;
        case "io5:IoLogoClosedCaptioning":
            return IoLogoClosedCaptioning;
        case "io5:IoLogoCodepen":
            return IoLogoCodepen;
        case "io5:IoLogoCss3":
            return IoLogoCss3;
        case "io5:IoLogoDesignernews":
            return IoLogoDesignernews;
        case "io5:IoLogoDeviantart":
            return IoLogoDeviantart;
        case "io5:IoLogoDiscord":
            return IoLogoDiscord;
        case "io5:IoLogoDocker":
            return IoLogoDocker;
        case "io5:IoLogoDribbble":
            return IoLogoDribbble;
        case "io5:IoLogoDropbox":
            return IoLogoDropbox;
        case "io5:IoLogoEdge":
            return IoLogoEdge;
        case "io5:IoLogoElectron":
            return IoLogoElectron;
        case "io5:IoLogoEuro":
            return IoLogoEuro;
        case "io5:IoLogoFacebook":
            return IoLogoFacebook;
        case "io5:IoLogoFigma":
            return IoLogoFigma;
        case "io5:IoLogoFirebase":
            return IoLogoFirebase;
        case "io5:IoLogoFirefox":
            return IoLogoFirefox;
        case "io5:IoLogoFlickr":
            return IoLogoFlickr;
        case "io5:IoLogoFoursquare":
            return IoLogoFoursquare;
        case "io5:IoLogoGithub":
            return IoLogoGithub;
        case "io5:IoLogoGitlab":
            return IoLogoGitlab;
        case "io5:IoLogoGooglePlaystore":
            return IoLogoGooglePlaystore;
        case "io5:IoLogoGoogle":
            return IoLogoGoogle;
        case "io5:IoLogoHackernews":
            return IoLogoHackernews;
        case "io5:IoLogoHtml5":
            return IoLogoHtml5;
        case "io5:IoLogoInstagram":
            return IoLogoInstagram;
        case "io5:IoLogoIonic":
            return IoLogoIonic;
        case "io5:IoLogoIonitron":
            return IoLogoIonitron;
        case "io5:IoLogoJavascript":
            return IoLogoJavascript;
        case "io5:IoLogoLaravel":
            return IoLogoLaravel;
        case "io5:IoLogoLinkedin":
            return IoLogoLinkedin;
        case "io5:IoLogoMarkdown":
            return IoLogoMarkdown;
        case "io5:IoLogoMastodon":
            return IoLogoMastodon;
        case "io5:IoLogoMedium":
            return IoLogoMedium;
        case "io5:IoLogoMicrosoft":
            return IoLogoMicrosoft;
        case "io5:IoLogoNoSmoking":
            return IoLogoNoSmoking;
        case "io5:IoLogoNodejs":
            return IoLogoNodejs;
        case "io5:IoLogoNpm":
            return IoLogoNpm;
        case "io5:IoLogoOctocat":
            return IoLogoOctocat;
        case "io5:IoLogoPaypal":
            return IoLogoPaypal;
        case "io5:IoLogoPinterest":
            return IoLogoPinterest;
        case "io5:IoLogoPlaystation":
            return IoLogoPlaystation;
        case "io5:IoLogoPwa":
            return IoLogoPwa;
        case "io5:IoLogoPython":
            return IoLogoPython;
        case "io5:IoLogoReact":
            return IoLogoReact;
        case "io5:IoLogoReddit":
            return IoLogoReddit;
        case "io5:IoLogoRss":
            return IoLogoRss;
        case "io5:IoLogoSass":
            return IoLogoSass;
        case "io5:IoLogoSkype":
            return IoLogoSkype;
        case "io5:IoLogoSlack":
            return IoLogoSlack;
        case "io5:IoLogoSnapchat":
            return IoLogoSnapchat;
        case "io5:IoLogoSoundcloud":
            return IoLogoSoundcloud;
        case "io5:IoLogoStackoverflow":
            return IoLogoStackoverflow;
        case "io5:IoLogoSteam":
            return IoLogoSteam;
        case "io5:IoLogoStencil":
            return IoLogoStencil;
        case "io5:IoLogoTableau":
            return IoLogoTableau;
        case "io5:IoLogoTiktok":
            return IoLogoTiktok;
        case "io5:IoLogoTumblr":
            return IoLogoTumblr;
        case "io5:IoLogoTux":
            return IoLogoTux;
        case "io5:IoLogoTwitch":
            return IoLogoTwitch;
        case "io5:IoLogoTwitter":
            return IoLogoTwitter;
        case "io5:IoLogoUsd":
            return IoLogoUsd;
        case "io5:IoLogoVenmo":
            return IoLogoVenmo;
        case "io5:IoLogoVercel":
            return IoLogoVercel;
        case "io5:IoLogoVimeo":
            return IoLogoVimeo;
        case "io5:IoLogoVk":
            return IoLogoVk;
        case "io5:IoLogoVue":
            return IoLogoVue;
        case "io5:IoLogoWebComponent":
            return IoLogoWebComponent;
        case "io5:IoLogoWechat":
            return IoLogoWechat;
        case "io5:IoLogoWhatsapp":
            return IoLogoWhatsapp;
        case "io5:IoLogoWindows":
            return IoLogoWindows;
        case "io5:IoLogoWordpress":
            return IoLogoWordpress;
        case "io5:IoLogoXbox":
            return IoLogoXbox;
        case "io5:IoLogoXing":
            return IoLogoXing;
        case "io5:IoLogoYahoo":
            return IoLogoYahoo;
        case "io5:IoLogoYen":
            return IoLogoYen;
        case "io5:IoLogoYoutube":
            return IoLogoYoutube;
        case "io5:IoMagnetOutline":
            return IoMagnetOutline;
        case "io5:IoMagnetSharp":
            return IoMagnetSharp;
        case "io5:IoMagnet":
            return IoMagnet;
        case "io5:IoMailOpenOutline":
            return IoMailOpenOutline;
        case "io5:IoMailOpenSharp":
            return IoMailOpenSharp;
        case "io5:IoMailOpen":
            return IoMailOpen;
        case "io5:IoMailOutline":
            return IoMailOutline;
        case "io5:IoMailSharp":
            return IoMailSharp;
        case "io5:IoMailUnreadOutline":
            return IoMailUnreadOutline;
        case "io5:IoMailUnreadSharp":
            return IoMailUnreadSharp;
        case "io5:IoMailUnread":
            return IoMailUnread;
        case "io5:IoMail":
            return IoMail;
        case "io5:IoMaleFemaleOutline":
            return IoMaleFemaleOutline;
        case "io5:IoMaleFemaleSharp":
            return IoMaleFemaleSharp;
        case "io5:IoMaleFemale":
            return IoMaleFemale;
        case "io5:IoMaleOutline":
            return IoMaleOutline;
        case "io5:IoMaleSharp":
            return IoMaleSharp;
        case "io5:IoMale":
            return IoMale;
        case "io5:IoManOutline":
            return IoManOutline;
        case "io5:IoManSharp":
            return IoManSharp;
        case "io5:IoMan":
            return IoMan;
        case "io5:IoMapOutline":
            return IoMapOutline;
        case "io5:IoMapSharp":
            return IoMapSharp;
        case "io5:IoMap":
            return IoMap;
        case "io5:IoMedalOutline":
            return IoMedalOutline;
        case "io5:IoMedalSharp":
            return IoMedalSharp;
        case "io5:IoMedal":
            return IoMedal;
        case "io5:IoMedicalOutline":
            return IoMedicalOutline;
        case "io5:IoMedicalSharp":
            return IoMedicalSharp;
        case "io5:IoMedical":
            return IoMedical;
        case "io5:IoMedkitOutline":
            return IoMedkitOutline;
        case "io5:IoMedkitSharp":
            return IoMedkitSharp;
        case "io5:IoMedkit":
            return IoMedkit;
        case "io5:IoMegaphoneOutline":
            return IoMegaphoneOutline;
        case "io5:IoMegaphoneSharp":
            return IoMegaphoneSharp;
        case "io5:IoMegaphone":
            return IoMegaphone;
        case "io5:IoMenuOutline":
            return IoMenuOutline;
        case "io5:IoMenuSharp":
            return IoMenuSharp;
        case "io5:IoMenu":
            return IoMenu;
        case "io5:IoMicCircleOutline":
            return IoMicCircleOutline;
        case "io5:IoMicCircleSharp":
            return IoMicCircleSharp;
        case "io5:IoMicCircle":
            return IoMicCircle;
        case "io5:IoMicOffCircleOutline":
            return IoMicOffCircleOutline;
        case "io5:IoMicOffCircleSharp":
            return IoMicOffCircleSharp;
        case "io5:IoMicOffCircle":
            return IoMicOffCircle;
        case "io5:IoMicOffOutline":
            return IoMicOffOutline;
        case "io5:IoMicOffSharp":
            return IoMicOffSharp;
        case "io5:IoMicOff":
            return IoMicOff;
        case "io5:IoMicOutline":
            return IoMicOutline;
        case "io5:IoMicSharp":
            return IoMicSharp;
        case "io5:IoMic":
            return IoMic;
        case "io5:IoMoonOutline":
            return IoMoonOutline;
        case "io5:IoMoonSharp":
            return IoMoonSharp;
        case "io5:IoMoon":
            return IoMoon;
        case "io5:IoMoveOutline":
            return IoMoveOutline;
        case "io5:IoMoveSharp":
            return IoMoveSharp;
        case "io5:IoMove":
            return IoMove;
        case "io5:IoMusicalNoteOutline":
            return IoMusicalNoteOutline;
        case "io5:IoMusicalNoteSharp":
            return IoMusicalNoteSharp;
        case "io5:IoMusicalNote":
            return IoMusicalNote;
        case "io5:IoMusicalNotesOutline":
            return IoMusicalNotesOutline;
        case "io5:IoMusicalNotesSharp":
            return IoMusicalNotesSharp;
        case "io5:IoMusicalNotes":
            return IoMusicalNotes;
        case "io5:IoNavigateCircleOutline":
            return IoNavigateCircleOutline;
        case "io5:IoNavigateCircleSharp":
            return IoNavigateCircleSharp;
        case "io5:IoNavigateCircle":
            return IoNavigateCircle;
        case "io5:IoNavigateOutline":
            return IoNavigateOutline;
        case "io5:IoNavigateSharp":
            return IoNavigateSharp;
        case "io5:IoNavigate":
            return IoNavigate;
        case "io5:IoNewspaperOutline":
            return IoNewspaperOutline;
        case "io5:IoNewspaperSharp":
            return IoNewspaperSharp;
        case "io5:IoNewspaper":
            return IoNewspaper;
        case "io5:IoNotificationsCircleOutline":
            return IoNotificationsCircleOutline;
        case "io5:IoNotificationsCircleSharp":
            return IoNotificationsCircleSharp;
        case "io5:IoNotificationsCircle":
            return IoNotificationsCircle;
        case "io5:IoNotificationsOffCircleOutline":
            return IoNotificationsOffCircleOutline;
        case "io5:IoNotificationsOffCircleSharp":
            return IoNotificationsOffCircleSharp;
        case "io5:IoNotificationsOffCircle":
            return IoNotificationsOffCircle;
        case "io5:IoNotificationsOffOutline":
            return IoNotificationsOffOutline;
        case "io5:IoNotificationsOffSharp":
            return IoNotificationsOffSharp;
        case "io5:IoNotificationsOff":
            return IoNotificationsOff;
        case "io5:IoNotificationsOutline":
            return IoNotificationsOutline;
        case "io5:IoNotificationsSharp":
            return IoNotificationsSharp;
        case "io5:IoNotifications":
            return IoNotifications;
        case "io5:IoNuclearOutline":
            return IoNuclearOutline;
        case "io5:IoNuclearSharp":
            return IoNuclearSharp;
        case "io5:IoNuclear":
            return IoNuclear;
        case "io5:IoNutritionOutline":
            return IoNutritionOutline;
        case "io5:IoNutritionSharp":
            return IoNutritionSharp;
        case "io5:IoNutrition":
            return IoNutrition;
        case "io5:IoOpenOutline":
            return IoOpenOutline;
        case "io5:IoOpenSharp":
            return IoOpenSharp;
        case "io5:IoOpen":
            return IoOpen;
        case "io5:IoOptionsOutline":
            return IoOptionsOutline;
        case "io5:IoOptionsSharp":
            return IoOptionsSharp;
        case "io5:IoOptions":
            return IoOptions;
        case "io5:IoPaperPlaneOutline":
            return IoPaperPlaneOutline;
        case "io5:IoPaperPlaneSharp":
            return IoPaperPlaneSharp;
        case "io5:IoPaperPlane":
            return IoPaperPlane;
        case "io5:IoPartlySunnyOutline":
            return IoPartlySunnyOutline;
        case "io5:IoPartlySunnySharp":
            return IoPartlySunnySharp;
        case "io5:IoPartlySunny":
            return IoPartlySunny;
        case "io5:IoPauseCircleOutline":
            return IoPauseCircleOutline;
        case "io5:IoPauseCircleSharp":
            return IoPauseCircleSharp;
        case "io5:IoPauseCircle":
            return IoPauseCircle;
        case "io5:IoPauseOutline":
            return IoPauseOutline;
        case "io5:IoPauseSharp":
            return IoPauseSharp;
        case "io5:IoPause":
            return IoPause;
        case "io5:IoPawOutline":
            return IoPawOutline;
        case "io5:IoPawSharp":
            return IoPawSharp;
        case "io5:IoPaw":
            return IoPaw;
        case "io5:IoPencilOutline":
            return IoPencilOutline;
        case "io5:IoPencilSharp":
            return IoPencilSharp;
        case "io5:IoPencil":
            return IoPencil;
        case "io5:IoPeopleCircleOutline":
            return IoPeopleCircleOutline;
        case "io5:IoPeopleCircleSharp":
            return IoPeopleCircleSharp;
        case "io5:IoPeopleCircle":
            return IoPeopleCircle;
        case "io5:IoPeopleOutline":
            return IoPeopleOutline;
        case "io5:IoPeopleSharp":
            return IoPeopleSharp;
        case "io5:IoPeople":
            return IoPeople;
        case "io5:IoPersonAddOutline":
            return IoPersonAddOutline;
        case "io5:IoPersonAddSharp":
            return IoPersonAddSharp;
        case "io5:IoPersonAdd":
            return IoPersonAdd;
        case "io5:IoPersonCircleOutline":
            return IoPersonCircleOutline;
        case "io5:IoPersonCircleSharp":
            return IoPersonCircleSharp;
        case "io5:IoPersonCircle":
            return IoPersonCircle;
        case "io5:IoPersonOutline":
            return IoPersonOutline;
        case "io5:IoPersonRemoveOutline":
            return IoPersonRemoveOutline;
        case "io5:IoPersonRemoveSharp":
            return IoPersonRemoveSharp;
        case "io5:IoPersonRemove":
            return IoPersonRemove;
        case "io5:IoPersonSharp":
            return IoPersonSharp;
        case "io5:IoPerson":
            return IoPerson;
        case "io5:IoPhoneLandscapeOutline":
            return IoPhoneLandscapeOutline;
        case "io5:IoPhoneLandscapeSharp":
            return IoPhoneLandscapeSharp;
        case "io5:IoPhoneLandscape":
            return IoPhoneLandscape;
        case "io5:IoPhonePortraitOutline":
            return IoPhonePortraitOutline;
        case "io5:IoPhonePortraitSharp":
            return IoPhonePortraitSharp;
        case "io5:IoPhonePortrait":
            return IoPhonePortrait;
        case "io5:IoPieChartOutline":
            return IoPieChartOutline;
        case "io5:IoPieChartSharp":
            return IoPieChartSharp;
        case "io5:IoPieChart":
            return IoPieChart;
        case "io5:IoPinOutline":
            return IoPinOutline;
        case "io5:IoPinSharp":
            return IoPinSharp;
        case "io5:IoPin":
            return IoPin;
        case "io5:IoPintOutline":
            return IoPintOutline;
        case "io5:IoPintSharp":
            return IoPintSharp;
        case "io5:IoPint":
            return IoPint;
        case "io5:IoPizzaOutline":
            return IoPizzaOutline;
        case "io5:IoPizzaSharp":
            return IoPizzaSharp;
        case "io5:IoPizza":
            return IoPizza;
        case "io5:IoPlanetOutline":
            return IoPlanetOutline;
        case "io5:IoPlanetSharp":
            return IoPlanetSharp;
        case "io5:IoPlanet":
            return IoPlanet;
        case "io5:IoPlayBackCircleOutline":
            return IoPlayBackCircleOutline;
        case "io5:IoPlayBackCircleSharp":
            return IoPlayBackCircleSharp;
        case "io5:IoPlayBackCircle":
            return IoPlayBackCircle;
        case "io5:IoPlayBackOutline":
            return IoPlayBackOutline;
        case "io5:IoPlayBackSharp":
            return IoPlayBackSharp;
        case "io5:IoPlayBack":
            return IoPlayBack;
        case "io5:IoPlayCircleOutline":
            return IoPlayCircleOutline;
        case "io5:IoPlayCircleSharp":
            return IoPlayCircleSharp;
        case "io5:IoPlayCircle":
            return IoPlayCircle;
        case "io5:IoPlayForwardCircleOutline":
            return IoPlayForwardCircleOutline;
        case "io5:IoPlayForwardCircleSharp":
            return IoPlayForwardCircleSharp;
        case "io5:IoPlayForwardCircle":
            return IoPlayForwardCircle;
        case "io5:IoPlayForwardOutline":
            return IoPlayForwardOutline;
        case "io5:IoPlayForwardSharp":
            return IoPlayForwardSharp;
        case "io5:IoPlayForward":
            return IoPlayForward;
        case "io5:IoPlayOutline":
            return IoPlayOutline;
        case "io5:IoPlaySharp":
            return IoPlaySharp;
        case "io5:IoPlaySkipBackCircleOutline":
            return IoPlaySkipBackCircleOutline;
        case "io5:IoPlaySkipBackCircleSharp":
            return IoPlaySkipBackCircleSharp;
        case "io5:IoPlaySkipBackCircle":
            return IoPlaySkipBackCircle;
        case "io5:IoPlaySkipBackOutline":
            return IoPlaySkipBackOutline;
        case "io5:IoPlaySkipBackSharp":
            return IoPlaySkipBackSharp;
        case "io5:IoPlaySkipBack":
            return IoPlaySkipBack;
        case "io5:IoPlaySkipForwardCircleOutline":
            return IoPlaySkipForwardCircleOutline;
        case "io5:IoPlaySkipForwardCircleSharp":
            return IoPlaySkipForwardCircleSharp;
        case "io5:IoPlaySkipForwardCircle":
            return IoPlaySkipForwardCircle;
        case "io5:IoPlaySkipForwardOutline":
            return IoPlaySkipForwardOutline;
        case "io5:IoPlaySkipForwardSharp":
            return IoPlaySkipForwardSharp;
        case "io5:IoPlaySkipForward":
            return IoPlaySkipForward;
        case "io5:IoPlay":
            return IoPlay;
        case "io5:IoPodiumOutline":
            return IoPodiumOutline;
        case "io5:IoPodiumSharp":
            return IoPodiumSharp;
        case "io5:IoPodium":
            return IoPodium;
        case "io5:IoPowerOutline":
            return IoPowerOutline;
        case "io5:IoPowerSharp":
            return IoPowerSharp;
        case "io5:IoPower":
            return IoPower;
        case "io5:IoPricetagOutline":
            return IoPricetagOutline;
        case "io5:IoPricetagSharp":
            return IoPricetagSharp;
        case "io5:IoPricetag":
            return IoPricetag;
        case "io5:IoPricetagsOutline":
            return IoPricetagsOutline;
    }
}