import {LaunchIcon, LinkIcon} from '@sanity/icons'
import {Card, Heading, Tab, TabList, TabPanel, TextInput} from '@sanity/ui'
import {useState} from 'react'
import type {TextInputProps} from 'sanity'

type LinkProps = TextInputProps & {}

export default function Link(props: LinkProps) {
  const {elementProps} = props
  const [id, setId] = useState('internal-link')

  return (
    <Card padding={4}>
      <TabList space={2}>
        <Tab
          aria-controls="internal-link-panel"
          icon={LinkIcon}
          id="internal-link-tab"
          label="Internal Link"
          onClick={() => setId('internal-link')}
          selected={id === 'internal-link'}
        />
        <Tab
          aria-controls="external-link-panel"
          icon={LaunchIcon}
          id="external-link-tab"
          label="External Link"
          onClick={() => setId('external-link')}
          selected={id === 'external-link'}
        />
      </TabList>

      <TabPanel
        aria-labelledby="internal-link-tab"
        hidden={id !== 'internal-link'}
        id="internal-link-panel"
      >
        <Card border marginTop={2} padding={4} radius={2}>
          <TextInput {...elementProps} />
        </Card>
      </TabPanel>

      <TabPanel
        aria-labelledby="external-link-tab"
        hidden={id !== 'external-link'}
        id="external-link-panel"
      >
        <Card border marginTop={2} padding={4}>
          <Heading>Preview</Heading>
        </Card>
      </TabPanel>
    </Card>
  )
}
