import { Story, StoryItem } from '@prisma/client'

export type IStory = Story & { items: StoryItem[] }