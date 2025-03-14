import { useStoryblokApi } from "@storyblok/vue"

// const labelResponse = await storyblokApi.get(
//   'cdn/datasource_entries',
//   {
//     datasource: 'labels'
//   }
// )

// const labels = ref(labelResponse?.data?.datasource_entries)

export function useLabels() {
  const storyblokApi = useStoryblokApi()
  const labels = ref(null)
  const getLabels = async () => {
    try {
      const data = await storyblokApi.get(
        'cdn/datasource_entries',
        {
          datasource: 'labels'
        }
      )
      labels.value = data?.data
    }
    catch (error) {
      console.log(error)
    }
  }

  const getLabel = (datasource, key) => {
    // console.log('ld:',  labelData)
    // console.log('ldv:',  labelData._value)
    // console.log('ldv2:',  labelData.value)
    // console.log('ldv2:',  labelData.datasource_entries)
    const targetLabel = datasource?.find(label => label.name === key)
    return targetLabel.value
  }

  getLabels();

  return {
    labels,
    getLabel
  }
}
