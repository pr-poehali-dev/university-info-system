import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const FacultySection = () => {
  const faculties = [
    {
      name: "Физико-математический факультет",
      dean: "проф. Бабенко А.С.",
      departments: 6,
      students: 1100,
      description: "Математика, физика, информатика",
      color: "bg-blue-50 border-blue-200",
      icon: "Calculator",
    },
    {
      name: "Факультет истории и права",
      dean: "проф. Колесникова М.Е.",
      departments: 8,
      students: 1500,
      description: "История, юриспруденция, политология",
      color: "bg-purple-50 border-purple-200",
      icon: "Scale",
    },
    {
      name: "Биолого-химический факультет",
      dean: "проф. Дохова Т.М.",
      departments: 7,
      students: 950,
      description: "Биология, экология, химия",
      color: "bg-green-50 border-green-200",
      icon: "TestTube",
    },
    {
      name: "Филологический факультет",
      dean: "проф. Лексина Т.В.",
      departments: 5,
      students: 1200,
      description: "Русская филология, литературоведение",
      color: "bg-emerald-50 border-emerald-200",
      icon: "BookOpen",
    },
    {
      name: "Географический факультет",
      dean: "проф. Шальнев В.А.",
      departments: 4,
      students: 650,
      description: "География, туризм, картография",
      color: "bg-amber-50 border-amber-200",
      icon: "Globe",
    },
    {
      name: "Факультет психологии",
      dean: "проф. Акопов Г.В.",
      departments: 3,
      students: 800,
      description: "Психология, социальная работа",
      color: "bg-cyan-50 border-cyan-200",
      icon: "Brain",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Факультеты</h2>
          <p className="text-lg text-gray-600">
            Широкий спектр образовательных направлений
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculties.map((faculty, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${faculty.color}`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Icon name={faculty.icon} className="h-8 w-8 text-primary" />
                  <Badge variant="secondary">
                    {faculty.departments} кафедр
                  </Badge>
                </div>
                <CardTitle className="text-lg">{faculty.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{faculty.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="User" size={16} className="mr-2" />
                    Декан: {faculty.dean}
                  </div>
                  <div className="flex items-center text-sm text-gray-700">
                    <Icon name="Users" size={16} className="mr-2" />
                    Студентов: {faculty.students}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
