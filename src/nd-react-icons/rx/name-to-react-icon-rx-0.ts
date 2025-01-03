import type {IconType} from "react-icons";

import {
    RxAccessibility,
    RxActivityLog,
    RxAlignBaseline,
    RxAlignBottom,
    RxAlignCenterHorizontally,
    RxAlignCenterVertically,
    RxAlignLeft,
    RxAlignRight,
    RxAlignTop,
    RxAllSides,
    RxAngle,
    RxArchive,
    RxArrowBottomLeft,
    RxArrowBottomRight,
    RxArrowDown,
    RxArrowLeft,
    RxArrowRight,
    RxArrowTopLeft,
    RxArrowTopRight,
    RxArrowUp,
    RxAspectRatio,
    RxAvatar,
    RxBackpack,
    RxBadge,
    RxBarChart,
    RxBell,
    RxBlendingMode,
    RxBookmarkFilled,
    RxBookmark,
    RxBorderAll,
    RxBorderBottom,
    RxBorderDashed,
    RxBorderDotted,
    RxBorderLeft,
    RxBorderNone,
    RxBorderRight,
    RxBorderSolid,
    RxBorderSplit,
    RxBorderStyle,
    RxBorderTop,
    RxBorderWidth,
    RxBoxModel,
    RxBox,
    RxButton,
    RxCalendar,
    RxCamera,
    RxCardStackMinus,
    RxCardStackPlus,
    RxCardStack,
    RxCaretDown,
    RxCaretLeft,
    RxCaretRight,
    RxCaretSort,
    RxCaretUp,
    RxChatBubble,
    RxCheckCircled,
    RxCheck,
    RxCheckbox,
    RxChevronDown,
    RxChevronLeft,
    RxChevronRight,
    RxChevronUp,
    RxCircleBackslash,
    RxCircle,
    RxClipboardCopy,
    RxClipboard,
    RxClock,
    RxCode,
    RxCodesandboxLogo,
    RxColorWheel,
    RxColumnSpacing,
    RxColumns,
    RxCommit,
    RxComponent1,
    RxComponent2,
    RxComponentBoolean,
    RxComponentInstance,
    RxComponentNone,
    RxComponentPlaceholder,
    RxContainer,
    RxCookie,
    RxCopy,
    RxCornerBottomLeft,
    RxCornerBottomRight,
    RxCornerTopLeft,
    RxCornerTopRight,
    RxCorners,
    RxCountdownTimer,
    RxCounterClockwiseClock,
    RxCrop,
    RxCross1,
    RxCross2,
    RxCrossCircled,
    RxCrosshair1,
    RxCrosshair2,
    RxCrumpledPaper,
    RxCube,
    RxCursorArrow,
    RxCursorText,
    RxDash,
    RxDashboard,
    RxDesktop,
    RxDimensions,
    RxDisc,
    RxDiscordLogo,
    RxDividerHorizontal,
    RxDividerVertical,
    RxDotFilled,
    RxDot,
    RxDotsHorizontal,
    RxDotsVertical,
    RxDoubleArrowDown,
    RxDoubleArrowLeft,
    RxDoubleArrowRight,
    RxDoubleArrowUp,
    RxDownload,
    RxDragHandleDots1,
    RxDragHandleDots2,
    RxDragHandleHorizontal,
    RxDragHandleVertical,
    RxDrawingPinFilled,
    RxDrawingPin,
    RxDropdownMenu,
    RxEnterFullScreen,
    RxEnter,
    RxEnvelopeClosed,
    RxEnvelopeOpen,
    RxEraser,
    RxExclamationTriangle,
    RxExitFullScreen,
    RxExit,
    RxExternalLink,
    RxEyeClosed,
    RxEyeNone,
    RxEyeOpen,
    RxFace,
    RxFigmaLogo,
    RxFileMinus,
    RxFilePlus,
    RxFileText,
    RxFile,
    RxFontBold,
    RxFontFamily,
    RxFontItalic,
    RxFontRoman,
    RxFontSize,
    RxFontStyle,
    RxFrame,
    RxFramerLogo,
    RxGear,
    RxGithubLogo,
    RxGlobe,
    RxGrid,
    RxGroup,
    RxHalf1,
    RxHalf2,
    RxHamburgerMenu,
    RxHand,
    RxHeading,
    RxHeartFilled,
    RxHeart,
    RxHeight,
    RxHobbyKnife,
    RxHome,
    RxIconjarLogo,
    RxIdCard,
    RxImage,
    RxInfoCircled,
    RxInput,
    RxInstagramLogo,
    RxKeyboard,
    RxLapTimer,
    RxLaptop,
    RxLayers,
    RxLayout,
    RxLetterCaseCapitalize,
    RxLetterCaseLowercase,
    RxLetterCaseToggle,
    RxLetterCaseUppercase,
    RxLetterSpacing,
    RxLightningBolt,
    RxLineHeight,
    RxLink1,
    RxLink2,
    RxLinkBreak1,
    RxLinkBreak2,
    RxLinkNone1,
    RxLinkNone2,
    RxLinkedinLogo,
    RxListBullet,
    RxLockClosed,
    RxLockOpen1,
    RxLockOpen2,
    RxLoop,
    RxMagicWand,
    RxMagnifyingGlass,
    RxMargin,
    RxMaskOff,
    RxMaskOn,
    RxMinusCircled,
    RxMinus,
    RxMix,
    RxMixerHorizontal,
    RxMixerVertical,
    RxMobile,
    RxModulzLogo,
    RxMoon,
    RxMove,
    RxNotionLogo,
    RxOpacity,
    RxOpenInNewWindow,
    RxOverline,
    RxPadding,
    RxPaperPlane,
    RxPause,
    RxPencil1,
    RxPencil2,
    RxPerson,
    RxPieChart,
    RxPilcrow,
    RxPinBottom,
    RxPinLeft,
    RxPinRight,
    RxPinTop,
    RxPlay,
    RxPlusCircled,
    RxPlus,
    RxQuestionMarkCircled,
    RxQuestionMark,
    RxQuote,
    RxRadiobutton,
    RxReader,
    RxReload,
    RxReset,
    RxResume,
    RxRocket,
    RxRotateCounterClockwise,
    RxRowSpacing,
    RxRows,
    RxRulerHorizontal,
    RxRulerSquare,
    RxScissors,
    RxSection,
    RxSewingPinFilled,
    RxSewingPin,
    RxShadowInner,
    RxShadowNone,
    RxShadowOuter,
    RxShadow,
    RxShare1,
    RxShare2,
    RxShuffle,
    RxSize,
    RxSketchLogo,
    RxSlash,
    RxSlider,
    RxSpaceBetweenHorizontally,
    RxSpaceBetweenVertically,
    RxSpaceEvenlyHorizontally,
    RxSpaceEvenlyVertically,
    RxSpeakerLoud,
    RxSpeakerModerate,
    RxSpeakerOff,
    RxSpeakerQuiet,
    RxSquare,
    RxStack,
    RxStarFilled,
    RxStar,
    RxStitchesLogo,
    RxStop,
    RxStopwatch,
    RxStretchHorizontally,
    RxStretchVertically,
    RxStrikethrough,
    RxSun,
    RxSwitch,
    RxSymbol,
    RxTable,
    RxTarget,
    RxTextAlignBottom,
    RxTextAlignCenter,
    RxTextAlignJustify,
    RxTextAlignLeft,
    RxTextAlignMiddle,
    RxTextAlignRight,
    RxTextAlignTop,
    RxTextNone,
    RxText,
    RxThickArrowDown,
    RxThickArrowLeft,
    RxThickArrowRight,
    RxThickArrowUp,
    RxTimer,
    RxTokens,
    RxTrackNext,
    RxTrackPrevious,
    RxTransform,
    RxTransparencyGrid,
    RxTrash,
    RxTriangleDown,
    RxTriangleLeft,
    RxTriangleRight,
    RxTriangleUp,
    RxTwitterLogo,
    RxUnderline,
    RxUpdate,
    RxUpload,
    RxValueNone,
    RxValue,
    RxVercelLogo,
    RxVideo,
    RxViewGrid,
    RxViewHorizontal,
    RxViewNone,
    RxViewVertical,
    RxWidth,
    RxZoomIn,
    RxZoomOut,
} from "react-icons/rx"

