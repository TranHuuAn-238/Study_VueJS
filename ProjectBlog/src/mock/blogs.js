import faker from 'faker';
// faker.locale = 'vi';

var listBlogs = [];

for(var index = 0; index < 10; index++) {
    let data = {
        id: Math.round(Math.random() * 999999),
        title: faker.lorem.sentences(1),
        abstract: faker.lorem.sentences(1),
        fullName: faker.name.firstName() + ' ' + faker.name.lastName(),
        create_at: faker.date.past()
    }
    listBlogs.push(data);
}

export default listBlogs;
