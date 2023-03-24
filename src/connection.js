const Sequelize = require('sequelize');
const sequelize = new Sequelize("db_study_app",'postgres','ale2015xD',{
    host: 'localhost',
    port:  5432,
    dialect: 'postgres'
});
const testConnection= function(){
    try {
        sequelize.authenticate();
        console.log('Conexion Exitosa');
    } catch (error) {
        console.log('Error de conexion:',error);
    }
}
testConnection();
module.exports={
    Sequelize,
    sequelize
}