export default async () => {
  const storyblokApi = useStoryblokApi()
  const labelData = await storyblokApi.get(
    'cdn/datasource_entries',
    {
      datasource: 'labels'
    }
  )

  const labels = labelData.data.datasource_entries

  const getLabel = (key) => {
    const targetLabel = labels?.find(label => label.name === key)
    return targetLabel.value
  }

  return { getLabel }
}
