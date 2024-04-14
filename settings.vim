" <-------------------------My VIM settings------------------------->
:syntax on
:set wrap
:set number
:set autoread
:set smarttab
:set hlsearch
:set ignorecase
:set smartcase
:set splitright
:set autoindent
:set termguicolors
:set relativenumber
:set mouse=a
:set tabstop=4
:set expandtab
:set shiftwidth=4
:set laststatus=3
:set softtabstop=4
:set ttimeoutlen=0
:set updatetime=300
:set encoding=UTF-8
:set completeopt-=preview 
:set clipboard=unnamedplus " system clipboard
:set timeoutlen=1000

:colorscheme zaibatsu

" <-------------------------Keybindings------------------------->
let mapleader = "\<Space>"

:noremap j gj
:noremap k gk
nnoremap <Leader>h K<CR>
tnoremap <Esc> <C-\><C-n>
inoremap <C-O> <C-o>o
inoremap <C-b> <C-o>vbd
nnoremap <C-o> :tabn<CR>
nnoremap <C-i> :tabp<CR>
nnoremap <C-e> <C-a>
nnoremap <C-p> <C-e>
nnoremap <C-b> vbd
nnoremap <C-c> :set nowrap<CR>
nnoremap <Leader>v <C-v>
nnoremap <Leader>k :q<CR>

" Navigation in windows
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

" Prevent registering to clipboard
nnoremap S "_S
nnoremap c "_c
nnoremap d "_d
nnoremap D "_D
nnoremap C "_C
nnoremap X "+x
nnoremap xx dd
nnoremap dd "_dd

" Visual mode
vnoremap p "_dP
vnoremap d "_d
vnoremap D "_D
vnoremap c "_c

" For selecting strings by 'h,j,k,l' keys 
nnoremap <S-h> vh
nnoremap <S-j> vj
nnoremap <S-k> vk
nnoremap <S-l> vl

" Save, Cut, Undo, Redo, Selection & Yank keybindings
vmap <C-h> b
vmap <C-l> e
nmap ,p o<Esc>p==
nnoremap <C-s> :w<CR>
nnoremap <C-a> ggVG
vnoremap <BS> "_d
nnoremap <Leader>z I<Esc>vg_

" Short the SORROUNDINGS
"CUT with no REG
nnoremap c( "_ci(
nnoremap c) "_ci)
nnoremap c[ "_ci[
nnoremap c] "_ci]
nnoremap c{ "_ci{
nnoremap c} "_ci}
nnoremap c< "_ci<
nnoremap c> "_ci>
nnoremap c" "_ci"
nnoremap c' "_ci'
nnoremap c` "_ci`
nnoremap cw "_ciw
nnoremap cp "_cip

" Visually Select
nnoremap v( vi(
nnoremap v) vi)
nnoremap v[ vi[
nnoremap v] vi]
nnoremap v{ vi{
nnoremap v} vi}
nnoremap v< vi<
nnoremap v> vi>
nnoremap v" vi"
nnoremap v' vi'
nnoremap v` vi`
nnoremap vw viw

" Delete with no REG
nnoremap d( "_di(
nnoremap d) "_di)
nnoremap d[ "_di[
nnoremap d] "_di]
nnoremap d{ "_di{
nnoremap d} "_di}
nnoremap d< "_di<
nnoremap d> "_di>
nnoremap d" "_di"
nnoremap d' "_di'
nnoremap d` "_di`
nnoremap dw "_diw
nnoremap dp "_dip

" Yank
nnoremap y( yi(
nnoremap y) yi)
nnoremap y[ yi[
nnoremap y] yi]
nnoremap y{ yi{
nnoremap y} yi}
nnoremap y< yi<
nnoremap y> yi>
nnoremap y" yi"
nnoremap y' yi'
nnoremap y` yi`
nnoremap yw yiw
nnoremap yp yip

" CUT in REG
nnoremap q( ci(
nnoremap q) ci)
nnoremap q[ ci[
nnoremap q] ci]
nnoremap q{ ci{
nnoremap q} ci}
nnoremap q< ci<
nnoremap q> ci>
nnoremap q" ci"
nnoremap q' ci'
nnoremap q` ci`
nnoremap qw ciw
nnoremap qp cip

" Alt + arrow Up/Down or 'j,k' to move line up and down
inoremap <M-Up> <Esc>:m-2<CR>==gi
inoremap <M-Down> <Esc>:m+<CR>==gi
nnoremap <M-Up> :m-2<CR>==
nnoremap <M-Down> :m+<CR>==
nnoremap <M-j> :m .+1<CR>==
nnoremap <M-k> :m .-2<CR>==
vnoremap <M-j> :m '>+1<CR>gv=gv
vnoremap <M-k> :m '<-2<CR>gv=gv

" <-----------------------------Preview------------------------------------>
function! OpenPreview()
    setlocal previewheight=1
    let l:line = line('.')
    execute 'pedit +' . l:line . ' %'
endfunction

nnoremap <silent> gp :call OpenPreview()<CR>
nnoremap gq :pclose<CR>

" <-----------------------------Terminal------------------------------------>
nnoremap <Leader>p :vsplit \| terminal<CR>
nnoremap <Leader>b :botright split \| terminal<CR>

" <-----------------------------Sources------------------------------------>
:setlocal tabstop=4 shiftwidth=4 softtabstop=4 expandtab

