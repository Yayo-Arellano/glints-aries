import React from 'react';
import Container from '../src/Container';

const ContainerStory = () => (
  <div className="doc-mainbar">
    <div style={{ marginBottom: '2em' }}>
      <h1>
        Container
      </h1>
      <p>
        <code>
          {'import { Container } from \'glints-aries\''}
        </code>
      </p>
    </div>

    <Container>
      Test
    </Container>

    <table className="doc-table">
      <thead>
        <tr>
          <th></th>
          <th>
              Mobile Small
          </th>
          <th>
              Mobile Medium
          </th>
          <th>
              Mobile Large
          </th>
          <th>
              Tablet
          </th>
          <th>
              Desktop Small
          </th>
          <th>
              Desktop Medium
          </th>
          <th>
              Desktop Large
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <th>
              Breakpoint
            </th>
          </td>
          <td>
            {'< 320px  && ≥ 320px'}
          </td>
          <td>
            {'≥ 480px'}
          </td>
          <td>
            {'≥ 640px'}
          </td>
          <td>
            {'≥ 768px'}
          </td>
          <td>
            {'≥ 1024px'}
          </td>
          <td>
            {'≥ 1260px'}
          </td>
          <td>
            {'≥ 1440px'}
          </td>
        </tr>
        <tr>
          <td>
            <th>
              Container width
            </th>
          </td>
          <td>
            300px
          </td>
          <td>
            440px
          </td>
          <td>
            600px
          </td>
          <td>
            720px
          </td>
          <td>
            960px
          </td>
          <td>
            1200px
          </td>
          <td>
            1400px
          </td>
        </tr>
        <tr>
          <td>
            <th>
              Gutter width
            </th>
          </td>
          <td>
              10px
          </td>
          <td>
              20px
          </td>
          <td>
              20px
          </td>
          <td>
              24px
          </td>
          <td>
              32px
          </td>
          <td>
              30px
          </td>
          <td>
              20px
          </td>
        </tr>
      </tbody>
    </table>

    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Usage
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <pre>
              {`<Container>
  <YourComponent />
</Component>`}
            </pre>
          </td>
        </tr>
      </tbody>
    </table>

    <table className="doc-table">
      <thead>
        <tr>
          <th>
            Note
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            {'To achieve this size, you should always wrap your container inside <Container />'}
          </td>
        </tr>
      </tbody>
    </table>

  </div>
);

export default ContainerStory;
