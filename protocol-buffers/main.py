import addressbook_pb2

address_book = addressbook_pb2.AddressBook()


def AddPeople(address_book):
    # address_book.people.add()
    person = address_book.people.add()
    person.id = 1234
    person.name = "kished"
    person.email = "kished@gmail.com"
    phone = person.phones.add()
    phone.number = "555-43210900"
    phone.type = addressbook_pb2.Person.HOME

    print(address_book)
    with open("people.bin", "wb") as f:
        f.write(address_book.SerializeToString())
    print(address_book.SerializeToString())


def ListPeople(address_book):
    for person in address_book. people:
        print("Person ID:", person.id)
        print("  Name:", person.name)
        print("  E-mail address:", person.email)
        for phone_number in person. phones:
            print(phone_number. number)


address_book = addressbook_pb2.AddressBook()
with open("people.bin", "rb") as f:
    address_book.ParseFromString(f.read())

AddPeople(address_book)
ListPeople(address_book)
