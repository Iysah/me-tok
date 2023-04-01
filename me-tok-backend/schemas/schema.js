// First we import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'


// Then import schema types from any plugins that might expose them
import createSchema from 'all:part:@sanity/base/schema-type'
import post from './post'
import user from './user'
import comment from './comment'
import postedBy from './postedBy'

export default createSchema({
    name: 'default',

    types: schemaTypes.concat([
        post, user, comment, postedBy
    ]),

})