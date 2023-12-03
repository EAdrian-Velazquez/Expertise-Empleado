<div class="modal fade" id="modalCurso" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel"></h5>
            </div>
            <form id="formCursos">    
                <div class="modal-body" scrollY="true">
        <!-------------------------------------------------- 1 LINEA -------------------------------------------------------------------------->
                    <div class="row">
                        <div class="col-lg-3">
                            <div class="form-group">
                                <label for="" class="col-form-label">Categoria Cursos</label>
                                <input type="text" class="form-control" id="opcC" style="display:none ">
                                <input type="text" class="form-control" id="idC" style="display:none ">
                                <input type="text" class="form-control" id="num_empC" style="display:none ">
                                <select class="form-select form-select" id="cat_curso">
                                    <option value="0" selected="selected">Selecciona registro</option>
                                        <?php while($rowM1 = pg_fetch_assoc($resultadoM1)){  ?>
                                    <option value="<?php echo $rowM1['idcategcursos']; ?>" selected="valor"> 
                                            <?php echo $rowM1['nomcategcursos']; ?>
                                    </option>
                                        <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="form-group">
                                <label for="" class="col-form-label">Tipo Cursos</label>
                                <select class="form-select form-select" name="tipocurso" id="tip_curso">

                                </select>
                            </div>
                        </div>
                        <div class="col-lg-5">
                            <div class="form-group">
                                <label for="" class="col-form-label">Cursos</label>
                                <select class="form-select form-select" name="nomcurso" id="nom_curso">
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger" id ="cierreModalC">Cancelar</button>
                    <button type="submit" id="btnGuardarC" class="btn btn-success">Guardar</button>
                </div>
            </form>    
        </div>
    </div>
</div>