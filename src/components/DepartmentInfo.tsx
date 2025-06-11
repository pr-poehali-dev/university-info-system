import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const DepartmentInfo = () => {
  const departments = {
    math: [
      {
        name: "Кафедра математического анализа",
        head: "проф. Бабенко А.С.",
        staff: 14,
        courses: [
          "Математический анализ",
          "Теория функций",
          "Дифференциальные уравнения",
        ],
      },
      {
        name: "Кафедра алгебры и геометрии",
        head: "проф. Васильев П.С.",
        staff: 12,
        courses: ["Алгебра", "Геометрия", "Топология"],
      },
    ],
    physics: [
      {
        name: "Кафедра теоретической физики",
        head: "проф. Савотченко С.Е.",
        staff: 10,
        courses: [
          "Теоретическая механика",
          "Электродинамика",
          "Квантовая физика",
        ],
      },
      {
        name: "Кафедра общей физики",
        head: "проф. Гонтарь И.Г.",
        staff: 16,
        courses: ["Общая физика", "Молекулярная физика", "Оптика"],
      },
    ],
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Кафедры</h2>
          <p className="text-lg text-gray-600">
            Ведущие научно-педагогические подразделения
          </p>
        </div>

        <Tabs defaultValue="math" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="math" className="flex items-center space-x-2">
              <Icon name="Calculator" size={16} />
              <span>Физмат</span>
            </TabsTrigger>
            <TabsTrigger
              value="physics"
              className="flex items-center space-x-2"
            >
              <Icon name="Atom" size={16} />
              <span>Физфак</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="math">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.math.map((dept, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {dept.staff} сотрудников
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-700 mb-2">
                        <Icon name="User" size={16} className="mr-2" />
                        Заведующий: {dept.head}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Основные курсы:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.courses.map((course, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="physics">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {departments.physics.map((dept, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <Badge variant="outline" className="w-fit">
                      {dept.staff} сотрудников
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex items-center text-sm text-gray-700 mb-2">
                        <Icon name="User" size={16} className="mr-2" />
                        Заведующий: {dept.head}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">
                        Основные курсы:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {dept.courses.map((course, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default DepartmentInfo;
