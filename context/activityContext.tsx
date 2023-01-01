import { createContext, ReactNode, useCallback, useContext, useState } from 'react'
import { listActivities } from '../instances/strava'
import { IActivity } from '../interfaces/activity'
import { useAuthentication } from './authenticationContext'

type ActivityContextType = {
  activities: IActivity[] | undefined
  setAllActivities: () => void
}

const ActivityContextDefaultValues: ActivityContextType = {
  activities: undefined,
  setAllActivities: () => {
    return
  },
}

const ActivityContext = createContext<ActivityContextType>(
  ActivityContextDefaultValues
)

export function useActivity(): ActivityContextType {
  return useContext(ActivityContext)
}

type Props = {
  children: ReactNode
}

export function ActivityProvider({ children }: Props): JSX.Element {
  const { accessToken } = useAuthentication()
  const [activities, setActivities] = useState<IActivity[]>()

  const listAllActivities = useCallback(async () => {
    try {
      const { data } = await listActivities(accessToken)
      setActivities(data.data)
    } catch {
      setActivities(undefined)
      console.error('Erro ao buscar atividades do usuário.')
    }
  }, [accessToken])

  // const listAllActivities = async () => {
  //   await listActivities(accessToken)
  //   .then((data) => {
  //     setActivities(data.data.data)
  //     console.log(data)
  //     return data.data.data
  //   })
  // }

  const setAllActivities = () => {
    listAllActivities()
  }

  const value = {
    activities,
    setAllActivities
  }

  return(
      <ActivityContext.Provider value={value}>
        {children}
      </ActivityContext.Provider>
  )
}
