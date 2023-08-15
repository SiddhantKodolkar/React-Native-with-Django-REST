from django.http import HttpResponse
from django.shortcuts import render
from api.models import Student
from api.serializers import StudentSerializer
from rest_framework.renderers import JSONRenderer

# particular student data 
def student_detail(request,pk):
    stu=Student.objects.get(id=pk)
    serializer=StudentSerializer(stu)   
    json_data=JSONRenderer().render(serializer.data)
    return HttpResponse(json_data,content_type='application/json')

# all students data-Queryset
def student_list(request):
    stu=Student.objects.all()
    serializer=StudentSerializer(stu,many=True) 
    #many cause there are multiple objects in a table   
    json_data=JSONRenderer().render(serializer.data)
    return HttpResponse(json_data,content_type='application/json')
