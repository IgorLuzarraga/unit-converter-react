// Unit Conversion Types
const KMS_TO_MILES = "KMS_TO_MILES"
const MILES_TO_KMS = "MILES_TO_KMS"
const METERS_TO_FEET = "METERS_TO_FEET"
const FEET_TO_METERS = "FEET_TO_METERS"
const CMS_TO_INCHES = "CMS_TO_INCHES"
const INCHES_TO_CMS = "INCHES_TO_CMS"
const ERROR_NO_CONVERSION_TYPE = "ERROR_NO_CONVERSION_TYPE"
const KMS_UNIT_TYPE = "kms"
const MILES_UNIT_TYPE = "miles"
const METERS_UNIT_TYPE = "meters"
const FEET_UNIT_TYPE = "feet"
const CMS_UNIT_TYPE = "cms"
const INCHES_UNIT_TYPE = "inches"

const fromStrToUnitConversionType = (str) => {
    switch (str) {
        case "Kms -> Miles":
            return KMS_TO_MILES
        case  "Miles -> Kms":
            return MILES_TO_KMS
        case "Feet -> Meters":
            return FEET_TO_METERS
        case "Meters -> Feet":
            return METERS_TO_FEET
        case "Centimeters -> Inches":
            return CMS_TO_INCHES
        case "Inches -> Centimeters":
            return INCHES_TO_CMS
        default:
            return ERROR_NO_CONVERSION_TYPE
    }
}

const fromUnitConversionTypeToStr = (unit) => {
    switch (unit) {
        case KMS_TO_MILES:
            return "Kms -> Miles"
        case MILES_TO_KMS:
            return "Miles -> Kms"
        case FEET_TO_METERS:
            return "Feet -> Meters"
        case METERS_TO_FEET:
            return "Meters -> Feet"  
        case CMS_TO_INCHES:
            return "Centimeters -> Inches" 
        case INCHES_TO_CMS:
            return "Inches -> Centimeters" 
        default:
            return "ERROR_NO_CONVERSION_TYPE"
    }
}

export {
    KMS_TO_MILES,
    MILES_TO_KMS,
    METERS_TO_FEET,
    FEET_TO_METERS,
    CMS_TO_INCHES,
    INCHES_TO_CMS,
    KMS_UNIT_TYPE,
    MILES_UNIT_TYPE,
    METERS_UNIT_TYPE,
    FEET_UNIT_TYPE,
    CMS_UNIT_TYPE,
    INCHES_UNIT_TYPE,
    fromStrToUnitConversionType,
    fromUnitConversionTypeToStr
}