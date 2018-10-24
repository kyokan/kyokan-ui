<div class="references">
  <div class="reference">
    <a href="public/images/components/Tabs/1.png">
      <img src="public/images/components/Tabs/1.png" alt="Tabs 1" />
    </a>
  </div>
</div>

```jsx
<Tabs>
  <VerticalTab
    title="Tab 1"
    icon="user"
    onTabClick={() => {
      console.log('Tab 1 Click');
    }}
  >
    Tab 1 Content
  </VerticalTab>

  <VerticalTab
    title="Tab 2"
    icon="wallet"
    onTabClick={() => {
      console.log('Tab 2 Click');
    }}
  >
    Tab 2 Content
  </VerticalTab>
</Tabs>

<br />
<br />

<Tabs>
  <HorizontalTab
    title="Tab 1"
    icon="user"
    onTabClick={() => {
      console.log('Tab 1 Click');
    }}
  >
    Tab 1 Content
  </HorizontalTab>

  <HorizontalTab
    title="Tab 2"
    icon="wallet"
    onTabClick={() => {
      console.log('Tab 2 Click');
    }}
  >
    Tab 2 Content
  </HorizontalTab>
</Tabs>
```
