<div class="references">
  <div class="reference">
    <a href="public/images/components/AccountDropdown/1.png">
      <img src="public/images/components/AccountDropdown/1.png" alt="AccountDropdown 1" />
    </a>
  </div>
  <div class="reference">
    <a href="public/images/components/AccountDropdown/2.png">
      <img src="public/images/components/AccountDropdown/2.png" alt="AccountDropdown 2" />
    </a>
  </div>
</div>

```jsx
<Box
  padding={5}
  dark
  height={200}
>
  <AccountDropdown
    name="Jimmy Barnes"
    items={[
      {
        text    : 'Account Settings',
        payload : 'account',
      },
      {
        text    : 'Logout',
        payload : 'logout',
      },
      {
        text    : 'Google',
        payload : 'google',
        href    : 'https://www.google.com',
      },
    ]}
    onItemClick={(item) => {
      console.log(item);
    }}
    onToggleClick={(isOpen) => {
      console.log(isOpen ? 'open' : 'closed');
    }}
  />
</Box>
```
