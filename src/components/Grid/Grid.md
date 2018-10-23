<div class="references">

</div>

```jsx
<Grid fluid>
  <Row nogutter>
    <Column xs={6}>
      <div style={{ backgroundColor: 'yellow' }}>
        <Text>YELLOW</Text>
        <Hidden xs>
          <Description>
            Not shown on mobile screens
          </Description>
        </Hidden>
      </div>
    </Column>
    <Column xs={6}>
      <div style={{ backgroundColor: 'green' }}>
        <Text>GREEN</Text>
        <Visible xl>
          <Description>
            Only shown on wide screens
          </Description>
        </Visible>
      </div>
    </Column>
  </Row>
</Grid>
```
