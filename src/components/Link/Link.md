<div class="references">

</div>

```jsx
<Link
  href="https://www.google.com/"
  onClick={() => {
    console.log('clicked on Google link');
  }}
>
  Google
</Link>

<br />

<Link
  href="https://www.google.com/"
  target="_blank"
  onClick={() => {
    console.log('clicked on Google link to open in new tab');
  }}
>
  Google (in new window)
</Link>

<br />

<Link
  onClick={() => {
    console.log('clicked on Link 2');
  }}
>
  Link 2
</Link>
```
