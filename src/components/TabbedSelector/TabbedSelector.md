<div class="references">
  <div class="reference">
    <a href="public/images/components/TabbedSelector/1.png">
      <img src="public/images/components/TabbedSelector/1.png" alt="TabbedSelector 1" />
    </a>
  </div>
</div>

```jsx
<TabbedSelector
  defaultSelectedIndex={0}
  onlyOne
  vertical
>
  <TabbedSelectorOption
    icon="addUser"
  >
    Open for Enrollment
  </TabbedSelectorOption>

  <TabbedSelectorOption
    icon="copy"
  >
    Open for Submissions
  </TabbedSelectorOption>

  <TabbedSelectorOption
    icon="clipboard"
  >
    Under Evaluation
  </TabbedSelectorOption>

  <TabbedSelectorOption
    icon="award"
  >
    Finished
  </TabbedSelectorOption>
</TabbedSelector>

<br />
<br />

<TabbedSelector vertical>
  <TabbedSelectorOption>$</TabbedSelectorOption>
  <TabbedSelectorOption>$$</TabbedSelectorOption>
  <TabbedSelectorOption>$$$</TabbedSelectorOption>
  <TabbedSelectorOption>$$$$</TabbedSelectorOption>
</TabbedSelector>

<br />
<br />

<TabbedSelector onlyOne>
  <TabbedSelectorOption>Home</TabbedSelectorOption>
  <TabbedSelectorOption>Store</TabbedSelectorOption>
  <TabbedSelectorOption>About</TabbedSelectorOption>
  <TabbedSelectorOption>Contact</TabbedSelectorOption>
</TabbedSelector>
```
