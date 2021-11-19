# Pet shop management project 

Project developed in monorepo to facilitate management, thus improving performance on project development and maintenance. 

## Available Alias

- @assets
- @components
-   @atoms
-   @molecules
-   @organisms
-   @templates
- @contexts
- @desisgn-system
- @pages
- @roles
- @services
- @styles
- @utils


## Available Scripts

- `yarn start`
- `yarn test`
- `yarn build`

## Structure of CSS

> Use methodology **BEM** CSS

**Text:**

- font
- text

**Display:**

- flex
- grid

**Lenght:**

- width
- height

**Spacing:**

- margin
- padding

**Other:**

- border-width
- border-style
- border-radius

**Colors:**

- background
- color

**Transitions:**

**Class:**

- .container {}

**Media Query**

```js
import styled from 'styled-component';

export const Container = styled.div`
  font-size: 1rem;
  font-weight: normal;
  text-align: center;

  display: flex;
  flex-direction: row;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin: 0 16px;
  padding: 0 16px;

  border: none;
  border-radius: 0.2rem;

  background: #1e90ef;
  color: #fff;

  transition: all 500ms linear;

  .container__header {
    width: 100%;
    height: 70px;

    background: orange;
  }

  @media (min-width: 768px) {
    width: 50%;
    height: 80%;
  }
`;
```