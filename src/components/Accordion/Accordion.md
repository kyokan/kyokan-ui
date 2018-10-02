<div class="references">
  <div class="reference">
    <a href="public/images/components/Accordion/1.png">
      <img src="public/images/components/Accordion/1.png" alt="Accordion 1" />
    </a>
  </div>
  <div class="reference">
    <a href="public/images/components/Accordion/2.png">
      <img src="public/images/components/Accordion/2.png" alt="Accordion 2" />
    </a>
  </div>
</div>

```jsx
<Accordion
  title="Accordion title"
  onChange={(event, isExpanded) => {
    console.log('Accordion toggled', isExpanded ? 'open' : 'closed');
  }}
>
  Content contained within Accordion
</Accordion>

<br />

<Accordion
  title="Accordion 1 title"
  onChange={(event, isExpanded) => {
    console.log('Accordion 1 toggled', isExpanded ? 'open' : 'closed');
  }}
  first
>
  Content contained within Accordion 1
</Accordion>

<Accordion
  title="Accordion 2 title"
  onChange={(event, isExpanded) => {
    console.log('Accordion 2 toggled', isExpanded ? 'open' : 'closed');
  }}
  middle
  expanded
>
  Content contained within Accordion 2
</Accordion>

<Accordion
  title="Accordion 3 title"
  onChange={(event, isExpanded) => {
    console.log('Accordion 3 toggled', isExpanded ? 'open' : 'closed');
  }}
  last
>
  Content contained within Accordion 3
</Accordion>
```
