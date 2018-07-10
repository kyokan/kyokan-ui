# Kyokan UI

```shell
npx styleguidist server # to start a style guide dev server.
npx styleguidist build  # to build a static version.
```

BrandHeader (g1)
    logo
    brandName
    links (g28)
        icon
        text
    children (for dropdown, action button)
AccountDropdown (d1)
    avatar
    name
    options (d3)
Title (g1)
    icon (g14)
Subtitle (g1)
MetaMaskButton (g1)
Header (g1)
Accordion (g1)
Link
    type
        standard (g1)
        subdued (g3)
Text (g1)
FlexContainer (g1)
Center (g1)
Left (d1)
Right (d1)
Video (g1)
    type
        youtube
        vimeo
Alert
    type
        success (green) (d45)
        error (red) (d44)
        warning (yellow) (g3)
    primaryMessage (g3)
    secondaryMessage (g3)
Input
    placeholder (inside) (g3)
    label (above)
        Icon (left) (g14)
    error (below) (g5)
    rightContent (g14) (g17) (d52)
Button
    icon
    text
    type
        base
        neutral
        brand
        brand-outline
        destructive
        success
    loading (g20)
    loadingText
    disabled (g9)
Note
Stepper (g9)
    controls (g14)
Step (g9)
Card (g9)
    header
    body
    footer
    static (g32)
Row (g9)
Slider (g9)
    name
    display
Select (g9)
    prefix (d1)
Checkbox
    label (g9)
TextArea
    placeholder (g9)
Table (g23)
    hiddenRows (g25)
    hideToggleText (g25)
StarRating
    totalNumOfStars
    starredCount
    averageCount (d1)
RadioButton
    checked (g24)
Pill
    icon (g31)
    size
        small
        large (d31)
    close (d31)
Modal (g36)
    header
    body
    footer
    close
MetricBox
    header (g25)
    info (g25)
    content (g25)
    icon (g25)
    secondaryContent
Tooltip
    direction (g29) (d25)
Toggle (g32)
SearchBar (d1)
    icon
    placeholder
OptionCard (d1)
    icon
    name
    description
CostButton (d1)
    text
    icon
    value
    size (d48)
UserTagline (d1)
    avatar
    name
Pagination (d11)
    currentPage
    totalCount
EmptyState (d14)
    header
    subheader
HorizontalTabGroup (d16)
ActionState
    header
    subheader
    action
VerticalTabGroup (d36)
OAuthButton
    authority (d45)
    username (d46)
    avatar
    close
Line (d36)
CurrencyTag (d47)
    DML
CurrencyBalance (d47)
CurrencyLimitControl (d47)
