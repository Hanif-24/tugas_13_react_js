import "semantic-ui-css/semantic.min.css";

import {
  List,
  Grid,
  Loader,
  Dimmer,
  Image,
  Placeholder,
  Segment,
  Divider,
  Header,
  Icon,
  Search,
  Button,
  Table,
  Label,
  Menu
  } from "semantic-ui-react";


function App() {
  return (
    <div className="App">
      <br/>

      <Segment placeholder>
        <Grid columns={2} stackable textAlign='center'>
          <Divider vertical>Or</Divider>

          <Grid.Row verticalAlign='middle'>
            <Grid.Column>
              <Header icon>
                <Icon name='search' />
                Cari Document
              </Header>

              <Search placeholder='Search Document...' />
            </Grid.Column>

            <Grid.Column>
              <Header icon>
                <Icon name='world' />
                Tambah Document Baru
              </Header>
              <Button primary>Create Document</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment>
        <Dimmer active>
          <Loader>Loading</Loader>
        </Dimmer>
        <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      </Segment>

      <Grid columns={3} stackable>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
             <Placeholder.Header image>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Header>
             <Placeholder.Paragraph>
               <Placeholder.Line />
               <Placeholder.Line /> 
             </Placeholder.Paragraph>
           </Placeholder>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment raised>
            <Placeholder>
             <Placeholder.Header image>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Header>
             <Placeholder.Paragraph>
               <Placeholder.Line />
               <Placeholder.Line />
             </Placeholder.Paragraph>
           </Placeholder>
          </Segment>
        </Grid.Column>

        <Grid.Column>
          <List>
          <h3>Website Terkait</h3>
            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Google </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Facebook </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Semantik Ui </a> </List.Content>
            </List.Item>

            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> Niomic </a> </List.Content>
            </List.Item>
            
            <List.Item>
             <List.Icon name='linkify' />
             <List.Content><a href='.'> React Js </a> </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
      </Grid>
      <Grid textAlign='center' verticalAlign='middle'>
        <Grid.Column width={11}>

        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='2' textAlign='right'><Search placeholder='Search Document...' /></Table.HeaderCell>
            </Table.Row>
            <Table.Row textAlign='center'>
              <Table.HeaderCell>Nama Dokument</Table.HeaderCell>
              <Table.HeaderCell>Jenis File</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell positive>
                <Label ribbon>Panduan Belajar Javascript</Label>
              </Table.Cell>
              <Table.Cell textAlign='center'>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar CSS</Table.Cell>
              <Table.Cell textAlign='center'>PDF</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Panduan Belajar React Js</Table.Cell>
              <Table.Cell textAlign='center'>PDF</Table.Cell>
            </Table.Row>
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='2'>
                <Menu floated='right' pagination>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron left' />
                  </Menu.Item>
                  <Menu.Item as='a'>1</Menu.Item>
                  <Menu.Item as='a'>2</Menu.Item>
                  <Menu.Item as='a'>3</Menu.Item>
                  <Menu.Item as='a'>4</Menu.Item>
                  <Menu.Item as='a' icon>
                    <Icon name='chevron right' />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
