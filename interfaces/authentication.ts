export interface IAthlete {
  badge_type_id: number
  bio: string
  city: string
  country: string
  created_at: string
  firstname: string
  follower: null
  friend: null
  id: number
  lastname: string
  premium: boolean
  profile: string
  profile_medium: string
  resource_state: number
  sex: string
  state: string
  summit: boolean
  updated_at: string
  username: string
  weight: number
}

export interface IAuthentication {
  access_token: string
  athlete: IAthlete
  expires_at: number
  expires_in: number
  refresh_token: string
  token_type: string
}