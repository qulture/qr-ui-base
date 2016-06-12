# Qulture.Rocks base components and styles

1. [Helpers](#helpers):
  1. [Company Colors](#company-colors)
  2. [Semaphore Colors](#semaphore-colors)
  3. [Name formatter](#name-formatter)
2. [CSS Helpers](#css-helpers):
  1. [General](#general-css-helpers)
  2. [Typography](#typography-css-helpers)
  2. [Sizes](#sizes-css-helpers)
  3. [Colors](#colors-css-helpers)
  4. [Borders](#borders-css-helpers)
3. [Components](#components):
  1. [General](#general-components):
    1. [ArrowBetweenUsers](#arrowbetweenusers)
    2. [Avatar](#Avatar)
    3. [AvatarInfo](#AvatarInfo)
    4. [AvatarGrid](#AvatarGrid)
    5. [Badge](#Badge)
    6. [DatePicker](#DatePicker)
    7. [Growl](#Growl)
    8. [HoverIconLink](#HoverIconLink)
    9. [Icon](#Icon)
    10. [IconDropdown](#IconDropdown)
    11. [IconLink](#IconLink)
    12. [Link](#Link)
    13. [Loading](#Loading)
    14. [Markdown](#Markdown)
    15. [PersonaAvatar](#PersonaAvatar)
    16. [Quote](#Quote)
    17. [Separator](#Separator)
    18. [Text](#Text)
    19. [Toggle](#Toggle)
    20. [Tooltip](#Tooltip)
    21. [VerticalSlider](#VerticalSlider)
  2. [Boxed](#Boxed)
  3. [Button](#Buttons)
  4. [Charts](#Charts)
  5. [Containers](#Containers)
  6. [Dropdowns](#Dropdowns)
  7. [Forms](#Forms)
  8. [Grids](#Grids)
  9. [Modals](#Modals)
  10. [Panels](#Panels)
  11. [Sidebars](#Sidebars)
  12. [Tabs](#Tabs)
  13. [Tables](#Tables)
  14. [Timelines](#Timelines)
  15. [Wizards](#Wizards)


-----------------------------

# Helpers

## Company Colors

### ColorHelpers.getMainColor()
`import { ColorHelpers } from 'meteor/qulture:qr-ui-base/helpers';`

Returns the main color hexadecimal code, depending on the user and company logged in

##### Return:
 - (String) Main color

### ColorHelpers.generateStyleForColor(locale, colorName)
`import { ColorHelpers } from 'meteor/qulture:qr-ui-base/helpers';`

Generates a style object with locale and the company color (getMainColor)

##### Params:
 - (String or String[]) locale - place(s) where the style color will be applied. (`bg`, `color` or `border`)
 - (String) colorName - Name of the color variables, if this value is diferente than `main` no style will be returned.

##### Return:
 - (Object) Style object - like `{ borderColor: #F0F0F0 }`


## Semaphore Colors

### SemaphoreHelpers.getSemaphoreColor(value, options)
`import { SemaphoreColors } from 'meteor/qulture:qr-ui-base/helpers';`

Returns the color name relative to the value and options

##### Params:
 - (Number) value - numerical value beign evaluated
 - (Object) options - customizations object, default: `{ min: 1, max: 5 }`

##### Return:
 - (String) Color name(`grading-good`, `grading-bad`, `grading-normal`)


## Name Formatter

### NameFormatter.getInitials(fullName)
`import { NameFormatter } from 'meteor/qulture:qr-ui-base/helpers';`

Returns the first letter of the first and last name

##### Params:
 - (String) fullName

##### Return:
 - (String) Initials


### NameFormatter.getFirstName(fullName)
`import { NameFormatter } from 'meteor/qulture:qr-ui-base/helpers';`

Returns the first name of the fullName param

##### Params:
 - (String) fullName

##### Return:
 - (String) First name


### NameFormatter.getFirstAndLastName(name)
`import { NameFormatter } from 'meteor/qulture:qr-ui-base/helpers';`

Returns the first and last name of the fullName param

##### Params:
 - (String) fullName

##### Return:
 - (String) First name

------------------------

# CSS Helpers

## General CSS Helpers
 - `clicable`: Pointer cursor on hover
 - `clearfix`: Clear after
 - `bloc`: Display block

## Typography CSS Helpers
**Font sizes names:** `xxxl, xxl, xl, l, default, m, s, xs, xxs, xxxs`

 - `selector`: Larger font with main color
 - `text-right`: Text align right
 - `text-center`: Text align center
 - `text-left`: Text align left
 - `thin-weight`: Thin font weight
 - `light-weight`: Light font weight
 - `normal-weight`: Normal font weight
 - `medium-weight`: Medium font weight
 - `bold-weight`: Bold font weight
 - `x-bold-weight`: Bold font weight
 - `xx-bold-weight`: Bold font weight
 - `xxx-bold-weight`: Bold font weight
 - `min-line-height`: Very small line-height
 - `small-line-height`: Small line-height
 - `medium-line-height`: Medium line-height
 - `${fontSizeName}-font-size`: Customize the font size (fontSizeName could be any of the [font sizes names](#typography))


## Sizes CSS Helpers
**Size names:** `xxx-large, xx-large, x-large, large, medium, small, x-small, xx-small, xxx-small`
  
  - `full-width`: Takes 100% of the width
  - `large-width`: Takes 640px of the width
  - `medium-width`: Takes 482px of the width
  - `small-width`: Takes 290px of the width
  - `no-margin`: No margin on all sides
  - `no-margin-left`: No margin on left
  - `no-margin-right`: No margin on right
  - `no-margin-top`: No margin on top
  - `no-margin-bottom`: No margin on bottom
  - `no-padding`: No padding on all sides
  - `no-padding-left`: No padding on left
  - `no-padding-right`: No padding on right
  - `no-padding-top`: No padding on top
  - `no-padding-bottom`: No padding on bottom
  - `${sizeName}-padding`: Custom padding on all sides (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-padding-left`: Custom padding on left (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-padding-right`: Custom padding on right (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-padding-top`: Custom padding on top (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-padding-bottom`: Custom padding on bottom (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-margin`: Custom margin on all sides (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-margin-left`: Custom margin on left (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-margin-right`: Custom margin on right (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-margin-top`: Custom margin on top (sizeName could be any of the [size names](#sizes))
  - `${sizeName}-margin-bottom`: Custom margin on bottom (sizeName could be any of the [size names](#sizes))


## Colors CSS Helpers
**Color names:** 
```
main, admin, employee, white,
detail-1, detail-2, detail-3, detail-4,
light-detail-1, light-detail-2, light-detail-3, light-detail-4, light-detail-5,
alert, warn, success, info,
grading-good, grading-normal, grading-bad, grading-max, grading-out
```
  
 - `${colorName}-color`: Custom font color (colorName could be any of the [color names](#colors))
 - `${colorName}-bg-color`: Custom background color (colorName could be any of the [color names](#colors))
 - `${colorName}-border-color`: Custom border color (colorName could be any of the [color names](#colors))

## Borders
 - `dashed-border`: Dashed border
 - `solid-border`: Solid border
 - `dotted-border`: Dotted border
 