export function nameToReactIcon_rx_0(iconName: string): IconType | undefined {

    switch(iconName) {
        case "rx:RxAccessibility":
            return RxAccessibility;
        case "rx:RxActivityLog":
            return RxActivityLog;
        case "rx:RxAlignBaseline":
            return RxAlignBaseline;
        case "rx:RxAlignBottom":
            return RxAlignBottom;
        case "rx:RxAlignCenterHorizontally":
            return RxAlignCenterHorizontally;
        case "rx:RxAlignCenterVertically":
            return RxAlignCenterVertically;
        case "rx:RxAlignLeft":
            return RxAlignLeft;
        case "rx:RxAlignRight":
            return RxAlignRight;
        case "rx:RxAlignTop":
            return RxAlignTop;
        case "rx:RxAllSides":
            return RxAllSides;
        case "rx:RxAngle":
            return RxAngle;
        case "rx:RxArchive":
            return RxArchive;
        case "rx:RxArrowBottomLeft":
            return RxArrowBottomLeft;
        case "rx:RxArrowBottomRight":
            return RxArrowBottomRight;
        case "rx:RxArrowDown":
            return RxArrowDown;
        case "rx:RxArrowLeft":
            return RxArrowLeft;
        case "rx:RxArrowRight":
            return RxArrowRight;
        case "rx:RxArrowTopLeft":
            return RxArrowTopLeft;
        case "rx:RxArrowTopRight":
            return RxArrowTopRight;
        case "rx:RxArrowUp":
            return RxArrowUp;
        case "rx:RxAspectRatio":
            return RxAspectRatio;
        case "rx:RxAvatar":
            return RxAvatar;
        case "rx:RxBackpack":
            return RxBackpack;
        case "rx:RxBadge":
            return RxBadge;
        case "rx:RxBarChart":
            return RxBarChart;
        case "rx:RxBell":
            return RxBell;
        case "rx:RxBlendingMode":
            return RxBlendingMode;
        case "rx:RxBookmarkFilled":
            return RxBookmarkFilled;
        case "rx:RxBookmark":
            return RxBookmark;
        case "rx:RxBorderAll":
            return RxBorderAll;
        case "rx:RxBorderBottom":
            return RxBorderBottom;
        case "rx:RxBorderDashed":
            return RxBorderDashed;
        case "rx:RxBorderDotted":
            return RxBorderDotted;
        case "rx:RxBorderLeft":
            return RxBorderLeft;
        case "rx:RxBorderNone":
            return RxBorderNone;
        case "rx:RxBorderRight":
            return RxBorderRight;
        case "rx:RxBorderSolid":
            return RxBorderSolid;
        case "rx:RxBorderSplit":
            return RxBorderSplit;
        case "rx:RxBorderStyle":
            return RxBorderStyle;
        case "rx:RxBorderTop":
            return RxBorderTop;
        case "rx:RxBorderWidth":
            return RxBorderWidth;
        case "rx:RxBoxModel":
            return RxBoxModel;
        case "rx:RxBox":
            return RxBox;
        case "rx:RxButton":
            return RxButton;
        case "rx:RxCalendar":
            return RxCalendar;
        case "rx:RxCamera":
            return RxCamera;
        case "rx:RxCardStackMinus":
            return RxCardStackMinus;
        case "rx:RxCardStackPlus":
            return RxCardStackPlus;
        case "rx:RxCardStack":
            return RxCardStack;
        case "rx:RxCaretDown":
            return RxCaretDown;
        case "rx:RxCaretLeft":
            return RxCaretLeft;
        case "rx:RxCaretRight":
            return RxCaretRight;
        case "rx:RxCaretSort":
            return RxCaretSort;
        case "rx:RxCaretUp":
            return RxCaretUp;
        case "rx:RxChatBubble":
            return RxChatBubble;
        case "rx:RxCheckCircled":
            return RxCheckCircled;
        case "rx:RxCheck":
            return RxCheck;
        case "rx:RxCheckbox":
            return RxCheckbox;
        case "rx:RxChevronDown":
            return RxChevronDown;
        case "rx:RxChevronLeft":
            return RxChevronLeft;
        case "rx:RxChevronRight":
            return RxChevronRight;
        case "rx:RxChevronUp":
            return RxChevronUp;
        case "rx:RxCircleBackslash":
            return RxCircleBackslash;
        case "rx:RxCircle":
            return RxCircle;
        case "rx:RxClipboardCopy":
            return RxClipboardCopy;
        case "rx:RxClipboard":
            return RxClipboard;
        case "rx:RxClock":
            return RxClock;
        case "rx:RxCode":
            return RxCode;
        case "rx:RxCodesandboxLogo":
            return RxCodesandboxLogo;
        case "rx:RxColorWheel":
            return RxColorWheel;
        case "rx:RxColumnSpacing":
            return RxColumnSpacing;
        case "rx:RxColumns":
            return RxColumns;
        case "rx:RxCommit":
            return RxCommit;
        case "rx:RxComponent1":
            return RxComponent1;
        case "rx:RxComponent2":
            return RxComponent2;
        case "rx:RxComponentBoolean":
            return RxComponentBoolean;
        case "rx:RxComponentInstance":
            return RxComponentInstance;
        case "rx:RxComponentNone":
            return RxComponentNone;
        case "rx:RxComponentPlaceholder":
            return RxComponentPlaceholder;
        case "rx:RxContainer":
            return RxContainer;
        case "rx:RxCookie":
            return RxCookie;
        case "rx:RxCopy":
            return RxCopy;
        case "rx:RxCornerBottomLeft":
            return RxCornerBottomLeft;
        case "rx:RxCornerBottomRight":
            return RxCornerBottomRight;
        case "rx:RxCornerTopLeft":
            return RxCornerTopLeft;
        case "rx:RxCornerTopRight":
            return RxCornerTopRight;
        case "rx:RxCorners":
            return RxCorners;
        case "rx:RxCountdownTimer":
            return RxCountdownTimer;
        case "rx:RxCounterClockwiseClock":
            return RxCounterClockwiseClock;
        case "rx:RxCrop":
            return RxCrop;
        case "rx:RxCross1":
            return RxCross1;
        case "rx:RxCross2":
            return RxCross2;
        case "rx:RxCrossCircled":
            return RxCrossCircled;
        case "rx:RxCrosshair1":
            return RxCrosshair1;
        case "rx:RxCrosshair2":
            return RxCrosshair2;
        case "rx:RxCrumpledPaper":
            return RxCrumpledPaper;
        case "rx:RxCube":
            return RxCube;
        case "rx:RxCursorArrow":
            return RxCursorArrow;
        case "rx:RxCursorText":
            return RxCursorText;
        case "rx:RxDash":
            return RxDash;
        case "rx:RxDashboard":
            return RxDashboard;
        case "rx:RxDesktop":
            return RxDesktop;
        case "rx:RxDimensions":
            return RxDimensions;
        case "rx:RxDisc":
            return RxDisc;
        case "rx:RxDiscordLogo":
            return RxDiscordLogo;
        case "rx:RxDividerHorizontal":
            return RxDividerHorizontal;
        case "rx:RxDividerVertical":
            return RxDividerVertical;
        case "rx:RxDotFilled":
            return RxDotFilled;
        case "rx:RxDot":
            return RxDot;
        case "rx:RxDotsHorizontal":
            return RxDotsHorizontal;
        case "rx:RxDotsVertical":
            return RxDotsVertical;
        case "rx:RxDoubleArrowDown":
            return RxDoubleArrowDown;
        case "rx:RxDoubleArrowLeft":
            return RxDoubleArrowLeft;
        case "rx:RxDoubleArrowRight":
            return RxDoubleArrowRight;
        case "rx:RxDoubleArrowUp":
            return RxDoubleArrowUp;
        case "rx:RxDownload":
            return RxDownload;
        case "rx:RxDragHandleDots1":
            return RxDragHandleDots1;
        case "rx:RxDragHandleDots2":
            return RxDragHandleDots2;
        case "rx:RxDragHandleHorizontal":
            return RxDragHandleHorizontal;
        case "rx:RxDragHandleVertical":
            return RxDragHandleVertical;
        case "rx:RxDrawingPinFilled":
            return RxDrawingPinFilled;
        case "rx:RxDrawingPin":
            return RxDrawingPin;
        case "rx:RxDropdownMenu":
            return RxDropdownMenu;
        case "rx:RxEnterFullScreen":
            return RxEnterFullScreen;
        case "rx:RxEnter":
            return RxEnter;
        case "rx:RxEnvelopeClosed":
            return RxEnvelopeClosed;
        case "rx:RxEnvelopeOpen":
            return RxEnvelopeOpen;
        case "rx:RxEraser":
            return RxEraser;
        case "rx:RxExclamationTriangle":
            return RxExclamationTriangle;
        case "rx:RxExitFullScreen":
            return RxExitFullScreen;
        case "rx:RxExit":
            return RxExit;
        case "rx:RxExternalLink":
            return RxExternalLink;
        case "rx:RxEyeClosed":
            return RxEyeClosed;
        case "rx:RxEyeNone":
            return RxEyeNone;
        case "rx:RxEyeOpen":
            return RxEyeOpen;
        case "rx:RxFace":
            return RxFace;
        case "rx:RxFigmaLogo":
            return RxFigmaLogo;
        case "rx:RxFileMinus":
            return RxFileMinus;
        case "rx:RxFilePlus":
            return RxFilePlus;
        case "rx:RxFileText":
            return RxFileText;
        case "rx:RxFile":
            return RxFile;
        case "rx:RxFontBold":
            return RxFontBold;
        case "rx:RxFontFamily":
            return RxFontFamily;
        case "rx:RxFontItalic":
            return RxFontItalic;
        case "rx:RxFontRoman":
            return RxFontRoman;
        case "rx:RxFontSize":
            return RxFontSize;
        case "rx:RxFontStyle":
            return RxFontStyle;
        case "rx:RxFrame":
            return RxFrame;
        case "rx:RxFramerLogo":
            return RxFramerLogo;
        case "rx:RxGear":
            return RxGear;
        case "rx:RxGithubLogo":
            return RxGithubLogo;
        case "rx:RxGlobe":
            return RxGlobe;
        case "rx:RxGrid":
            return RxGrid;
        case "rx:RxGroup":
            return RxGroup;
        case "rx:RxHalf1":
            return RxHalf1;
        case "rx:RxHalf2":
            return RxHalf2;
        case "rx:RxHamburgerMenu":
            return RxHamburgerMenu;
        case "rx:RxHand":
            return RxHand;
        case "rx:RxHeading":
            return RxHeading;
        case "rx:RxHeartFilled":
            return RxHeartFilled;
        case "rx:RxHeart":
            return RxHeart;
        case "rx:RxHeight":
            return RxHeight;
        case "rx:RxHobbyKnife":
            return RxHobbyKnife;
        case "rx:RxHome":
            return RxHome;
        case "rx:RxIconjarLogo":
            return RxIconjarLogo;
        case "rx:RxIdCard":
            return RxIdCard;
        case "rx:RxImage":
            return RxImage;
        case "rx:RxInfoCircled":
            return RxInfoCircled;
        case "rx:RxInput":
            return RxInput;
        case "rx:RxInstagramLogo":
            return RxInstagramLogo;
        case "rx:RxKeyboard":
            return RxKeyboard;
        case "rx:RxLapTimer":
            return RxLapTimer;
        case "rx:RxLaptop":
            return RxLaptop;
        case "rx:RxLayers":
            return RxLayers;
        case "rx:RxLayout":
            return RxLayout;
        case "rx:RxLetterCaseCapitalize":
            return RxLetterCaseCapitalize;
        case "rx:RxLetterCaseLowercase":
            return RxLetterCaseLowercase;
        case "rx:RxLetterCaseToggle":
            return RxLetterCaseToggle;
        case "rx:RxLetterCaseUppercase":
            return RxLetterCaseUppercase;
        case "rx:RxLetterSpacing":
            return RxLetterSpacing;
        case "rx:RxLightningBolt":
            return RxLightningBolt;
        case "rx:RxLineHeight":
            return RxLineHeight;
        case "rx:RxLink1":
            return RxLink1;
        case "rx:RxLink2":
            return RxLink2;
        case "rx:RxLinkBreak1":
            return RxLinkBreak1;
        case "rx:RxLinkBreak2":
            return RxLinkBreak2;
        case "rx:RxLinkNone1":
            return RxLinkNone1;
        case "rx:RxLinkNone2":
            return RxLinkNone2;
        case "rx:RxLinkedinLogo":
            return RxLinkedinLogo;
        case "rx:RxListBullet":
            return RxListBullet;
        case "rx:RxLockClosed":
            return RxLockClosed;
        case "rx:RxLockOpen1":
            return RxLockOpen1;
        case "rx:RxLockOpen2":
            return RxLockOpen2;
        case "rx:RxLoop":
            return RxLoop;
        case "rx:RxMagicWand":
            return RxMagicWand;
        case "rx:RxMagnifyingGlass":
            return RxMagnifyingGlass;
        case "rx:RxMargin":
            return RxMargin;
        case "rx:RxMaskOff":
            return RxMaskOff;
        case "rx:RxMaskOn":
            return RxMaskOn;
        case "rx:RxMinusCircled":
            return RxMinusCircled;
        case "rx:RxMinus":
            return RxMinus;
        case "rx:RxMix":
            return RxMix;
        case "rx:RxMixerHorizontal":
            return RxMixerHorizontal;
        case "rx:RxMixerVertical":
            return RxMixerVertical;
        case "rx:RxMobile":
            return RxMobile;
        case "rx:RxModulzLogo":
            return RxModulzLogo;
        case "rx:RxMoon":
            return RxMoon;
        case "rx:RxMove":
            return RxMove;
        case "rx:RxNotionLogo":
            return RxNotionLogo;
        case "rx:RxOpacity":
            return RxOpacity;
        case "rx:RxOpenInNewWindow":
            return RxOpenInNewWindow;
        case "rx:RxOverline":
            return RxOverline;
        case "rx:RxPadding":
            return RxPadding;
        case "rx:RxPaperPlane":
            return RxPaperPlane;
        case "rx:RxPause":
            return RxPause;
        case "rx:RxPencil1":
            return RxPencil1;
        case "rx:RxPencil2":
            return RxPencil2;
        case "rx:RxPerson":
            return RxPerson;
        case "rx:RxPieChart":
            return RxPieChart;
        case "rx:RxPilcrow":
            return RxPilcrow;
        case "rx:RxPinBottom":
            return RxPinBottom;
        case "rx:RxPinLeft":
            return RxPinLeft;
        case "rx:RxPinRight":
            return RxPinRight;
        case "rx:RxPinTop":
            return RxPinTop;
        case "rx:RxPlay":
            return RxPlay;
        case "rx:RxPlusCircled":
            return RxPlusCircled;
        case "rx:RxPlus":
            return RxPlus;
        case "rx:RxQuestionMarkCircled":
            return RxQuestionMarkCircled;
        case "rx:RxQuestionMark":
            return RxQuestionMark;
        case "rx:RxQuote":
            return RxQuote;
        case "rx:RxRadiobutton":
            return RxRadiobutton;
        case "rx:RxReader":
            return RxReader;
        case "rx:RxReload":
            return RxReload;
        case "rx:RxReset":
            return RxReset;
        case "rx:RxResume":
            return RxResume;
        case "rx:RxRocket":
            return RxRocket;
        case "rx:RxRotateCounterClockwise":
            return RxRotateCounterClockwise;
        case "rx:RxRowSpacing":
            return RxRowSpacing;
        case "rx:RxRows":
            return RxRows;
        case "rx:RxRulerHorizontal":
            return RxRulerHorizontal;
        case "rx:RxRulerSquare":
            return RxRulerSquare;
        case "rx:RxScissors":
            return RxScissors;
        case "rx:RxSection":
            return RxSection;
        case "rx:RxSewingPinFilled":
            return RxSewingPinFilled;
        case "rx:RxSewingPin":
            return RxSewingPin;
        case "rx:RxShadowInner":
            return RxShadowInner;
        case "rx:RxShadowNone":
            return RxShadowNone;
        case "rx:RxShadowOuter":
            return RxShadowOuter;
        case "rx:RxShadow":
            return RxShadow;
        case "rx:RxShare1":
            return RxShare1;
        case "rx:RxShare2":
            return RxShare2;
        case "rx:RxShuffle":
            return RxShuffle;
        case "rx:RxSize":
            return RxSize;
        case "rx:RxSketchLogo":
            return RxSketchLogo;
        case "rx:RxSlash":
            return RxSlash;
        case "rx:RxSlider":
            return RxSlider;
        case "rx:RxSpaceBetweenHorizontally":
            return RxSpaceBetweenHorizontally;
        case "rx:RxSpaceBetweenVertically":
            return RxSpaceBetweenVertically;
        case "rx:RxSpaceEvenlyHorizontally":
            return RxSpaceEvenlyHorizontally;
        case "rx:RxSpaceEvenlyVertically":
            return RxSpaceEvenlyVertically;
        case "rx:RxSpeakerLoud":
            return RxSpeakerLoud;
        case "rx:RxSpeakerModerate":
            return RxSpeakerModerate;
        case "rx:RxSpeakerOff":
            return RxSpeakerOff;
        case "rx:RxSpeakerQuiet":
            return RxSpeakerQuiet;
        case "rx:RxSquare":
            return RxSquare;
        case "rx:RxStack":
            return RxStack;
        case "rx:RxStarFilled":
            return RxStarFilled;
        case "rx:RxStar":
            return RxStar;
        case "rx:RxStitchesLogo":
            return RxStitchesLogo;
        case "rx:RxStop":
            return RxStop;
        case "rx:RxStopwatch":
            return RxStopwatch;
        case "rx:RxStretchHorizontally":
            return RxStretchHorizontally;
        case "rx:RxStretchVertically":
            return RxStretchVertically;
        case "rx:RxStrikethrough":
            return RxStrikethrough;
        case "rx:RxSun":
            return RxSun;
        case "rx:RxSwitch":
            return RxSwitch;
        case "rx:RxSymbol":
            return RxSymbol;
        case "rx:RxTable":
            return RxTable;
        case "rx:RxTarget":
            return RxTarget;
        case "rx:RxTextAlignBottom":
            return RxTextAlignBottom;
        case "rx:RxTextAlignCenter":
            return RxTextAlignCenter;
        case "rx:RxTextAlignJustify":
            return RxTextAlignJustify;
        case "rx:RxTextAlignLeft":
            return RxTextAlignLeft;
        case "rx:RxTextAlignMiddle":
            return RxTextAlignMiddle;
        case "rx:RxTextAlignRight":
            return RxTextAlignRight;
        case "rx:RxTextAlignTop":
            return RxTextAlignTop;
        case "rx:RxTextNone":
            return RxTextNone;
        case "rx:RxText":
            return RxText;
        case "rx:RxThickArrowDown":
            return RxThickArrowDown;
        case "rx:RxThickArrowLeft":
            return RxThickArrowLeft;
        case "rx:RxThickArrowRight":
            return RxThickArrowRight;
        case "rx:RxThickArrowUp":
            return RxThickArrowUp;
        case "rx:RxTimer":
            return RxTimer;
        case "rx:RxTokens":
            return RxTokens;
        case "rx:RxTrackNext":
            return RxTrackNext;
        case "rx:RxTrackPrevious":
            return RxTrackPrevious;
        case "rx:RxTransform":
            return RxTransform;
        case "rx:RxTransparencyGrid":
            return RxTransparencyGrid;
        case "rx:RxTrash":
            return RxTrash;
        case "rx:RxTriangleDown":
            return RxTriangleDown;
        case "rx:RxTriangleLeft":
            return RxTriangleLeft;
        case "rx:RxTriangleRight":
            return RxTriangleRight;
        case "rx:RxTriangleUp":
            return RxTriangleUp;
        case "rx:RxTwitterLogo":
            return RxTwitterLogo;
        case "rx:RxUnderline":
            return RxUnderline;
        case "rx:RxUpdate":
            return RxUpdate;
        case "rx:RxUpload":
            return RxUpload;
        case "rx:RxValueNone":
            return RxValueNone;
        case "rx:RxValue":
            return RxValue;
        case "rx:RxVercelLogo":
            return RxVercelLogo;
        case "rx:RxVideo":
            return RxVideo;
        case "rx:RxViewGrid":
            return RxViewGrid;
        case "rx:RxViewHorizontal":
            return RxViewHorizontal;
        case "rx:RxViewNone":
            return RxViewNone;
        case "rx:RxViewVertical":
            return RxViewVertical;
        case "rx:RxWidth":
            return RxWidth;
        case "rx:RxZoomIn":
            return RxZoomIn;
        case "rx:RxZoomOut":
            return RxZoomOut;
    }
}
