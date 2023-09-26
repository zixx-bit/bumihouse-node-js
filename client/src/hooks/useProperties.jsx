import React from 'react'

const useProperties = () => {

    const {data, isLoading, isError, refetch} = useQuery({queryKey: "allProperties"}, getAllProperties, {refetchOnWindowsFocus: false})

  return {
    data, isError, isLoading, refetch
  }
}

export default useProperties