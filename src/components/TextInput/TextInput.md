<div class="references">
  <div class="reference">
    <a href="public/images/components/TextInput/1.png">
      <img src="public/images/components/TextInput/1.png" alt="TextInput 1" />
    </a>
  </div>
  <div class="reference">
    <a href="public/images/components/TextInput/2.png">
      <img src="public/images/components/TextInput/2.png" alt="TextInput 2" />
    </a>
  </div>
</div>

```jsx
<TextInput
  value=""
  label="Label"
  placeholder="Default value"
  onChange={(domEvent) => {
    console.log(domEvent);
  }}
/>

<br />

<TextInput
  value="Value"
  label="Label"
  errorMessage="Error message"
  error
/>

<br />

<TextInput />
```
