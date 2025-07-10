import {defineType, defineField, defineArrayMember} from 'sanity'

export const quiz = defineType({
  name: 'quiz',
  title: 'Quizzes',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Quiz Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Quiz Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'questions',
      title: 'Questions',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'questions'}]}],
    },
  ],
})
