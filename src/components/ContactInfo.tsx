import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ContactInfo = () => {
  const contacts = [
    {
      title: "Приёмная комиссия",
      phone: "+7 (8652) 35-61-50",
      email: "priem@stavsu.ru",
      address: "ул. Пушкина, 1",
      hours: "Пн-Пт: 9:00-17:00",
    },
    {
      title: "Деканат физмата",
      phone: "+7 (8652) 35-61-38",
      email: "physmath@stavsu.ru",
      address: "ул. Пушкина, 1, корп. 2",
      hours: "Пн-Пт: 8:30-17:30",
    },
    {
      title: "Деканат истории и права",
      phone: "+7 (8652) 35-61-45",
      email: "law@stavsu.ru",
      address: "ул. Пушкина, 1, корп. 3",
      hours: "Пн-Пт: 9:00-18:00",
    },
  ];

  const schedule = [
    { day: "Понедельник", time: "8:00 - 19:30" },
    { day: "Вторник", time: "8:00 - 19:30" },
    { day: "Среда", time: "8:00 - 19:30" },
    { day: "Четверг", time: "8:00 - 19:30" },
    { day: "Пятница", time: "8:00 - 19:30" },
    { day: "Суббота", time: "8:00 - 15:00" },
    { day: "Воскресенье", time: "Выходной" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Контакты и расписание
          </h2>
          <p className="text-lg text-gray-600">
            Связаться с нами и узнать время работы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Контактная информация
            </h3>
            <div className="space-y-4">
              {contacts.map((contact, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{contact.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center">
                      <Icon
                        name="Phone"
                        size={16}
                        className="mr-3 text-primary"
                      />
                      <span>{contact.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Mail"
                        size={16}
                        className="mr-3 text-primary"
                      />
                      <span>{contact.email}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="MapPin"
                        size={16}
                        className="mr-3 text-primary"
                      />
                      <span>{contact.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Icon
                        name="Clock"
                        size={16}
                        className="mr-3 text-primary"
                      />
                      <span>{contact.hours}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Расписание работы */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Расписание работы университета
            </h3>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Calendar" className="mr-2" />
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium">{item.day}</span>
                      <span
                        className={
                          item.day === "Воскресенье"
                            ? "text-red-600"
                            : "text-gray-600"
                        }
                      >
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t">
                  <Button className="w-full">
                    <Icon name="ExternalLink" size={16} className="mr-2" />
                    Официальный сайт СтГУ
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
