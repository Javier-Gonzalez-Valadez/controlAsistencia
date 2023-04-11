$(document).ready(function () {

    idArea=$('#idArea').val();
    idSubd = $('#idSubd').val();
    console.log(idSubd);
        $('#tableConsultar').DataTable({
            "aaSorting":[],
            'ajax':{
                'method': "POST",
                'url': "http://132.247.147.17/~javiergv/controlAsistencia/usuario/consultUsuariosPorSubd", 
                'data': {
                    
                    'idSubdireccion' : idSubd,
                },
            },
            'columns': [
                { data: 'nombre' },  
                { data: 'loginUsuario' },
                { data: 'correo' },  
                { data: 'nomPerfil' },
                { data: 'nomArea' } 
            ],
            language: {
                "decimal": "",
                "emptyTable": "No hay usuarios que mostrar",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ usuarios totales",
                "infoEmpty": "Mostrando 0 de 0 de 0 usuarios totales",
                "infoFiltered": "(Filtrado de _MAX_ total usuarios totales)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ usuarios",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "No se ecnontraron usuarios",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
            }
        });

    function procesando(){
        var Toast = Swal.mixin({  
            toast: true,
            position: 'top-center', 
            showConfirmButton: false,     
            timer: 4000  
        });   
        Toast.fire({    
            icon: 'success',
            title: 'Procesando...'
        })
    }
    function camposFaltantes(){
        var Toast = Swal.mixin({  
            toast: true,
            position: 'top-center', 
            showConfirmButton: false,     
            timer: 4000   
        });   
        Toast.fire({    
            icon: 'error',
            title: 'Seleccione el departamento del cual quiere consultar los empleados primeramente !!'
        })
    }

    function alertaError(){
        var Toast = Swal.mixin({  
            toast: true,
            position: 'top-center', 
            showConfirmButton: false,     
            timer: 5000  
        });   
        Toast.fire({   
            icon: 'error',
            title: 'Hubo un error a la hora de buscar a los usuarios...'
        })
    }
});
