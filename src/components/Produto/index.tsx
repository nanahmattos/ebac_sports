import { useDispatch } from 'react-redux/es/exports'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { addFavoritos } from '../../store/reducers/favoritos'
import { useState } from 'react'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const [estaNosFavoritos, setEstaNosFavoritos] = useState(false)
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => {
          dispatch(addFavoritos(produto))
          setEstaNosFavoritos(!estaNosFavoritos)
        }}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => dispatch(adicionar(produto))} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
